const links = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'playbook', label: 'Playbook', href: '#playbook' },
  { id: 'plantillas', label: 'Plantillas', href: '#/plantillas' },
];

export default function Navbar({ active = 'playbook' }) {
  return (
    <header className="navbar">
      <a className="nav-brand" href="#">
        <span className="dot" />
        Oficina de Proyectos VRO
      </a>
      <nav className="nav-links" aria-label="Principal">
        {links.map((l) => (
          <a key={l.id} href={l.href} className={l.id === active ? 'active' : undefined}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
