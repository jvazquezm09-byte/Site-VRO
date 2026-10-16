export default function JugadaChips({ jugadas, selectedId, onSelect }) {
  return (
    <div className="chips-row">
      <span className="chips-label">
        <span className="material-symbols-outlined">play_circle</span> Jugada Fase 0:
      </span>
      {jugadas.map((j) => {
        const active = j.id === selectedId;
        return (
          <button
            key={j.id}
            type="button"
            className={`jugada-chip hover-lift${active ? ' active' : ''}`}
            aria-current={active ? 'true' : undefined}
            onClick={() => onSelect(j.id)}
          >
            {active && <span className="live" aria-hidden="true" />}
            Jugada {j.code}: {j.titulo}
          </button>
        );
      })}
    </div>
  );
}
