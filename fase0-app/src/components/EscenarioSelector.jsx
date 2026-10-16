// Color de cada escenario (A, B, C), tomado del diseño de Stitch.
const colores = ['#802973', '#fd6f21', '#bd4a96', '#d63489'];
const letras = ['A', 'B', 'C', 'D'];

// Disparador de la jugada y botones de escenario. Sin escenarios, solo muestra el disparador.
export default function EscenarioSelector({ cuando, escenarios, index, onSelect }) {
  const conSelector = escenarios.some((e) => e.titulo);
  const elegido = conSelector && index !== null ? escenarios[index] : null;
  const accent = elegido ? colores[index] : colores[0];

  return (
    <div className="disparador" style={{ '--accent': accent }}>
      <div className="disparador-top">
        <div className="disparador-texto">
          <div className="disparador-title">
            <span className="icon-box material-symbols-outlined">notifications_active</span>
            <h3>¿Cuándo ejecutar esta jugada? (Disparador)</h3>
            {conSelector && (
              <span className={`tag${elegido ? ' tag-active' : ''}`}>
                {elegido ? `Escenario ${letras[index]} activo` : 'Sin escenario seleccionado'}
              </span>
            )}
          </div>
          <p>{cuando}</p>
        </div>

        {conSelector && (
          <div className="esc-btns">
            {escenarios.map((e, i) => (
              <button
                key={e.titulo}
                type="button"
                className={`esc-btn${index === i ? ' active' : ''}`}
                style={{ '--c': colores[i] }}
                aria-pressed={index === i}
                onClick={() => onSelect(i)}
              >
                <span className="esc-dot" />
                Escenario <span className="esc-letter">{letras[i]}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {elegido && (
        <div className="esc-detalle">
          <strong>{elegido.titulo}</strong>
          {elegido.descripcion && <p>{elegido.descripcion}</p>}
        </div>
      )}
    </div>
  );
}
