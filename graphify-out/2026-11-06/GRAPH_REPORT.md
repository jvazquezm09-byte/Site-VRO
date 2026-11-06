# Graph Report - Site-VRO  (2026-10-27)

## Corpus Check
- 36 files · ~29,672 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 118 nodes · 161 edges · 10 communities (8 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `01259097`
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
- BigPicture.jsx
- StepsExplorer.jsx

## God Nodes (most connected - your core abstractions)
1. `react` - 9 edges
2. `showToast()` - 6 edges
3. `scripts` - 5 edges
4. `JugadaCard()` - 4 edges
5. `App()` - 3 edges
6. `BigPicture()` - 3 edges
7. `QuienParticipa()` - 3 edges
8. `StepsExplorer()` - 3 edges
9. `Tips()` - 3 edges
10. `usePrevious()` - 3 edges

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

## Communities (10 total, 1 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.11
Nodes (18): dependencies, react, react-dom, devDependencies, vite, @vitejs/plugin-react, name, private (+10 more)

### Community 1 - "JugadaCard.jsx"
Cohesion: 0.15
Nodes (12): CriteriosSalida(), colores, EscenarioSelector(), letras, EscenarioVacio(), JugadaCard(), RecursosPanel(), Siguiente() (+4 more)

### Community 2 - "script.js"
Cohesion: 0.14
Nodes (16): handleRaciClick(), highlightDimension(), raciActionsByStep, raciTypeLabels, rateStars(), renderRaciRoles(), restoreStars(), roleDefinitions (+8 more)

### Community 3 - "check-content.mjs"
Cohesion: 0.17
Nodes (9): errores, etapas, ids, idsEtapas, inicio, jugadas, listas, raci (+1 more)

### Community 4 - "Contenido del sitio"
Cohesion: 0.50
Nodes (3): Antes de publicar, Contenido del sitio, Reglas para editar

### Community 7 - "App.jsx"
Cohesion: 0.14
Nodes (13): App(), Calificacion(), EtapaTabs(), Footer(), Hero(), JugadaChips(), links, Navbar() (+5 more)

### Community 8 - "BigPicture.jsx"
Cohesion: 0.47
Nodes (3): BigPicture(), posiciones, useSelectedNode()

### Community 10 - "StepsExplorer.jsx"
Cohesion: 0.48
Nodes (4): descripcion(), QuienParticipa(), StepsExplorer(), useSelectedStep()

## Knowledge Gaps
- **36 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+31 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 44 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.jsx` to `package.json`, `JugadaCard.jsx`, `StepsExplorer.jsx`, `BigPicture.jsx`?**
  _High betweenness centrality (0.182) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `script.js` be split into smaller, more focused modules?**
  _Cohesion score 0.14210526315789473 - nodes in this community are weakly interconnected._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13768115942028986 - nodes in this community are weakly interconnected._