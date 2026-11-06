import links from '../content/links.json';

// Muestra el texto como enlace si tiene URL en content/links.json; si no, como texto normal.
export default function Enlace({ texto, className, children }) {
  const url = links[texto];
  if (!url) return <span className={className}>{children}</span>;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${className ?? ''} enlace`.trim()}>
      {children}
      <span className="material-symbols-outlined enlace-icon" aria-hidden="true">open_in_new</span>
    </a>
  );
}
