# Graph Report - Site-VRO  (2026-10-16)

## Corpus Check
- 33 files · ~17,552 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 117 nodes · 177 edges · 11 communities (9 shown, 2 thin omitted)
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
- index.js
- react
- Acceso restringido a la red corporativa
- server.js
- App.jsx
- BigPicture.jsx
- Calificacion.jsx
- raci.js

## God Nodes (most connected - your core abstractions)
1. `react` - 8 edges
2. `selectFase()` - 6 edges
3. `Acceso restringido a la red corporativa` - 6 edges
4. `selectLifecycleStep()` - 5 edges
5. `selectJugada()` - 5 edges
6. `scripts` - 4 edges
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

## Communities (11 total, 2 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.11
Nodes (17): dependencies, react, react-dom, devDependencies, vite, @vitejs/plugin-react, name, private (+9 more)

### Community 1 - "JugadaCard.jsx"
Cohesion: 0.18
Nodes (10): colores, EscenarioSelector(), letras, EscenarioVacio(), JugadaCard(), RecursosPanel(), Siguiente(), separa() (+2 more)

### Community 2 - "script.js"
Cohesion: 0.33
Nodes (10): displayFicha(), playbookFases, quickNav(), renderJugadasBar(), selectFase(), selectJugada(), selectLifecycleStep(), toggleFloatingPlaybookDrawer() (+2 more)

### Community 3 - "index.js"
Cohesion: 0.31
Nodes (5): fase1, fase2, fase3, etapas, jugadas

### Community 4 - "react"
Cohesion: 0.33
Nodes (4): App(), Plantillas(), useSelectedJugada(), react

### Community 5 - "Acceso restringido a la red corporativa"
Cohesion: 0.25
Nodes (7): Acceso restringido a la red corporativa, Cuando el sitio consuma datos de una fuente externa, Datos que se necesitan de TI, Notas, Opción A: regla WAF por IP (recomendada si hay IP pública fija), Opción B: Cloudflare Access (si no hay IP fija o hay trabajo remoto sin VPN), Site-VRO

### Community 7 - "App.jsx"
Cohesion: 0.24
Nodes (6): EtapaTabs(), Footer(), Hero(), JugadaChips(), links, Navbar()

### Community 8 - "BigPicture.jsx"
Cohesion: 0.24
Nodes (10): BigPicture(), posiciones, captionDefault, changeManagement, fase0, fase5, nodos, pilares (+2 more)

### Community 10 - "raci.js"
Cohesion: 0.23
Nodes (9): descripcion(), QuienParticipa(), StepsExplorer(), etiquetas, raciEtapa1, raciEtapa23, raciPorJugada, rolPorSigla (+1 more)

## Knowledge Gaps
- **26 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+21 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 30 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `package.json`, `JugadaCard.jsx`, `BigPicture.jsx`, `Calificacion.jsx`, `raci.js`?**
  _High betweenness centrality (0.223) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _26 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._