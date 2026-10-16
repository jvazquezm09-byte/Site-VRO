# Contenido del sitio

Todo el texto que se muestra en el sitio vive en esta carpeta. Para cambiar algo, edita el archivo JSON correspondiente; no hace falta tocar código.

| Archivo | Qué contiene |
|---|---|
| `jugadas.json` | Las fichas de cada jugada (objetivo, KR, regla de oro, escenarios, pasos, pro-tips, trampas, políticas, templates). |
| `etapas.json` | Las 4 etapas (pestañas) y sus íconos. |
| `inicio.json` | El diagrama "Big Picture": fases, nodos del anillo, change management, valor y pilares. |
| `raci.json` | Quién es R, A, C e I en cada jugada (`porJugada`), el nombre de cada sigla (`rolPorSigla`) y las etiquetas. |

## Reglas para editar

- Los textos van entre comillas dobles `"` y las listas entre corchetes `[ ]`. La última línea de una lista no lleva coma.
- Para agregar una jugada: copia un bloque completo dentro de `jugadas.json`, cambia `id`, `code`, `titulo` y `etapa`, y agrega su RACI en `raci.json` (`porJugada`) con el mismo `id`.
- Una jugada sin escenarios va con `"titulo": null` en su único escenario.
- Los íconos son nombres de Material Symbols (por ejemplo `flag`, `tune`); busca otros en fonts.google.com/icons.
- Las siglas de la RACI (`LF`, `BP`, `PM`, `PfM`, `AR`, `SE`) deben existir en `rolPorSigla`.
- El enlace de Change management está en `components/BigPicture.jsx` (busca `sites.google.com`).

## Antes de publicar

```bash
npm run check
```

El comando revisa que no falte ningún campo, que los ids no se repitan y que cada jugada tenga RACI. Si algo falla, muestra qué archivo y qué jugada revisar.
