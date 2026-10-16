import { useState } from 'react';

// Escenario elegido (A, B, C…) dentro de la jugada; null mientras no se elija ninguno.
export function useSelectedEscenario() {
  const [index, setIndex] = useState(null);
  return { index, select: setIndex };
}
