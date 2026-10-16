import { jugadas, etapas } from './data';
import { useSelectedJugada } from './hooks/useSelectedJugada.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import BigPicture from './components/BigPicture.jsx';
import EtapaTabs from './components/EtapaTabs.jsx';
import JugadaChips from './components/JugadaChips.jsx';
import JugadaCard from './components/JugadaCard.jsx';
import Calificacion from './components/Calificacion.jsx';
import Plantillas from './components/Plantillas.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { selected, select } = useSelectedJugada(jugadas);
  const etapaJugadas = jugadas.filter((j) => j.etapa === selected.etapa);
  const siguiente = jugadas[jugadas.indexOf(selected) + 1];

  // Al elegir una etapa se abre su primera jugada.
  const selectEtapa = (etapaId) => select(jugadas.find((j) => j.etapa === etapaId).id);

  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <BigPicture />

        <section className="playbook anim-fade-up delay-3" id="playbook">
          <h2>Playbook de Jugadas por Fase</h2>
          <p className="eyebrow">
            <span className="material-symbols-outlined">route</span> Selecciona la etapa
          </p>
          <EtapaTabs etapas={etapas} activeId={selected.etapa} onSelect={selectEtapa} />
          <JugadaChips jugadas={etapaJugadas} selectedId={selected.id} onSelect={select} />
          <JugadaCard key={selected.id} jugada={selected} siguiente={siguiente} onSelect={select} />
          <Calificacion key={`cal-${selected.id}`} />
          <Plantillas key={`pl-${selected.id}`} jugada={selected} />
        </section>
      </main>
      <Footer />
    </>
  );
}
