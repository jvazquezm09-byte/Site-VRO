import { useEffect, useRef } from 'react';

// Valor del render anterior; sirve para comparar el escenario nuevo contra el que estaba antes.
export function usePrevious(value) {
  const ref = useRef(undefined);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
