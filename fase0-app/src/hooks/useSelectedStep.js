import { useState } from 'react';

// Paso activo dentro del escenario; arranca en el primero.
export function useSelectedStep() {
  const [index, setIndex] = useState(0);
  return { index, select: setIndex };
}
