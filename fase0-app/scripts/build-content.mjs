// Convierte el contenido en markdown (src/content/md/) en los JSON que lee el sitio (src/content/*.json).
// Uso: npm run content. Los JSON se generan: edita siempre los .md.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const CONTENT = fileURLToPath(new URL('../src/content/', import.meta.url));
const MD = path.join(CONTENT, 'md');
const LETRAS = ['R', 'A', 'C', 'I'];

class ErrorContenido extends Error {}
const fail = (ruta, n, msg) => {
  throw new ErrorContenido(`${path.relative(process.cwd(), ruta)}:${n}: ${msg}`);
};

// Cada línea con su número, para mensajes de error con archivo y línea.
const leer = (ruta) => readFileSync(ruta, 'utf8').split(/\r?\n/).map((t, i) => ({ n: i + 1, t }));
const utiles = (lineas) => lineas.filter((l) => l.t.trim() !== '');

// Divide un bloque en secciones de un nivel de título ("## ", "### " o "#### ").
function secciones(lineas, prefijo) {
  const res = [];
  for (const l of lineas) {
    if (l.t.startsWith(prefijo) && l.t[prefijo.length] !== '#') res.push({ titulo: l.t.slice(prefijo.length).trim(), n: l.n, lineas: [] });
    else if (res.length) res.at(-1).lineas.push(l);
  }
  return res;
}

// Frontmatter: líneas "clave: valor" entre dos "---". Todo valor es texto.
function frontmatter(ruta, lineas) {
  if (lineas[0]?.t.trim() !== '---') fail(ruta, 1, 'el archivo debe empezar con "---"');
  const fin = lineas.findIndex((l, i) => i > 0 && l.t.trim() === '---');
  if (fin < 0) fail(ruta, 1, 'falta el "---" de cierre del encabezado');
  const datos = {};
  for (const l of lineas.slice(1, fin)) {
    if (!l.t.trim()) continue;
    const m = /^(\w+):\s*(.*)$/.exec(l.t);
    if (!m) fail(ruta, l.n, 'se esperaba "clave: valor"');
    datos[m[1]] = m[2].trim();
  }
  return { datos, cuerpo: lineas.slice(fin + 1) };
}

const requeridos = ['id', 'code', 'titulo', 'etapa', 'objetivo', 'kr', 'reglaDeOro', 'cuando'];

function parseJugada(ruta) {
  const { datos, cuerpo } = frontmatter(ruta, leer(ruta));
  for (const campo of requeridos) if (!datos[campo]) fail(ruta, 1, `falta "${campo}" en el encabezado`);

  const j = {};
  for (const campo of requeridos) j[campo] = datos[campo];
  const raci = { R: [], A: [], C: [], I: [] };
  const sec = secciones(cuerpo, '## ');

  for (const s of sec) {
    const bullets = () =>
      utiles(s.lineas).map((l) => {
        if (!l.t.startsWith('- ')) fail(ruta, l.n, `se esperaba una lista ("- ") en "${s.titulo}"`);
        return { n: l.n, t: l.t.slice(2) };
      });
    switch (s.titulo) {
      case 'Criterios de salida':
        j.criteriosSalida = bullets().map((b) => {
          const m = /^\*\*(.+?):\*\* (.*)$/.exec(b.t);
          if (!m) fail(ruta, b.n, 'criterio con formato "**Título:** detalle"');
          return { titulo: m[1], detalle: m[2] };
        });
        break;
      case 'Jugadores':
        j.jugadores = bullets().map((b) => {
          const m = /^(?:\*\*(.+?)\*\* · )?(.+?): (.*)$/.exec(b.t);
          if (!m) fail(ruta, b.n, 'jugador con formato "**SIGLA** · Rol: responsabilidad"');
          return m[1] ? { sigla: m[1], rol: m[2], responsabilidad: m[3] } : { rol: m[2], responsabilidad: m[3] };
        });
        break;
      case 'RACI':
        for (const b of bullets()) {
          const m = /^([RACI]):(.*)$/.exec(b.t);
          if (!m) fail(ruta, b.n, 'RACI con formato "- R: SIGLA, SIGLA"');
          raci[m[1]] = m[2].split(',').map((x) => x.trim()).filter(Boolean);
        }
        break;
      case 'Escenarios':
        j.escenarios = parseEscenarios(ruta, s.lineas);
        break;
      case 'Políticas':
        j.politicas = bullets().map((b) => b.t);
        break;
      case 'Templates':
        j.templates = bullets().map((b) => b.t);
        break;
      case 'Pro-tips':
        j.proTips = bullets().map((b) => b.t);
        break;
      case 'Trampas':
        j.trampas = bullets().map((b) => b.t);
        break;
      default:
        fail(ruta, s.n, `sección desconocida "## ${s.titulo}"`);
    }
  }

  // Las listas que el sitio siempre espera existen aunque estén vacías.
  for (const k of ['jugadores', 'escenarios', 'politicas', 'templates', 'proTips', 'trampas']) j[k] ??= [];
  if (!j.escenarios.length) fail(ruta, 1, 'falta la sección "## Escenarios"');
  return { jugada: j, raci };
}

