export default function EtapaTabs({ etapas, activeId, onSelect }) {
  return (
    <div className="etapa-tabs" role="tablist" aria-label="Etapas">
      {etapas.map((e) => {
        const active = e.id === activeId;
        return (
          <button
            key={e.id}
            type="button"
            role="tab"
            aria-selected={active}
            className={`etapa-tab${active ? ' active' : ''}`}
            onClick={() => onSelect(e.id)}
          >
            <span className="material-symbols-outlined">{e.icon}</span>
            {e.label}
          </button>
        );
      })}
    </div>
  );
}
