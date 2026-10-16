import { useState } from 'react';

// Nodo del anillo seleccionado; null muestra la leyenda por defecto.
export function useSelectedNode() {
  const [index, setIndex] = useState(null);
  return { index, select: setIndex };
}