function parseEscenarios(ruta, lineas) {
  const escenarios = [];
  for (const e of secciones(lineas, '### ')) {
    const esc = { titulo: e.titulo === '(sin título)' ? null : e.titulo, pasos: [] };
    const cuerpo = [];
    for (const p of secciones(e.lineas, '#### ')) {
      if (p.titulo === 'Entregables') {
        esc.entregables = {};
        for (const l of utiles(p.lineas)) {
          const m = /^- \*\*(Aceleradores|Inputs|Outcomes):\*\* (.*)$/.exec(l.t);
          if (!m) fail(ruta, l.n, 'entregable con formato "- **Aceleradores|Inputs|Outcomes:** texto"');
          esc.entregables[m[1].toLowerCase()] = m[2];
        }
        continue;
      }
      const paso = { titulo: p.titulo, detalle: [] };
      for (const l of utiles(p.lineas)) {
        if (l.t.startsWith('**RACI:**')) {
          const raci = {};
          for (const parte of l.t.slice('**RACI:**'.length).split('·')) {
            const m = /^\s*([RACI]):(.*)$/.exec(parte);
            if (!m) fail(ruta, l.n, 'RACI del paso con formato "**RACI:** R: X · A: X · C: X · I: X"');
            raci[m[1]] = m[2].split(',').map((x) => x.trim()).filter(Boolean);
          }
          paso.raci = Object.fromEntries(LETRAS.map((k) => [k, raci[k] ?? []]));
        } else if (l.t.startsWith('- ')) {
          paso.detalle.push(l.t.slice(2));
        } else {
          fail(ruta, l.n, `línea inesperada en el paso "${p.titulo}" (usa "- " para el detalle)`);
        }
      }
      esc.pasos.push(paso);
    }
    // Texto suelto justo debajo del título del escenario (descripción).
    const primerPaso = e.lineas.findIndex((l) => l.t.startsWith('#### '));
    for (const l of utiles(primerPaso < 0 ? e.lineas : e.lineas.slice(0, primerPaso))) if (!l.t.startsWith('- ')) cuerpo.push(l.t);
    if (cuerpo.length) esc.descripcion = cuerpo.join(' ');
    if (!esc.pasos.length) fail(ruta, e.n, `el escenario "${e.titulo}" no tiene pasos`);
    escenarios.push(esc);
  }
  return escenarios;
}

// Bullets "- clave: valor" o "- **clave**: valor" (glosario).
function parseGlosario(ruta) {
  const roles = {};
  const etiquetas = {};
  let destino = null;
  for (const l of leer(ruta)) {
    if (l.t.startsWith('## Roles')) destino = roles;
    else if (l.t.startsWith('## Etiquetas RACI')) destino = etiquetas;
    else if (l.t.startsWith('- ') && destino) {
      const m = /^- \*\*(.+?)\*\*: (.*)$/.exec(l.t);
      if (!m) fail(ruta, l.n, 'se esperaba "- **SIGLA**: texto"');
      destino[m[1]] = m[2].trim();
    }
  }
  return { roles, etiquetas };
}

function parseEtapas(ruta) {
  return utiles(leer(ruta))
    .filter((l) => l.t.startsWith('- '))
    .map((l) => {
      const partes = l.t.slice(2).split(' | ');
      if (partes.length !== 3) fail(ruta, l.n, 'se esperaba "- id | etiqueta | icono"');
      return { id: partes[0].trim(), label: partes[1].trim(), icon: partes[2].trim() };
    });
}

function parseLinks(ruta) {
  const links = {};
  for (const l of leer(ruta)) {
    if (!l.t.startsWith('- ')) continue;
    const m = /^- \[(.+)\]\((https?:\/\/\S+)\)$/.exec(l.t);
    if (!m) fail(ruta, l.n, 'se esperaba "- [texto](https://...)"');
    links[m[1]] = m[2];
  }
  return links;
}

function build() {
  const archivos = readdirSync(path.join(MD, 'jugadas')).filter((f) => f.endsWith('.md')).sort();
  const jugadas = [];
  const porJugada = {};
  for (const f of archivos) {
    const { jugada, raci } = parseJugada(path.join(MD, 'jugadas', f));
    if (jugadas.some((x) => x.id === jugada.id)) fail(path.join(MD, 'jugadas', f), 1, `id "${jugada.id}" repetido`);
    jugadas.push(jugada);
    porJugada[jugada.id] = raci;
  }
  const { roles, etiquetas } = parseGlosario(path.join(MD, 'glosario.md'));

  const salidas = {
    'jugadas.json': jugadas,
    'raci.json': { porJugada, rolPorSigla: roles, etiquetas },
    'etapas.json': parseEtapas(path.join(MD, 'etapas.md')),
    'links.json': parseLinks(path.join(MD, 'links.md')),
  };
  for (const [nombre, datos] of Object.entries(salidas)) {
    writeFileSync(path.join(CONTENT, nombre), JSON.stringify(datos, null, 2) + '\n');
  }
  console.log(`Contenido generado desde markdown: ${jugadas.length} jugadas.`);
}

try {
  build();
} catch (e) {
  if (e instanceof ErrorContenido) {
    console.error(`Error en el contenido: ${e.message}`);
    process.exit(1);
  }
  throw e;
}
