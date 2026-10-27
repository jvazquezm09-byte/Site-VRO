# Graph Report - Site-VRO  (2026-10-16)

## Corpus Check
- 34 files · ~17,968 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 114 nodes · 158 edges · 10 communities (9 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a4f432f3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- JugadaCard.jsx
- script.js
- check-content.mjs
- Contenido del sitio
- Acceso restringido a la red corporativa
- server.js
- App.jsx
- BigPicture.jsx
- StepsExplorer.jsx

## God Nodes (most connected - your core abstractions)
1. `react` - 8 edges
2. `selectFase()` - 6 edges
3. `Acceso restringido a la red corporativa` - 6 edges
4. `scripts` - 5 edges
5. `selectLifecycleStep()` - 5 edges
6. `selectJugada()` - 5 edges
7. `quickNav()` - 4 edges
8. `renderJugadasBar()` - 4 edges
9. `updateBreadcrumb()` - 4 edges
10. `displayFicha()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `useSelectedJugada()`  [EXTRACTED]
  fase0-app/src/App.jsx → fase0-app/src/hooks/useSelectedJugada.js
- `BigPicture()` --calls--> `useSelectedNode()`  [EXTRACTED]
  fase0-app/src/components/BigPicture.jsx → fase0-app/src/hooks/useSelectedNode.js
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
Cohesion: 0.18
Nodes (10): colores, EscenarioSelector(), letras, EscenarioVacio(), JugadaCard(), RecursosPanel(), Siguiente(), separa() (+2 more)

### Community 2 - "script.js"
Cohesion: 0.33
Nodes (10): displayFicha(), playbookFases, quickNav(), renderJugadasBar(), selectFase(), selectJugada(), selectLifecycleStep(), toggleFloatingPlaybookDrawer() (+2 more)

### Community 3 - "check-content.mjs"
Cohesion: 0.17
Nodes (9): errores, etapas, ids, idsEtapas, inicio, jugadas, listas, raci (+1 more)

### Community 4 - "Contenido del sitio"
Cohesion: 0.50
Nodes (3): Antes de publicar, Contenido del sitio, Reglas para editar

### Community 5 - "Acceso restringido a la red corporativa"
Cohesion: 0.25
Nodes (7): Acceso restringido a la red corporativa, Cuando el sitio consuma datos de una fuente externa, Datos que se necesitan de TI, Notas, Opción A: regla WAF por IP (recomendada si hay IP pública fija), Opción B: Cloudflare Access (si no hay IP fija o hay trabajo remoto sin VPN), Site-VRO

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
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 43 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.jsx` to `package.json`, `JugadaCard.jsx`, `StepsExplorer.jsx`, `BigPicture.jsx`?**
  _High betweenness centrality (0.180) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13768115942028986 - nodes in this community are weakly interconnected._