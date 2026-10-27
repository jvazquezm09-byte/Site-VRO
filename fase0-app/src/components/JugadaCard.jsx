import { useSelectedEscenario } from '../hooks/useSelectedEscenario.js';
import { usePrevious } from '../hooks/usePrevious.js';
import raci from '../content/raci.json';
import EscenarioSelector, { colores } from './EscenarioSelector.jsx';
import EscenarioVacio from './EscenarioVacio.jsx';
import StepsExplorer from './StepsExplorer.jsx';
import RecursosPanel from './RecursosPanel.jsx';
import Tips from './Tips.jsx';
import Siguiente from './Siguiente.jsx';
import CriteriosSalida from './CriteriosSalida.jsx';

export default function JugadaCard({ jugada, siguiente, onSelect }) {
  const { index, select } = useSelectedEscenario();
  const conSelector = jugada.escenarios.some((e) => e.titulo);
  // Sin selector, la jugada tiene un solo flujo; con selector, el escenario elegido (si hay).
  const escenario = conSelector ? (index === null ? null : jugada.escenarios[index]) : jugada.escenarios[0];
  // Al cambiar de escenario, lo que cambió brilla con el color del escenario elegido (--glow).
  const anterior = usePrevious(escenario);
  const cambio = (campo) => Boolean(anterior && escenario) && JSON.stringify(campo(anterior)) !== JSON.stringify(campo(escenario));

  return (
    <article className="jugada-card anim-fade-up" style={{ '--glow': colores[index ?? 0] }}>
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
        detalleCambio={cambio((e) => [e.titulo, e.descripcion])}
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
            <div key={index} className={`insumos${cambio((e) => e.entregables?.inputs) ? ' glow' : ''}`}>
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

      {jugada.criteriosSalida && <CriteriosSalida items={jugada.criteriosSalida} />}

      {escenario ? (
        <StepsExplorer
          key={`${jugada.id}-${index}`}
          escenario={escenario}
          anterior={anterior}
          raci={raci.porJugada[jugada.id]}
          jugadores={jugada.jugadores}
          onDeselect={conSelector ? () => select(null) : undefined}
        />
      ) : (
        <EscenarioVacio escenarios={jugada.escenarios} />
      )}

      <RecursosPanel
        key={index}
        aceleradores={escenario?.entregables?.aceleradores}
        procesos={escenario?.entregables?.procesos}
        cambios={{
          aceleradores: cambio((e) => e.entregables?.aceleradores),
          procesos: cambio((e) => e.entregables?.procesos),
        }}
        templates={jugada.templates}
        politicas={jugada.politicas}
      />
      <Tips proTips={jugada.proTips} trampas={jugada.trampas} />
      {siguiente && <Siguiente jugada={siguiente} onSelect={onSelect} />}
    </article>
  );
}
