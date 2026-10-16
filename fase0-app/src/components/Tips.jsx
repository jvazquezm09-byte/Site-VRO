// Separa "Título: texto" en título y texto; si no hay título corto, devuelve solo el texto.
function separa(texto) {
  const i = texto.indexOf(':');
  return i > 0 && i < 90 ? [texto.slice(0, i), texto.slice(i + 1).trim()] : [null, texto];
}

export default function Tips({ proTips, trampas }) {
  if (!proTips.length && !trampas.length) return null;
  return (
    <section className="tips-grid">
      {proTips.map((t) => {
        const [titulo, texto] = separa(t);
        return (
          <div key={t} className="tip tip-pro">
            <div className="tip-head">
              <span className="icon-box material-symbols-outlined">lightbulb</span>
              <h3>{titulo ? `Pro-Tip: ${titulo}` : 'Pro-Tip'}</h3>
            </div>
            <p>{texto}</p>
          </div>
        );
      })}
      {trampas.map((t) => {
        const [titulo, texto] = separa(t);
        return (
          <div key={t} className="tip tip-trampa">
            <div className="tip-head">
              <span className="icon-box soft material-symbols-outlined">warning</span>
              <h3>{titulo ? `Trampa común: ${titulo}` : 'Trampa común'}</h3>
            </div>
            <p>{texto}</p>
          </div>
        );
      })}
    </section>
  );
}
