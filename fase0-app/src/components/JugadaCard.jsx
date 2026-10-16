import { useSelectedEscenario } from '../hooks/useSelectedEscenario.js';
import raci from '../content/raci.json';
import EscenarioSelector from './EscenarioSelector.jsx';
import EscenarioVacio from './EscenarioVacio.jsx';
import StepsExplorer from './StepsExplorer.jsx';
import RecursosPanel from './RecursosPanel.jsx';
import Tips from './Tips.jsx';
import Siguiente from './Siguiente.jsx';

export default function JugadaCard({ jugada, siguiente, onSelect }) {
  const { index, select } = useSelectedEscenario();
  const conSelector = jugada.escenarios.some((e) => e.titulo);
  // Sin selector, la jugada tiene un solo flujo; con selector, el escenario elegido (si hay).
  const escenario = conSelector ? (index === null ? null : jugada.escenarios[index]) : jugada.escenarios[0];

  return (
    <article className="jugada-card anim-fade-up">
      <div className="pill-row">
        <span className="pill">Fase 0: Preproyecto</span>
        <span className="pill pill-soft">Ficha Táctica Oficial</span>
      </div>
      <h2>
        Jugada {jugada.code}: {jugada.titulo}
      </h2>
      <p className="lead">
        {conSelector
          ? 'Da click en el escenario para conocer el paso a paso y la ruta táctica correspondiente.'
          : 'Paso a paso y ruta táctica de la jugada.'}
      </p>

      <EscenarioSelector
        cuando={jugada.cuando}
        escenarios={jugada.escenarios}
        index={index}
        onSelect={select}
      />

      <div className="ficha-grid">
        <div className="ficha-main">
          <div className="regla">
            <span className="icon-box material-symbols-outlined">workspace_premium</span>
            <div>
              <h3>Regla de oro inquebrantable</h3>
              <p>{jugada.reglaDeOro}</p>
            </div>
          </div>
          {escenario?.entregables?.inputs && (
            <div className="insumos">
              <div className="insumos-main">
                <span className="icon-box material-symbols-outlined">inbox</span>
                <div>
                  <div className="pill-row">
                    <span className="kpi-label">Insumos / entradas requeridas</span>
                    <span className="tag tag-mandatorio">Mandatorio</span>
                  </div>
                  <p>{escenario.entregables.inputs}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <aside className="kpi-col">
          <div className="kpi">
            <div>
              <span className="kpi-label">Objetivo (O)</span>
              <p>{jugada.objetivo}</p>
            </div>
            <span className="material-symbols-outlined">flag</span>
          </div>
          <div className="kpi">
            <div>
              <span className="kpi-label">Key Result (KR)</span>
              <p>{jugada.kr}</p>
            </div>
            <span className="material-symbols-outlined">trending_up</span>
          </div>
        </aside>
      </div>

      {escenario ? (
        <StepsExplorer
          key={`${jugada.id}-${index}`}
          escenario={escenario}
          raci={raci.porJugada[jugada.id]}
          jugadores={jugada.jugadores}
          onDeselect={conSelector ? () => select(null) : undefined}
        />
      ) : (
        <EscenarioVacio escenarios={jugada.escenarios} />
      )}

      <RecursosPanel
        aceleradores={escenario?.entregables?.aceleradores}
        procesos={escenario?.entregables?.procesos}
        templates={jugada.templates}
        politicas={jugada.politicas}
      />
      <Tips proTips={jugada.proTips} trampas={jugada.trampas} />
      {siguiente && <Siguiente jugada={siguiente} onSelect={onSelect} />}
    </article>
  );
}
