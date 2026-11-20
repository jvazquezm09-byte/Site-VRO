import { useState } from 'react';
import { recursos } from '../data';

// Secciones del glosario, en el orden del diseño. La clave es el encabezado "## " de links.md.
const secciones = [
  { id: 'Plantillas oficiales de autor', titulo: '1. Plantillas Oficiales de Autor', icono: 'description', texto: 'Formatos editables y certificados (.docx, .xlsx, .pptx) para sustentación técnica, gobierno de proyectos y control de inversiones.' },
  { id: 'Templates operativos', titulo: '2. Templates Operativos (Monday.com)', icono: 'dashboard', texto: 'Tableros y workflows interactivos preconfigurados con automatizaciones nativas, pipelines de aprobación y sincronización API.' },
  { id: 'Material de apoyo', titulo: '3. Material de Apoyo', icono: 'school', texto: 'Guías didácticas de llenado, cheatsheets de estimación, video-cápsulas y manuales de aceleración para equipos ágiles.' },
  { id: 'Políticas y procesos', titulo: '4. Políticas y Procesos', icono: 'gavel', texto: 'Arquitectura de cumplimiento normativo, lineamientos de gobernanza y flujogramas oficiales BPMN para consulta de aprobación.' },
];

// Quita acentos y mayúsculas para que "politica" encuentre "Política".
const normalizar = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export default function Glosario() {
  const [filtro, setFiltro] = useState('todas');
  const [busqueda, setBusqueda] = useState('');

  const texto = normalizar(busqueda.trim());
  const visibles = recursos.filter(
    (r) => (filtro === 'todas' || r.categoria === filtro) && normalizar(r.titulo).includes(texto),
  );
  const hayFiltros = filtro !== 'todas' || texto !== '';
  const restablecer = () => {
    setFiltro('todas');
    setBusqueda('');
  };

  return (
    <section className="panel glos" id="recursos">
      <div className="glos-head">
        <span className="eyebrow">Repositorio maestro</span>
        <h2>Glosario <span className="accent">VRO</span></h2>
        <p className="muted">Catálogo homologado en 4 dimensiones estratégicas: plantillas descargables, tableros interactivos Monday.com, material de apoyo táctico y normativas institucionales.</p>
      </div>

      <div className="glos-filtros">
        <div className="glos-chips" role="tablist" aria-label="Secciones">
          <button type="button" role="tab" aria-selected={filtro === 'todas'} className={`glos-chip${filtro === 'todas' ? ' active' : ''}`} onClick={() => setFiltro('todas')}>
            <span className="material-symbols-outlined">grid_view</span> Todas las secciones
          </button>
          {secciones.map((s) => (
            <button key={s.id} type="button" role="tab" aria-selected={filtro === s.id} className={`glos-chip${filtro === s.id ? ' active' : ''}`} onClick={() => setFiltro(s.id)}>
              <span className="material-symbols-outlined">{s.icono}</span> {s.titulo.replace(/^\d\. /, '')}
            </button>
          ))}
        </div>
        <label className="glos-buscar">
          <span className="material-symbols-outlined">search</span>
          <input type="search" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar por nombre, palabra clave..." aria-label="Buscar recursos" />
        </label>
        <div className="glos-estado">
          <span>Mostrando {visibles.length} de {recursos.length} recursos</span>
          {hayFiltros && (
            <button type="button" className="link-btn" onClick={restablecer}>Restablecer filtros</button>
          )}
        </div>
      </div>

      {visibles.length === 0 && <p className="muted glos-vacio">No hay recursos que coincidan con la búsqueda.</p>}

      {secciones
        .filter((s) => visibles.some((r) => r.categoria === s.id))
        .map((s) => (
          <div key={s.id} className="glos-seccion">
            <div className="glos-seccion-head">
              <span className="icon-box material-symbols-outlined">{s.icono}</span>
              <div>
                <h3>{s.titulo}</h3>
                <p className="muted">{s.texto}</p>
              </div>
            </div>
            <div className="glos-grid">
              {visibles
                .filter((r) => r.categoria === s.id)
                .map((r) => (
                  <article key={`${r.titulo}-${r.url}`} className="glos-card">
                    <h4>{r.titulo}</h4>
                    <a className="glos-btn" href={r.url} target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined">open_in_new</span> Abrir enlace
                    </a>
                  </article>
                ))}
            </div>
          </div>
        ))}
    </section>
  );
}
