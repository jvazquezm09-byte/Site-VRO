// Qué debe quedar listo al terminar la jugada. Solo se muestra si la jugada trae criteriosSalida.
export default function CriteriosSalida({ items }) {
  return (
    <section className="panel salida">
      <div className="card-head">
        <span className="icon-box material-symbols-outlined">task_alt</span>
        <div>
          <span className="eyebrow">Criterios de salida</span>
          <h3>¿Qué esperamos al finalizar esta jugada?</h3>
        </div>
      </div>
      <div className="salida-grid">
        {items.map((c, i) => (
          <div key={c.titulo} className="salida-item">
            <span className="salida-num">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <strong>{c.titulo}</strong>
              <p className="muted">{c.detalle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
