import raciDatos from '../content/raci.json';

const { rolPorSigla, etiquetas } = raciDatos;

// Busca la descripción del jugador clave que corresponde a una sigla RACI.
function descripcion(sigla, jugadores) {
  const rol = rolPorSigla[sigla];
  return jugadores.find((j) => j.rol.startsWith(rol.split(' (')[0].split(' / ')[0]))?.responsabilidad;
}

// Matriz RACI de la jugada. Cada sigla muestra su rol y descripción en hover.
export default function QuienParticipa({ raci, jugadores }) {
  return (
    <div className="raci">
      {Object.entries(etiquetas).map(([letra, nombre]) => (
        <div key={letra} className="raci-col">
          <div className="raci-head">
            <span className="raci-letter">{letra}</span>
            <span className="raci-name">{nombre}</span>
          </div>
          <div className="who-list">
            {raci[letra].map((sigla) => (
              <span key={sigla} className="who-badge" tabIndex={0}>
                {sigla}
                <span className="who-tip" role="tooltip">
                  <strong>{rolPorSigla[sigla]}</strong>
                  <span>{descripcion(sigla, jugadores) ?? 'Sin descripción en el PDF.'}</span>
                </span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
