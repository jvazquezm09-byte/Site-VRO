import { useEffect, useState } from 'react';
import { jugadas, etapas } from './data';
import { useSelectedJugada } from './hooks/useSelectedJugada.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import BigPicture from './components/BigPicture.jsx';
import EtapaTabs from './components/EtapaTabs.jsx';
import JugadaChips from './components/JugadaChips.jsx';
import JugadaCard from './components/JugadaCard.jsx';
import Plantillas from './components/Plantillas.jsx';
import Glosario from './components/Glosario.jsx';
import Footer from './components/Footer.jsx';

// Ruta por hash: "#/plantillas" es la página de plantillas; cualquier otra cosa es el inicio.
const rutaActual = () => (location.hash.startsWith('#/') ? location.hash.slice(2) : '');

export default function App() {
  const [ruta, setRuta] = useState(rutaActual);
  const { selected, select } = useSelectedJugada(jugadas);
  const etapaJugadas = jugadas.filter((j) => j.etapa === selected.etapa);
  const siguiente = jugadas[jugadas.indexOf(selected) + 1];

  useEffect(() => {
    const alCambiar = () => setRuta(rutaActual());
    window.addEventListener('hashchange', alCambiar);
    return () => window.removeEventListener('hashchange', alCambiar);
  }, []);

  // Al volver al inicio desde otra página (p. ej. "Playbook" desde Plantillas), baja a la sección del ancla.
  useEffect(() => {
    if (ruta === '' && location.hash.length > 1) document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }, [ruta]);

  if (ruta === 'plantillas') {
    return (
      <>
        <Navbar active="plantillas" />
        <main className="container">
          <Glosario />
        </main>
        <Footer />
      </>
    );
  }

  // Al elegir una etapa se abre su primera jugada y la vista baja a su detalle (útil en móvil, donde las etapas quedan apiladas).
  const selectEtapa = (etapaId) => {
    select(jugadas.find((j) => j.etapa === etapaId).id);
    document.getElementById('etapa-detalle')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <BigPicture onSelectEtapa={selectEtapa} />

        <section className="playbook anim-fade-up delay-3" id="playbook">
          <h2>Playbook de Jugadas por Fase</h2>
          <p className="eyebrow">
            <span className="material-symbols-outlined">route</span> Selecciona la etapa
          </p>
          <EtapaTabs etapas={etapas} activeId={selected.etapa} onSelect={selectEtapa} />
          <div id="etapa-detalle" className="etapa-detalle">
            <JugadaChips jugadas={etapaJugadas} selectedId={selected.id} onSelect={select} />
            <JugadaCard key={selected.id} jugada={selected} siguiente={siguiente} onSelect={select} />
          </div>
          <Plantillas key={`pl-${selected.id}`} jugada={selected} />
        </section>
      </main>
      <Footer />
    </>
  );
}
