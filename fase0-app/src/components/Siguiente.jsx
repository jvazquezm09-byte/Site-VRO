export default function Siguiente({ jugada, onSelect }) {
  return (
    <section className="siguiente">
      <div>
        <span className="kpi-label">Siguiente jugada en el pipeline</span>
        <h3>
          Jugada {jugada.code}: {jugada.titulo}
        </h3>
      </div>
      <button type="button" className="btn-light" onClick={() => onSelect(jugada.id)}>
        Explorar jugada {jugada.code} <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </section>
  );
}
