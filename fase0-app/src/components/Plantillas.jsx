import { useState } from 'react';

// Plantillas y políticas de la jugada, desplegables como en el diseño.
export default function Plantillas({ jugada }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="panel plantillas" id="plantillas">
      <button type="button" className="plantillas-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className="plantillas-toggle-main">
          <span className="icon-box material-symbols-outlined">folder_special</span>
          <span>
            <strong>Plantillas de autor y artefactos oficiales</strong>
            <span className="muted">Accede y descarga los artefactos estandarizados de la Oficina de Proyectos VRO</span>
          </span>
        </span>
        <span className="plantillas-cta">
          {open ? 'Ocultar plantillas' : 'Mostrar plantillas'}
          <span className={`material-symbols-outlined${open ? ' open' : ''}`}>expand_more</span>
        </span>
      </button>
      {open && (
        <div className="plantillas-body">
          <div>
            <h4>Templates requeridos</h4>
            {jugada.templates.length ? (
              <ul>
                {jugada.templates.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : (
              <p className="muted">Esta jugada no requiere templates.</p>
            )}
          </div>
          <div>
            <h4>Políticas y procesos asociados</h4>
            <ul>
              {jugada.politicas.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
