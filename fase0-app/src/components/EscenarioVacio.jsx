// Estado inicial de la ruta: se muestra hasta que el usuario elige un escenario.
export default function EscenarioVacio({ escenarios }) {
  const letras = escenarios.map((_, i) => String.fromCharCode(65 + i)).join(', ');
  return (
    <div className="vacio">
      <span className="icon-box lg material-symbols-outlined">ads_click</span>
      <div>
        <h4>Selecciona un escenario arriba para desplegar el flujo de ejecución paso a paso</h4>
        <p className="muted">Haz clic en un escenario ({letras}) en el bloque superior para activar la ruta táctica correspondiente.</p>
      </div>
      <p className="vacio-foot">
        <span className="dot" /> {escenarios.length} rutas tácticas disponibles según el origen de la iniciativa
      </p>
    </div>
  );
}
