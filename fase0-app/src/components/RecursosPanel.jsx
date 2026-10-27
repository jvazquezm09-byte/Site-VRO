// Aceleradores del escenario activo, templates y políticas de la jugada.
export default function RecursosPanel({ aceleradores, procesos, templates, politicas, cambios }) {
  return (
    <section className="recursos">
      <div className="panel">
        <div className="card-head">
          <span className="icon-box material-symbols-outlined">speed</span>
          <h3>Aceleradores e insumos</h3>
        </div>
        <p className="muted">
          Un acelerador es un rol o proceso que facilita la ejecución eficiente de cada jugada para agilizar el avance de las
          iniciativas.
        </p>
        {aceleradores ? (
          <div className="acel-list">
            <div className={`recurso-item${cambios.aceleradores ? ' glow' : ''}`}>
              <span className="kpi-label">Aceleradores rol</span>
              <p>{aceleradores}</p>
            </div>
            {procesos && (
              <div className={`recurso-item${cambios.procesos ? ' glow' : ''}`}>
                <span className="kpi-label">Procesos</span>
                <p>{procesos}</p>
              </div>
            )}
          </div>
        ) : (
          <p className="muted">Selecciona un escenario para ver sus aceleradores.</p>
        )}
      </div>

      <div className="panel">
        <div className="card-head">
          <span className="icon-box material-symbols-outlined">folder_special</span>
          <h3>Templates de jugadas</h3>
        </div>
        {templates.length ? (
          <>
            <p className="muted">Artefactos operativos y formatos oficiales requeridos:</p>
            <div className="chips">
              {templates.map((t) => (
                <span key={t} className="chip-template">
                  <span className="material-symbols-outlined">description</span>
                  {t}
                </span>
              ))}
            </div>
          </>
        ) : (
          <p className="muted">Esta jugada no requiere templates.</p>
        )}

        <div className="divider" />

        <div className="card-head">
          <span className="icon-box material-symbols-outlined">policy</span>
          <h3>Políticas y procesos asociados</h3>
        </div>
        <div className="chips">
          {politicas.map((p) => (
            <span key={p} className="chip-policy">
              <span className="material-symbols-outlined">verified_user</span>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
