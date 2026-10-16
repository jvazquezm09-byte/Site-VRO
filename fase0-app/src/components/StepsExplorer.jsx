import { useSelectedStep } from '../hooks/useSelectedStep.js';
import QuienParticipa from './QuienParticipa.jsx';

// Pasos del escenario activo: tarjetas para elegir paso, y detalle del paso seleccionado.
// Se monta con key por escenario, así el paso vuelve al primero al cambiar de escenario.
export default function StepsExplorer({ escenario, raci, jugadores, onDeselect }) {
  const { index, select } = useSelectedStep();
  const paso = escenario.pasos[index];
  const esOutcome = /outcome/i.test(paso.titulo);
  const entregable = escenario.entregables?.outcomes;

  return (
    <div className="steps">
      <div className="steps-head">
        <div>
          {escenario.titulo && (
            <span className="route-pill">
              <span className="material-symbols-outlined">alt_route</span> Ruta activa: {escenario.titulo}
            </span>
          )}
          <h3>Paso a paso para la ejecución de la jugada</h3>
          <p className="muted">Haz click en cada paso para ver el detalle y el responsable.</p>
        </div>
        {onDeselect && (
          <div className="change-scenario">
            <span className="muted">¿Cambiar escenario?</span>
            <button type="button" className="link-btn" onClick={onDeselect}>
              <span className="material-symbols-outlined">close</span> Deseleccionar
            </button>
          </div>
        )}
      </div>

      <div className="step-tabs" role="tablist">
        {escenario.pasos.map((p, i) => {
          const active = i === index;
          return (
            <button
              key={p.titulo}
              type="button"
              role="tab"
              aria-selected={active}
              className={`step-tab${active ? ' active' : ''}`}
              onClick={() => select(i)}
            >
              <span className="step-num">Paso {i + 1}</span>
              <span className="step-name">{p.titulo}</span>
            </button>
          );
        })}
      </div>

      <div className="step-grid">
        <div className="step-card">
          <div className="step-card-head">
            <span className="icon-box material-symbols-outlined">tune</span>
            <div>
              <h4>Detalle operativo</h4>
              <p className="muted">Flujo táctico y actividades</p>
            </div>
          </div>
          <div className="step-body">
            {paso.detalle.map((linea, k) => (
              <p key={k}>{linea}</p>
            ))}
          </div>
          {esOutcome && entregable && (
            <span className="outcome-chip">
              <span className="material-symbols-outlined">description</span>
              <span>
                <strong>Entregable:</strong> {entregable}
              </span>
            </span>
          )}
        </div>

        <div className="step-card">
          <div className="step-card-head">
            <span className="icon-box material-symbols-outlined">group</span>
            <div>
              <h4>¿Quién participa?</h4>
              <p className="muted">Asignación RACI de la jugada</p>
            </div>
          </div>
          <QuienParticipa raci={raci} jugadores={jugadores} />
        </div>
      </div>
    </div>
  );
}
