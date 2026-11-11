---
id: 2
code: 2
titulo: Estimar el Esfuerzo
etapa: estimacion
objetivo: Asegurar la viabilidad técnica y precisión en la estimación del esfuerzo de las iniciativas del portafolio.
kr: Validar el 100% de las iniciativas con diseño de solución y estimación de esfuerzo debidamente sustentados.
reglaDeOro: Ninguna iniciativa avanza a la formalización sin una estimación preliminar de tiempo, recursos y sistemas impactados.
cuando: Se ejecuta en la Fase 0 (Preproyecto / Estimación preliminar). Se aplica para definir de manera preliminar (previo a las capacidades y diseño) los recursos necesarios para desarrollar la iniciativa (tiempo, costo, recursos y sistemas) a través de una estimación "automática" o una estimación manual.
---

# 2 Estimar el Esfuerzo

## Criterios de salida

- **Rango de inversión y esfuerzo (Go / No-Go):** Estimación de costo, tiempo y recursos basada en rangos paramétricos (T-shirt sizing: S, M, L, XL).
- **Visibilidad de impacto tecnológico:** Confirmación inicial de qué sistemas core de Liverpool se verán afectados por la iniciativa en caso de autorizarse.
- **Conocimiento de la PMO capitalizado:** Estimación preliminar retada por el Portfolio Manager con el historial de riesgos de proyectos pasados (evitando el sesgo de optimismo).

## Jugadores

- **LF** · Líder Funcional: Valida que las propuestas cubran las capacidades requeridas.
- **BP/BA** · Business Partner / Business Analyst: Captura estimaciones de tiempo, costo e impactos en sistemas con base en los requerimientos.
- **SE** · Servicios Estratégicos: Administra la relación con proveedores y garantiza el cumplimiento normativo de Abastecimiento y VMO. Comparte propuestas técnico-económicas con el BP/BA.
- **AR** · Arquitectura: Identifica los sistemas impactados por la iniciativa para determinar el impacto tecnológico.
- **PfM** · Portafolio Manager: Consolida estimaciones y valida "razonablemente" la alineación con base en el alcance esperado. Proporciona lecciones aprendidas para decidir aprobar o no una estimación a alto nivel.

## RACI

- R: BP/BA, AR, PfM
- A: BP/BA, LF
- C: SE, PfM
- I: LF

## Escenarios

### Escenario A: Estimación con calculadora de proyecto (T-shirt sizing)

Se ejecuta cuando una iniciativa se estimará con base en la calculadora definida en la herramienta; considera aspectos generales para la estimación.

#### Entregables

- **Aceleradores:** PfM: lecciones aprendidas como input para el T-shirt sizing y la aprobación de la estimación.
- **Inputs:** Ficha Canvas; idea priorizada en Monday.
- **Outcomes:** Estimación preliminar (aprobada o no aprobada).

#### Seleccionar estimación con calculadora

- BP/BA, en conjunto con el equipo de Arquitectura, dentro de Monday en el apartado "Estimación preliminar", selecciona la opción de abrir calculadora.

**RACI:** R: BP/BA, AR · A: BP/BA · C: SE, PfM · I: LF

#### Captura de datos

- BP/BA, en conjunto con el equipo de Arquitectura, captura datos generales para saber si la iniciativa se puede estimar a alto nivel (T-shirt sizing):
- ¿El alcance es claro y acotado? Ojo: si la respuesta es "No", no se puede estimar a alto nivel y es necesario seguir los pasos del Escenario B.
- ¿Requiere nuevo proveedor?
- Áreas o equipos involucrados: con base en el alcance, identifica las partes involucradas de la iniciativa.
- Complejidad estimada: con base en el alcance e impacto, determina la complejidad (Baja, Media, Alta, Muy Alta). Tip: como Portafolio Manager es importante cuestionar la complejidad determinada por el equipo, revisar antecedentes de otros proyectos y anticipar riesgos.
- Selección de sistemas impactados.

