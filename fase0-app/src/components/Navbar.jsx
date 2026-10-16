const links = [
  { label: 'Home', href: '#' },
  { label: 'Playbook', href: '#playbook', active: true },
  { label: 'Pilares', href: '#pilares' },
  { label: 'Plantillas', href: '#plantillas' },
  { label: 'Contacto', href: '#' },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="nav-brand" href="#">
        <span className="dot" />
        Oficina de Proyectos VRO
      </a>
      <nav className="nav-links" aria-label="Principal">
        {links.map((l) => (
          <a key={l.label} href={l.href} className={l.active ? 'active' : undefined}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
