import { useState } from 'react';

// Calificación de la guía. Se reinicia al cambiar de jugada (la página la monta con key={jugada.id}).
export default function Calificacion() {
  const [rating, setRating] = useState(0);
  return (
    <section className="panel calif">
      <div className="calif-head">
        <div>
          <span className="eyebrow">
            <span className="material-symbols-outlined">rate_review</span> Mejora continua
          </span>
          <h3>Evaluación y scoring de la jugada</h3>
          <p className="muted">
            Califica la efectividad, aplicabilidad y claridad de esta jugada para retroalimentar el proceso metodológico de la VRO.
          </p>
        </div>
        <div className="score-badge">
          <strong>{rating ? `${rating}.0` : '—'}</strong>
          <span>{rating ? 'Score general' : 'Sin calificar'}</span>
        </div>
      </div>
      <div className="calif-row">
        <span>¿Qué tan clara y accionable resultó esta guía táctica?</span>
        <div className="stars" role="radiogroup" aria-label="Calificación">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={`${n} de 5`}
              className={`star star-btn${n <= rating ? ' on' : ''}`}
              onClick={() => setRating(n)}
            >
              <span className="material-symbols-outlined">star</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
