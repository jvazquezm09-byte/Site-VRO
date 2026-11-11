---
id: 4
code: 4
titulo: Construir el Diseño de Solución
etapa: diseno
objetivo: Asegurar la viabilidad técnica y precisión en la estimación del esfuerzo.
kr: Validar el 100% de las iniciativas con diseño de solución y estimación de esfuerzo formalmente respaldados.
reglaDeOro: Ninguna iniciativa avanza a la estimación formal de costo, tiempo o adquisición técnica sin contar con un diseño de solución estructurado (Arquitectura To-Be o Brief Ejecutivo) formalmente revisado por las mesas técnicas o de procesos.
cuando: Se ejecuta en la Fase 0 (Preproyecto / Diseño). Se detona una vez que se cuenta con la necesidad priorizada y la definición de capacidades de negocio a habilitar, y se requiere trazar la solución conceptual o técnica que servirá como base para cotizar y dimensionar el esfuerzo del proyecto.
---

# 4 Construir el Diseño de Solución

## Criterios de salida

- **Viabilidad y sustento técnico / operativo:** Pasar de una necesidad de negocio abstracta o un Canvas general a un modelo estructurado: Arquitectura To-Be para temas de TI o Brief Ejecutivo para proyectos comerciales / inmobiliarios.
- **El "cómo" definido:** Componentes tecnológicos, de infraestructura, de procesos o de experiencia de usuario (Customer Journey) necesarios para hacer realidad la iniciativa, sin entrar al detalle.
- **Base para estimación y contratación:** Insumos y alcances claros para cotizar y dimensionar con precisión esfuerzo, costos y tiempos antes de buscar la autorización formal.

## Jugadores

- **AR** · Arquitectura TI: Conduce y gobierna el diseño de la solución técnica, garantizando la compatibilidad con el ecosistema y los lineamientos tecnológicos corporativos.
- **LF** · Líder Funcional / Negocio: Proporciona la visión funcional y las reglas de negocio, y valida que el diseño cubra la necesidad operativa.
- **BP/BA** · Business Partner / Business Analyst: Facilita la integración metodológica entre negocio, TI y proveedores; articula los requerimientos en el formato estándar de EDS.
- **EP** · Especialista de Procesos: Mapea y valida el flujo operativo As-Is y To-Be, previniendo duplicidades operativas o colisiones con otros procesos de Liverpool.
- **LT** · Equipo Técnico TI (Líder Técnico, Ing. SW, Infraestructura, QA, AMS): Evalúa la factibilidad técnica, requerimientos de nube / servidores, seguridad de la información y criterios de mantenibilidad futura.
- **PfM** · Program Manager / Portafolio Manager: Monitorea el progreso del diseño dentro del calendario de la Fase 0 y valida el pase formal hacia la etapa de estimación.
- **SE** · Servicios Estratégicos (SE): Consolida insumos técnicos para verificar requerimientos de licenciamiento o proveedores de fábrica de software.
- **SN** · Socios de Negocio (Inmobiliaria, Marketing, CX, Operaciones): Establecen especificaciones comerciales, experiencia de usuario (Customer Journey) y layouts físicos o de marca.

## RACI

- R: BP/BA, AR, LT, LF, SN, EP
- A: AR, LT, LF, SN, EP, BP/BA
- C: LT, LF, SE, EP
- I: PfM

## Escenarios

### Escenario A: Diseño de arquitectura TI

Aplica a iniciativas con impacto en software, integraciones, nube, microservicios o bases de datos.

#### Entregables

- **Aceleradores:** Sesiones de revisión con Arquitectura de Proceso.
- **Inputs:** Capacidades funcionales, Arquitectura As-Is, Expediente EDS.
- **Outcomes:** Arquitectura To-Be formalizada.

#### Consolidación de capacidades (Input)

- Las capacidades y BRDs se convierten en los insumos necesarios para realizar el diseño del área de Arquitectura. El arquitecto debe establecer en Monday la fecha compromiso y los porcentajes de avance conforme avance su proceso.

**RACI:** R: BP/BA · A: AR · C: LT, LF · I: PfM

#### Diagnóstico de la arquitectura As-Is

- Examina los sistemas actuales, interfaces y diagramas de flujo existentes para identificar dependencias tecnológicas y brechas técnicas.

**RACI:** R: AR · A: AR · C: LT, LF · I: PfM

#### Definición del modelo y seguridad de la solución

- Modela los requerimientos de servidores, almacenamiento, bases de datos y controles de seguridad informática aplicables.

**RACI:** R: LT · A: AR · C: LT, SE · I: PfM

#### Validación con Arquitectura de Procesos

- El equipo de Arquitectura asocia en su registro de Monday los posibles impactos visualizados a un responsable técnico, quien identifica si el impacto es real y provee una estimación a alto nivel en tiempo y costos.

**RACI:** R: AR · A: AR, LT · C: SE · I: PfM

#### Emisión de la Arquitectura To-Be (Outcome)

- Como resultado de su diseño, el arquitecto genera el mapeo técnico en Mega Hopex y el documento de impactos en PDF; ambos archivos se cargan directamente en Monday.

**RACI:** R: AR · A: AR · C: LT · I: PfM

### Escenario B: Diseño proyecto ejecutivo / nuevo concepto

Aplica a conceptos comerciales, remodelaciones, experiencia de cliente (CX) o aperturas que requieren especificaciones para terceros o despachos.

#### Entregables

- **Aceleradores:** Mesas de validación de procesos operativos con Socios de Negocio.
- **Inputs:** Capacidades, Customer Journey, Layouts, Procesos As-Is / To-Be.
- **Outcomes:** Brief Ejecutivo para despachos / cotización.

#### Compilación de experiencia y operación (Input)

- Entrega el Customer Journey preliminar, las necesidades operativas de tienda / centro logístico y los requerimientos de negocio.

**RACI:** R: LF · A: LF · C: EP · I: PfM

#### Análisis de flujo y layouts físicos / digitales

- Estructuran los planos preliminares, layouts de espacio y lineamientos de experiencia de usuario conforme a los estándares de marca.

**RACI:** R: SN · A: SN · C: LF · I: PfM

#### Alineación de impacto en procesos

- Contrasta los layouts y el modelo operativo To-Be contra las políticas vigentes de tienda y logística, formalizando los ajustes requeridos.

**RACI:** R: EP · A: EP · C: LF · I: PfM

#### Consolidación del Brief Ejecutivo (Outcome)

- Integra las especificaciones comerciales, operativas y de experiencia en el documento formal de Brief Ejecutivo, y lo entrega al Portafolio Manager para su cotización en mercado.

**RACI:** R: BP/BA · A: BP/BA · C:  · I: PfM

## Políticas

- Política de Gobernanza de Arquitectura TI y Estándares de Tecnología
- Procedimiento de Evaluación y Diseño de Soluciones (EDS)
- Catálogo de Procesos Institucionales (CONOCE Liverpool)

## Templates

- Template de Brief Ejecutivo para Despachos / Terceros
- Diseño (Monday)

## Pro-tips

- Nivel de detalle balanceado: En Fase 0 se busca definir el orden de magnitud y la viabilidad del ecosistema, no escribir especificaciones funcionales al detalle de desarrollo. Evita retrasar el caso de negocio por detalles menores.

## Trampas

- Diseño aislado: Evita emitir una arquitectura sin la retroalimentación de Infraestructura y QA / AMS; omitir la operación posterior encarece fuertemente las estimaciones en fases siguientes.
