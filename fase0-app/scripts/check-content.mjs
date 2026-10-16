// Revisa que el contenido en content/ esté completo antes de publicar. Uso: npm run check
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const leer = (f) => JSON.parse(readFileSync(new URL(`../src/content/${f}`, import.meta.url), 'utf8'));
const jugadas = leer('jugadas.json');
const etapas = leer('etapas.json');
const inicio = leer('inicio.json');
const raci = leer('raci.json');
const errores = [];
const error = (donde, msg) => errores.push(`${donde}: ${msg}`);

const idsEtapas = new Set(etapas.map((e) => e.id));
const ids = new Set();
const requeridos = ['id', 'code', 'titulo', 'etapa', 'objetivo', 'kr', 'reglaDeOro', 'cuando'];
const listas = ['jugadores', 'escenarios', 'politicas', 'templates', 'proTips', 'trampas'];

for (const j of jugadas) {
  const donde = `jugada ${j.id ?? '(sin id)'}`;
  for (const campo of requeridos) if (!j[campo]) error(donde, `falta "${campo}"`);
  for (const campo of listas) if (!Array.isArray(j[campo])) error(donde, `"${campo}" debe ser una lista (puede estar vacía)`);
  if (ids.has(j.id)) error(donde, 'id repetido');
  ids.add(j.id);
  if (j.etapa && !idsEtapas.has(j.etapa)) error(donde, `etapa "${j.etapa}" no existe en etapas.json`);
  if (!j.escenarios?.length) error(donde, 'necesita al menos un escenario (con "titulo": null si no tiene escenarios)');
  for (const e of j.escenarios ?? []) {
    if (!e.pasos?.length) error(donde, `escenario "${e.titulo ?? 'sin título'}" sin pasos`);
    for (const p of e.pasos ?? []) if (!p.titulo || !Array.isArray(p.detalle)) error(donde, `paso "${p.titulo ?? '?'}" necesita "titulo" y "detalle" (lista)`);
  }
  const r = raci.porJugada[j.id];
  if (!r) error(donde, 'sin RACI en raci.json (porJugada)');
  else for (const letra of ['R', 'A', 'C', 'I']) {
    if (!Array.isArray(r[letra])) error(donde, `RACI ${letra} debe ser una lista`);
    for (const sigla of r[letra] ?? []) if (!raci.rolPorSigla[sigla]) error(donde, `sigla RACI "${sigla}" no está en rolPorSigla`);
  }
}

if (inicio.nodos?.length !== 5) error('inicio.json', 'nodos debe tener 5 elementos (el anillo tiene 5 posiciones)');
if (inicio.pilares?.length !== 4) error('inicio.json', 'pilares debe tener 4 elementos (la cuadrícula tiene 4 columnas)');

if (errores.length) {
  console.error(`Contenido con ${errores.length} problema(s):\n- ${errores.join('\n- ')}`);
  process.exit(1);
}
console.log(`Contenido OK: ${jugadas.length} jugadas, ${etapas.length} etapas.`);
