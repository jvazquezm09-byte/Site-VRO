# Graph Report - Site-VRO  (2026-11-13)

## Corpus Check
- 50 files · ~36,411 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 273 nodes · 333 edges · 20 communities (16 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e4a9d075`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- JugadaCard.jsx
- script.js
- check-content.mjs
- Contenido del sitio
- server.js
- App.jsx
- 4 Construir el Diseño de Solución
- 2 Estimar el Esfuerzo
- StepsExplorer.jsx
- build-content.mjs
- 6 Arranque oficial de proyecto
- 5 Autorización Formal
- 1.1 Idea Formalizada
- 1.2 Idea Priorizada
- 3 Capacidades de negocio
- Glosario
- etapas.md
- links.md

## God Nodes (most connected - your core abstractions)
1. `react` - 9 edges
2. `fail()` - 9 edges
3. `1.1 Idea Formalizada` - 9 edges
4. `1.2 Idea Priorizada` - 9 edges
5. `2 Estimar el Esfuerzo` - 9 edges
6. `3 Capacidades de negocio` - 9 edges
7. `4 Construir el Diseño de Solución` - 9 edges
8. `5 Autorización Formal` - 9 edges
9. `6 Arranque oficial de proyecto` - 9 edges
10. `scripts` - 8 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `useSelectedJugada()`  [EXTRACTED]
  fase0-app/src/App.jsx → fase0-app/src/hooks/useSelectedJugada.js
- `BigPicture()` --calls--> `useSelectedNode()`  [EXTRACTED]
  fase0-app/src/components/BigPicture.jsx → fase0-app/src/hooks/useSelectedNode.js
- `JugadaCard()` --calls--> `usePrevious()`  [EXTRACTED]
  fase0-app/src/components/JugadaCard.jsx → fase0-app/src/hooks/usePrevious.js
- `JugadaCard()` --calls--> `useSelectedEscenario()`  [EXTRACTED]
  fase0-app/src/components/JugadaCard.jsx → fase0-app/src/hooks/useSelectedEscenario.js
- `StepsExplorer()` --calls--> `useSelectedStep()`  [EXTRACTED]
  fase0-app/src/components/StepsExplorer.jsx → fase0-app/src/hooks/useSelectedStep.js

## Import Cycles
- None detected.

## Communities (20 total, 3 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.09
Nodes (21): dependencies, react, react-dom, devDependencies, vite, @vitejs/plugin-react, name, private (+13 more)

### Community 1 - "JugadaCard.jsx"
Cohesion: 0.17
Nodes (11): CriteriosSalida(), colores, EscenarioSelector(), letras, EscenarioVacio(), JugadaCard(), Siguiente(), separa() (+3 more)

### Community 2 - "script.js"
Cohesion: 0.14
Nodes (16): handleRaciClick(), highlightDimension(), raciActionsByStep, raciTypeLabels, rateStars(), renderRaciRoles(), restoreStars(), roleDefinitions (+8 more)

### Community 3 - "check-content.mjs"
Cohesion: 0.14
Nodes (11): errores, etapas, ids, idsEtapas, inicio, jugadas, links, listas (+3 more)

### Community 4 - "Contenido del sitio"
Cohesion: 0.50
Nodes (3): Antes de publicar, Contenido del sitio, Cómo escribir una ficha

### Community 7 - "App.jsx"
Cohesion: 0.12
Nodes (15): App(), BigPicture(), posiciones, Calificacion(), EtapaTabs(), Footer(), Hero(), JugadaChips() (+7 more)

### Community 8 - "4 Construir el Diseño de Solución"
Cohesion: 0.09
Nodes (22): 4 Construir el Diseño de Solución, Alineación de impacto en procesos, Análisis de flujo y layouts físicos / digitales, Compilación de experiencia y operación (Input), Consolidación de capacidades (Input), Consolidación del Brief Ejecutivo (Outcome), Criterios de salida, Definición del modelo y seguridad de la solución (+14 more)

### Community 9 - "2 Estimar el Esfuerzo"
Cohesion: 0.10
Nodes (20): 2 Estimar el Esfuerzo, Aceptación de la estimación (Outcome), Aceptación de la estimación (Outcome), Captura de datos, Criterios de salida, Definir inversión, Definir tiempo e inicio de ejecución, Entregables (+12 more)

### Community 10 - "StepsExplorer.jsx"
Cohesion: 0.22
Nodes (8): Enlace(), Texto(), Plantillas(), descripcion(), QuienParticipa(), RecursosPanel(), StepsExplorer(), useSelectedStep()

### Community 11 - "build-content.mjs"
Cohesion: 0.29
Nodes (16): build(), CONTENT, ErrorContenido, fail(), frontmatter(), leer(), LETRAS, MD (+8 more)

### Community 12 - "6 Arranque oficial de proyecto"
Cohesion: 0.12
Nodes (16): 6 Arranque oficial de proyecto, Asignación del Project Manager, Criterios de salida, Ejecución del Kick Off, Elaboración y Alineación del Kick Off, Entregables, Escenarios, Estructuración y Habilitación del Equipo de Trabajo (+8 more)

### Community 13 - "5 Autorización Formal"
Cohesion: 0.12
Nodes (15): 5 Autorización Formal, Apertura del elemento PEP y entrega a ejecución (Outcome), Criterios de salida, Entregables, Escenarios, Firma del Project Charter, Jugadores, Políticas (+7 more)

### Community 14 - "1.1 Idea Formalizada"
Cohesion: 0.13
Nodes (14): 1.1 Idea Formalizada, Criterios de salida, Entendimiento de la necesidad, Entregables, Enviar solicitud, Escenarios, Jugadores, Políticas (+6 more)

### Community 15 - "1.2 Idea Priorizada"
Cohesion: 0.13
Nodes (14): 1.2 Idea Priorizada, Criterios de salida, Entregables, Escenarios, Filtro de viabilidad y alineación, Identifica ideas a priorizar, Jugadores, Políticas (+6 more)

### Community 16 - "3 Capacidades de negocio"
Cohesion: 0.13
Nodes (14): 3 Capacidades de negocio, Análisis de brechas (Gap Analysis), Capturar capacidades (Outcome), Criterios de salida, Entregables, Escenarios, Insumo para diseño, Jugadores (+6 more)

### Community 17 - "Glosario"
Cohesion: 0.50
Nodes (3): Etiquetas RACI, Glosario, Roles

## Knowledge Gaps
- **141 isolated node(s):** `name`, `private`, `version`, `type`, `content` (+136 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 159 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.jsx` to `package.json`, `JugadaCard.jsx`, `StepsExplorer.jsx`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _141 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `script.js` be split into smaller, more focused modules?**
  _Cohesion score 0.14210526315789473 - nodes in this community are weakly interconnected._
- **Should `check-content.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1164021164021164 - nodes in this community are weakly interconnected._
- **Should `4 Construir el Diseño de Solución` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._