import { useState } from 'react';

// Mantiene la jugada seleccionada; si el id no existe, cae en la primera.
export function useSelectedJugada(jugadas) {
  const [id, setId] = useState(jugadas[0].id);
  const selected = jugadas.find((j) => j.id === id) ?? jugadas[0];
  return { selected, select: setId };
}
