import inicio from '../content/inicio.json';
import { useSelectedNode } from '../hooks/useSelectedNode.js';

const { fase0, fase5, nodos, captionDefault, changeManagement, valor, pilares } = inicio;

// Centros de cada nodo sobre el anillo (coordenadas del SVG de Stitch).
const posiciones = [
  { x: 170, y: 50 },
  { x: 284, y: 133 },
  { x: 240, y: 268 },
  { x: 100, y: 268 },
  { x: 56, y: 133 },
];

const irAPlaybook = (e) => {
  e.preventDefault();
  document.getElementById('playbook')?.scrollIntoView({ behavior: 'smooth' });
};

export default function BigPicture() {
  const { index, select } = useSelectedNode();
  const caption = index === null ? captionDefault : nodos[index].caption;

  return (
    <section className="big-picture anim-fade-up delay-2" id="pilares">
      <h2>
        <span className="accent">BIG PICTURE VRO:</span> De la Estrategia a la Entrega de Valor
      </h2>

      <div className="bp-grid">
        <div className="bp-col">
          <div className="bp-head bp-head-plum">{fase0.titulo}</div>
          <div className="bp-steps">
            {fase0.pasos.map((p) => (
              <a key={p.label} className="bp-step" href="#playbook" onClick={irAPlaybook}>
                <span className="icon-box material-symbols-outlined">{p.icon}</span>
                <span>{p.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="bp-col">
          <div className="bp-head bp-head-plum">Planeación - Ejecución - Cierre</div>
          <div className="ring-wrap">
            <svg className="ring-svg" viewBox="0 0 340 340" role="img" aria-label="Ciclo de generación de valor">
              <defs>
                <linearGradient id="circleGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#802973" />
                  <stop offset="50%" stopColor="#bd4a96" />
                  <stop offset="100%" stopColor="#d63489" />
                </linearGradient>
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#963287" />
                  <stop offset="100%" stopColor="#802973" />
                </radialGradient>
              </defs>

              <circle className="orbit-dashed" cx="170" cy="170" r="120" fill="none" stroke="#f1b3d7" strokeDasharray="6 4" strokeWidth="2.5" opacity="0.75" />
              <circle cx="170" cy="170" r="120" fill="none" stroke="url(#circleGrad)" strokeWidth="2" opacity="0.4" />

              {posiciones.map((p, i) => (
                <line key={`radio-${i}`} x1="170" y1="170" x2={p.x} y2={p.y} stroke="#e87bba" strokeDasharray="3 3" strokeWidth="1.5" opacity="0.4" />
              ))}

              {nodos.map((n, i) => {
                const p = posiciones[i];
                const lineasY = n.lineas.length === 2 ? [p.y - 4, p.y + 7] : [p.y + 3];
                return (
                  <g
                    key={n.lineas.join(' ')}
                    className={`circle-node${index === i ? ' node-active' : ''}`}
                    onClick={() => select(i)}
                  >
                    <circle cx={p.x} cy={p.y} r={i === 0 ? 32 : 31} fill="#ffffff" stroke={n.color} strokeWidth="2" />
                    <circle cx={p.x} cy={p.y} r={i === 0 ? 26 : 25} fill={n.fill} />
                    {n.lineas.map((texto, k) => (
                      <text
                        key={texto}
                        x={p.x}
                        y={lineasY[k]}
                        fill="#ffffff"
                        fontFamily="Inter"
                        fontSize={n.lineas.length === 2 ? 8 : 8.5}
                        fontWeight="700"
                        textAnchor="middle"
                      >
                        {texto}
                      </text>
                    ))}
                  </g>
                );
              })}

              <a href="#playbook" onClick={irAPlaybook}>
                <g className="pulse-subtle">
                  <circle cx="170" cy="170" r="52" fill="#ffffff" stroke="#f1b3d7" strokeWidth="3" />
                  <circle cx="170" cy="170" r="46" fill="url(#coreGlow)" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="170" cy="170" r="41" fill="none" stroke="#f1b3d7" strokeDasharray="4 3" strokeWidth="1.5" opacity="0.6" />
                  <path d="M 170,144 L 177,151 L 170,158 L 163,151 Z" fill="#f1b3d7" />
                  <text x="170" y="172" fill="#ffffff" fontFamily="Manrope" fontSize="11" fontWeight="800" letterSpacing="0.02em" textAnchor="middle">
                    Generación
                  </text>
                  <text x="170" y="185" fill="#f1b3d7" fontFamily="Manrope" fontSize="11" fontWeight="800" letterSpacing="0.02em" textAnchor="middle">
                    de Valor
                  </text>
                </g>
              </a>
            </svg>

            <p className="bp-caption">
              <span className="dot" /> {caption}
            </p>
          </div>
        </div>

        <div className="bp-col">
          <div className="bp-head bp-head-pink">{fase5.titulo}</div>
          <div className="bp-trophy" aria-hidden="true">
            <span className="material-symbols-outlined">emoji_events</span>
          </div>
          <div className="bp-medicion">
            <span className="icon-box material-symbols-outlined">query_stats</span>
            <p>
              <strong>{fase5.medicion.titulo}</strong> {fase5.medicion.texto} <em>{fase5.medicion.resaltado}</em>{' '}
              {fase5.medicion.cierre}
            </p>
          </div>
          <a className="btn-cta shimmer-active" href="#playbook" onClick={irAPlaybook}>
            <span className="material-symbols-outlined">check_circle</span> {fase5.cta}
          </a>
        </div>
      </div>

      <div className="bp-rows">
        <div className="bp-row">
          <a
            className="bp-row-label bp-link"
            href="https://sites.google.com/liverpool.com.mx/gestiondelcambio/gesti%C3%B3n-del-cambio?read_current=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">psychology</span> Change management
            <span className="material-symbols-outlined bp-link-icon">open_in_new</span>
          </a>
          <div className="bp-row-items">
            {changeManagement.map((c) => (
              <span key={c} className="bp-pill">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="bp-row">
          <span className="bp-row-label">
            <span className="material-symbols-outlined">trending_up</span> Valor
          </span>
          <div className="bp-row-items">
            {valor.map((v, i) => (
              <span key={v} className={`bp-pill${i === valor.length - 1 ? ' bp-pill-warm' : ''}`}>
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pilares">
        <div className="pilares-title">Pilares VRO</div>
        <div className="pilares-grid">
          {pilares.map((p, i) => (
            <div key={p.label} className={`pilar hover-lift${i === 1 ? ' alt' : i === 2 ? ' alt-2' : ''}`}>
              <span className="icon-box material-symbols-outlined">{p.icon}</span>
              <span>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
