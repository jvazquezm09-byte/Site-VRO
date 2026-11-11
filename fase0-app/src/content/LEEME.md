# Contenido del sitio

El contenido de las jugadas, etapas, RACI y enlaces se escribe en **markdown** dentro de `md/`. Los archivos `.json` de esta carpeta se generan a partir de ahí; no los edites a mano.

| Carpeta / archivo | Qué contiene |
|---|---|
| `md/jugadas/*.md` | Una ficha por jugada: encabezado (id, código, título, etapa, objetivo, KR, regla de oro, cuándo), criterios de salida, jugadores, RACI, escenarios con sus pasos, políticas, templates, pro-tips y trampas. |
| `md/glosario.md` | El nombre de cada sigla de la RACI y las etiquetas (R, A, C, I). |
| `md/etapas.md` | Las 5 etapas (pestañas): id, nombre e ícono. |
| `md/links.md` | Enlaces de templates y políticas: el texto exacto y su URL. |
| `inicio.json` | El diagrama "Big Picture" (fases, nodos del anillo, change management, valor y pilares). Sigue en JSON. |

Los archivos `jugadas.json`, `raci.json`, `etapas.json` y `links.json` se generan con `npm run content` (también corre solo antes de `npm run dev` y `npm run build`).

## Cómo escribir una ficha

Mira `md/jugadas/01-1.1-idea-formalizada.md` como ejemplo. Reglas:

- **Encabezado** entre `---`: `clave: valor` en una sola línea. Campos obligatorios: `id`, `code`, `titulo`, `etapa` (debe existir en `etapas.md`), `objetivo`, `kr`, `reglaDeOro`, `cuando`.
- **Secciones** con `## `: `Criterios de salida`, `Jugadores`, `RACI`, `Escenarios`, `Políticas`, `Templates`, `Pro-tips`, `Trampas`. Si una lista no tiene elementos, puedes dejar la sección vacía o no ponerla.
- **Criterios**: `- **Título:** detalle`.
- **Jugadores**: `- **SIGLA** · Rol: responsabilidad` (la sigla es opcional).
- **RACI** de la jugada: `- R: LF, BP/BA` (una línea por letra; deja la línea vacía si no hay nadie).
- **Escenarios**: cada uno empieza con `### Título`. Si la jugada no tiene escenarios, usa `### (sin título)`. Debajo puede ir un párrafo de descripción, luego `#### Entregables` con `- **Aceleradores:**`, `- **Inputs:**` y `- **Outcomes:**`, y después un `#### Título del paso` por cada paso.
- **Pasos**: el detalle va en líneas `- `. La RACI del paso, si la tiene, va en una línea aparte: `**RACI:** R: X, Y · A: X · C: X · I: X`.
- **Políticas, Templates, Pro-tips, Trampas**: una línea `- ` por elemento.
- **Siglas**: las de la RACI (`LF`, `BP/BA`, `PfM`, `AR`, `SE`, etc.) deben existir en `md/glosario.md`.
- **Enlaces**: el nombre que aparece en una política o template debe coincidir exactamente con el de `md/links.md`, con el formato `- [Nombre](https://...)`.
- Para agregar una jugada, crea un archivo nuevo en `md/jugadas/` con prefijo numérico (`09-...md`) para que aparezca al final. El orden de los archivos define el orden de las jugadas.

## Antes de publicar

```bash
npm run check
```

`npm run content` revisa el formato de cada archivo y muestra la línea que falla. `npm run check` revisa que no falte ningún campo, que los ids no se repitan y que cada jugada tenga RACI.