**RACI:** R: BP/BA, AR · A: BP/BA · C: SE, PfM · I: LF

#### Estimación preliminar

- Con base en los datos capturados, el sistema determina una estimación preliminar con una matriz complejidad × impacto, definiendo la talla del proyecto (S, M, L, XL), el monto de inversión, el tiempo de ejecución y la relación de sistemas impactados.

**RACI:** R: BP/BA, AR · A: BP/BA · C: SE, PfM · I: LF

#### Aceptación de la estimación (Outcome)

- Con apoyo del Portafolio Manager, el BP/BA y el equipo de Arquitectura deciden si la estimación generada es correcta.
- Si se acepta la estimación preliminar, la iniciativa avanza automáticamente a la Jugada 5. Autorización.
- Si no se acepta, es necesario detallar capacidades y diseño antes de solicitar autorización. Sigue la Jugada 3. Capacidades de negocio.

**RACI:** R: BP/BA · A: LF · C: SE, PfM · I: 

### Escenario B: Estimación manual

Se establece el esfuerzo, duración y presupuesto base para la ejecución de la iniciativa, asegurando que el dimensionamiento técnico y financiero cuente con respaldo formal antes de la autorización del proyecto.

#### Entregables

- **Aceleradores:** PfM: lecciones aprendidas como input para la aprobación de la estimación.
- **Inputs:** Ficha Canvas; idea priorizada en Monday.
- **Outcomes:** Estimación preliminar (aprobada o no aprobada).

#### Definir inversión

- BP/BA captura en el sistema el monto total de inversión.
- El PfM solicita al BP/BA las evidencias que respaldan la estimación capturada (propuestas técnico-económicas).
- El PfM integra la solución seleccionada y el costo consolidado (CAPEX / OPEX).

**RACI:** R: BP/BA, AR, PfM · A: BP/BA · C: SE · I: LF

#### Definir tiempo e inicio de ejecución

- BP/BA captura en el sistema el tiempo estimado de ejecución.
- BP/BA captura el trimestre planeado para iniciar la ejecución del proyecto.

**RACI:** R: BP/BA, AR · A: BP/BA · C: SE, PfM · I: LF

#### Aceptación de la estimación (Outcome)

- Con apoyo del Portafolio Manager, el BP/BA y el equipo de Arquitectura deciden si la estimación generada es correcta.
- Si se acepta la estimación preliminar manual, la iniciativa avanza automáticamente a la Jugada 5. Autorización.
- Si no se acepta, es necesario detallar capacidades y diseño antes de solicitar autorización. Sigue la Jugada 3. Capacidades de negocio.

**RACI:** R: BP/BA · A: LF · C: SE, PfM · I: 

## Políticas

## Templates

- Hoja de costos
- Estimación preliminar

## Pro-tips

- Tiempos de mercado realistas: Considera dentro del cronograma de la Fase 0 los tiempos de respuesta legales y contractuales de Abastecimiento que no están considerados en las propuestas técnico-económicas; forzar fechas irreales genera riesgos y sobrecostos.
- Capitaliza las lecciones aprendidas: al definir la complejidad (T-shirt sizing) y validar la estimación preliminar, aplica el historial de riesgos y lecciones aprendidas de implementaciones previas para retar los supuestos de la iniciativa. Una estimación realista hoy es el cimiento para una ejecución sin desviaciones mañana.
- Estimación progresiva: Las iniciativas con complejidad Alta o Muy Alta (tallas L y XL) pueden aprobarse preliminarmente con T-shirt sizing para validar el apetito de inversión del negocio. La aprobación en esta etapa autoriza el pase a la Fase de Planeación, donde Arquitectura y Negocio elaborarán el diseño de solución a detalle y refinará la estimación definitiva antes de iniciar la construcción.

## Trampas

- Compromisos informales sin SE: Nunca acuerdes compromisos de contratación o alcances directamente con proveedores sin la intermediación de Servicios Estratégicos. La falta de apego normativo anula el proceso y congela la asignación de recursos.
