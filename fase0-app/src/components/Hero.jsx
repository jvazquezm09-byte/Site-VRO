export default function Hero() {
  return (
    <section className="hero-banner anim-fade-up">
      <h1>
        Oficina de Proyectos <span className="accent">VRO</span>
      </h1>
      <p className="hero-banner-desc">
        El estándar operativo que conecta la estrategia corporativa con la ejecución ágil y la captura sistemática de valor.
        Descubre nuestro ciclo de entrega, lineamientos y herramientas homologadas.
      </p>
      <div className="hero-banner-ctas">
        <a className="hero-cta hero-cta-primary" href="#/playbook">
          <span className="material-symbols-outlined">auto_stories</span> Explorar Playbook
        </a>
        <a className="hero-cta" href="#/plantillas">
          <span className="material-symbols-outlined">folder_open</span> Catálogo de Plantillas
        </a>
      </div>
    </section>
  );
}
