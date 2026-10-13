let toastTimeout;
    function showToast(message, iconName = 'check_circle') {
        const toast = document.getElementById('toast-notification');
        const msgEl = document.getElementById('toast-message');
        const iconEl = document.getElementById('toast-icon');
        if (!toast || !msgEl) return;
        if (iconEl) iconEl.textContent = iconName;
        msgEl.textContent = message;
        clearTimeout(toastTimeout);
        toast.classList.remove('opacity-0', 'translate-y-20', 'pointer-events-none');
        toast.classList.add('opacity-100', 'translate-y-0');
        toastTimeout = setTimeout(() => {
            toast.classList.remove('opacity-100', 'translate-y-0');
            toast.classList.add('opacity-0', 'translate-y-20', 'pointer-events-none');
        }, 3200);
    }

    function highlightDimension(text, elementId = null) {
        const tooltip = document.getElementById('dimension-tooltip-text');
        if (tooltip) {
            tooltip.innerHTML = '<span class="w-2 h-2 rounded-full bg-[#fd6f21] inline-block animate-ping"></span><span>' + text + '</span>';
        }
        const petals = ['petal-alcance', 'petal-recursos', 'petal-finanzas', 'petal-riesgos', 'petal-gobernanza'];
        petals.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                if (id === elementId) el.classList.add('node-active');
                else el.classList.remove('node-active');
            }
        });
        showToast('Dimensión: ' + text.split(':')[0], 'insights');
    }

    let activeScenario = null;
    let currentStep = 1;
    let currentScore = 5;

    /* Base de Conocimiento de Roles RACI */
    const roleDefinitions = {
        LF: {
            title: "LF • Líder Funcional",
            subtitle: "Sponsor Promotor / Dueño del Dolor",
            colorClass: "from-[#802973] to-[#bd4a96]"
        },
        BP: {
            title: "BP • Business Partner / Analyst",
            subtitle: "Facilitador de Negocio y Estrategia",
            colorClass: "from-[#bd4a96] to-[#d63489]"
        },
        PM: {
            title: "PM • Portafolio Manager VRO",
            subtitle: "Custodio de la Gobernanza y Cartera",
            colorClass: "from-[#802973] to-[#51134a]"
        },
        AR: {
            title: "AR • Arquitectura & Solución",
            subtitle: "Factibilidad Técnica y TI",
            colorClass: "from-[#d63489] to-[#802973]"
        },
        SE: {
            title: "SE • Sponsor Ejecutivo / RFx",
            subtitle: "Dirección Estratégica & Cartera Senior",
            colorClass: "from-[#5a4b56] to-[#241822]"
        },
        ET: {
            title: "ET • Equipo Técnico & Delivery",
            subtitle: "Líderes de Squad & Especialistas",
            colorClass: "from-[#bd4a96] to-[#fd6f21]"
        }
    };

    const raciTypeLabels = {
        r: { name: "Responsable (R)", bg: "bg-[#802973]", text: "text-[#ffd7f1]", border: "border-[#ffd7f1]/30" },
        a: { name: "Aprobador (A)", bg: "bg-[#bd4a96]", text: "text-white", border: "border-white/30" },
        c: { name: "Consultado (C)", bg: "bg-[#d63489]", text: "text-white", border: "border-white/30" },
        i: { name: "Informado (I)", bg: "bg-[#5a4b56]", text: "text-white", border: "border-white/20" }
    };

    /* Acciones específicas y contextualizadas de cada rol según el paso */
    const raciActionsByStep = {
        1: {
            LF: "Dueño del dolor de negocio. Detecta el cuello de botella u oportunidad operativa y convoca la sesión inicial de encuadre para plasmar el problema en el Canvas de 1 Página.",
            BP: "Facilita activamente la sesión de descubrimiento de 45 min, estructura las hipótesis de solución y traduce el dolor en impacto cuantificable preliminar.",
            PM: "Evalúa la solicitud de ingreso, asigna tracking inicial en el funnel de la VRO y valida que la sesión cumpla con los estándares metodológicos.",
            AR: "Revisa compatibilidad preliminar y verifica que la necesidad no duplique soluciones o plataformas existentes en el radar tecnológico.",
            SE: "Recibe notificación de la apertura de la ficha de iniciativa para visibilidad temprana en la cartera de su unidad de negocio."
        },
        2: {
            PM: "Lidera la matriz de evaluación estratégica, cruzando la propuesta contra los OKRs anuales, capacidad de cartera y criterios de retorno preliminar.",
            SE: "Valida la coherencia de la iniciativa con las metas macro y define si tiene patrocinio presupuestario prioritario.",
            AR: "Dictamina factibilidad técnica preliminar e identifica riesgos de interoperabilidad o dependencias de infraestructura.",
            LF: "Aporta justificación cuantitativa y sustenta los beneficios operacionales esperados ante el equipo de portafolio.",
            BP: "Consolida las evidencias operativas y acompaña la argumentación del caso de valor preliminar."
        },
        3: {
            BP: "Co-diseña y redacta la versión consolidada del Canvas de 1 Página, asegurando claridad en el alcance y dimensionamiento T-Shirt preliminar.",
            LF: "Avala y firma el alcance acotado, los objetivos SMART y los recursos clave que compromete su área.",
            AR: "Revisa la arquitectura propuesta y valida que la estimación de complejidad T-Shirt sea técnicamente viable.",
            PM: "Supervisa que el entregable cumpla con todos los campos mandatorios de gobernanza antes de ingresar al comité formal.",
            SE: "Permanece informado del avance de estructuración para prever reservas de capacidad estratégica."
        },
        4: {
            PM: "Emite la validación oficial del proceso, asigna ID de cartera institucional y formaliza el paso automático a la Jugada 1.2: Idea Priorizada.",
            LF: "Firma formalmente el Canvas y asume la titularidad funcional de la iniciativa frente al comité.",
            SE: "Otorga el visto bueno institucional para que la idea proceda a priorización ponderada.",
            AR: "Archiva el dictamen preliminar de arquitectura de la idea en el repositorio corporativo.",
            BP: "Garantiza la trazabilidad documental de todos los acuerdos y comentarios registrados en la sesión."
        },
        5: {
            PM: "Emite formalmente el acta de viabilidad colegiada, registrando compromisos, métricas de seguimiento y ruta de paso al Roadmap oficial.",
            SE: "Dictamina formalmente la luz verde presupuestal y de gobernanza para la iniciativa en cartera.",
            LF: "Asume el compromiso de sponsoreo de beneficios y cronograma de valor operativo.",
            AR: "Confirma asignación de squad de arquitectura para la siguiente etapa de diseño de solución.",
            ET: "Toma conocimiento de la ventana de ejecución proyectada para planificar asignación de capacidad técnica."
        }
    };

    const triggerDescriptions = {
        general: 'Inmediatamente cuando un líder funcional o área identifica una necesidad u oportunidad operativa y requiere estructurarla formalmente para evaluación estratégica preliminar.',
        1: 'Disparador por Fricción Crítica: Se detectan cuellos de botella, reprocesos manuales recurrentes o pérdidas de eficiencia que impactan directamente los KPIs operativos del área.',
        2: 'Disparador de Crecimiento & Innovación: Identificación de una ventaja competitiva, nueva capacidad tecnológica o proyecto de alto impacto que maximiza el valor estratégico del negocio.',
        3: 'Disparador Regulatorio & Mandatorio: Requerimiento normativo, legal o de auditoría que exige estructuración ágil sin incurrir en burocracia técnica anticipada.'
    };

    const scenarioConfigs = {
        1: {
            title: "Escenario A",
            badgeText: "Ruta Activa: Escenario A (Dolor Operativo Recurrente)",
            step1Context: "El Líder Funcional detecta la necesidad o dolor operativo y coordina con el Portafolio Manager la sesión de descubrimiento inicial de 45 minutos para formalizar el Canvas de 1 Página.",
            step1Highlight: "El BP/BA facilita la sesión y extrae los dolores estratégicos cuantitativos y cualitativos preliminares.",
            raciFocus: "Foco RACI en Paso 1: LF y BP lideran la formulación del problema y la necesidad original."
        },
        2: {
            title: "Escenario B",
            badgeText: "Ruta Activa: Escenario B (Oportunidad Estratégica Top-Down)",
            step1Context: "El Sponsor Ejecutivo o Director Funcional asigna al Líder de Iniciativa la directriz estratégica para contextualizarla en una propuesta preliminar con impacto en OKRs.",
            step1Highlight: "El Portafolio Manager y BP alinean la iniciativa con el Road Map anual y los pilares estratégicos de la compañía.",
            raciFocus: "Foco RACI en Paso 1: PM y Sponsor Ejecutivo lideran la alineación de objetivos clave."
        },
        3: {
            title: "Escenario C",
            badgeText: "Ruta Activa: Escenario C (Mandato Regulatorio / Auditoría)",
            step1Context: "El Oficial de Cumplimiento / Líder Funcional ingresa el requerimiento mandatorio de auditoría identificando los plazos perentorios y riesgos legales asociados.",
            step1Highlight: "El Portafolio Manager activa el carril fast-track para formalizar el Canvas en menos de 48 horas sin saltarse la gobernanza.",
            raciFocus: "Foco RACI en Paso 1: LF y Oficial de Compliance aseguran que los criterios regulatorios estén cubiertos."
        }
    };

    function selectEscenario(num) {
        const container = document.getElementById('trigger-container');
        const iconBox = document.getElementById('trigger-icon-box');
        const activeTag = document.getElementById('active-escenario-tag');
        const descEl = document.getElementById('trigger-desc-text');
        const c1 = document.getElementById('escenario-card-1');
        const c2 = document.getElementById('escenario-card-2');
        const c3 = document.getElementById('escenario-card-3');
        const pasoSection = document.getElementById('paso-a-paso-section');
        const emptyState = document.getElementById('paso-empty-state');
        const badgeEl = document.getElementById('escenario-context-badge');

        if (!container || !activeTag || !c1 || !c2 || !c3) return;

        if (num === null) {
            activeScenario = null;
            if (descEl) descEl.textContent = triggerDescriptions.general;
            container.className = 'rounded-2xl border-l-4 p-4 shadow-sm transition-all duration-300 bg-white border-l-[#802973]/40 border-[#e4d8e0]';
            if (iconBox) iconBox.className = 'w-7 h-7 rounded-lg flex items-center justify-center bg-[#f2f2f2] text-[#5a4b56]';
            activeTag.textContent = 'Sin Escenario Seleccionado';
            activeTag.className = 'px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide bg-[#f2f2f2] text-[#5a4b56]';
            c1.className = 'px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all text-xs font-semibold border-2 border-[#802973]/30 bg-[#f1b3d7]/30 text-[#802973] hover:bg-[#f1b3d7]/60 active:scale-95';
            c2.className = 'px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all text-xs font-semibold border-2 border-[#fd6f21]/40 bg-[#ffe5d4]/40 text-[#c2410c] hover:bg-[#ffe5d4] active:scale-95';
            c3.className = 'px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all text-xs font-semibold border-2 border-[#bd4a96]/40 bg-[#f8d5ea]/40 text-[#821564] hover:bg-[#f8d5ea] active:scale-95';
            if (pasoSection) pasoSection.classList.add('hidden');
            if (emptyState) emptyState.classList.remove('hidden');
            showToast('Escenario deseleccionado', 'info');
            return;
        }

        activeScenario = num;
        if (pasoSection) {
            pasoSection.classList.remove('hidden');
            pasoSection.classList.add('anim-fade-up');
        }
        if (emptyState) emptyState.classList.add('hidden');

        c1.className = 'px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all text-xs font-semibold border-2 border-[#802973]/30 bg-[#f1b3d7]/30 text-[#802973] hover:bg-[#f1b3d7]/60 active:scale-95';
        c2.className = 'px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all text-xs font-semibold border-2 border-[#fd6f21]/40 bg-[#ffe5d4]/40 text-[#c2410c] hover:bg-[#ffe5d4] active:scale-95';
        c3.className = 'px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all text-xs font-semibold border-2 border-[#bd4a96]/40 bg-[#f8d5ea]/40 text-[#821564] hover:bg-[#f8d5ea] active:scale-95';

        if (descEl && triggerDescriptions[num]) descEl.textContent = triggerDescriptions[num];
        const config = scenarioConfigs[num];
        if (badgeEl && config) badgeEl.textContent = config.badgeText;

        if (num === 1) {
            container.className = 'rounded-2xl border-l-4 p-4 shadow-sm transition-all duration-300 bg-gradient-to-r from-[#f1b3d7]/30 via-white to-white border-l-[#802973] border-[#e87bba]/40';
            if (iconBox) iconBox.className = 'w-7 h-7 rounded-lg flex items-center justify-center bg-[#f1b3d7]/60 text-[#802973]';
            activeTag.textContent = 'Escenario A Activo';
            activeTag.className = 'px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide bg-[#802973] text-white';
            c1.className = 'px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all text-xs font-bold border-2 border-[#802973] bg-[#802973] text-white shadow-md ring-2 ring-[#802973]/25 scale-[1.02] active:scale-95';
            showToast('Escenario A Activado: Dolor Operativo', 'warning');
        } else if (num === 2) {
            container.className = 'rounded-2xl border-l-4 p-4 shadow-sm transition-all duration-300 bg-gradient-to-r from-[#ffe5d4]/80 via-[#ffe5d4]/20 to-white border-l-[#fd6f21] border-[#fd6f21]/40';
            if (iconBox) iconBox.className = 'w-7 h-7 rounded-lg flex items-center justify-center bg-[#fd6f21]/20 text-[#fd6f21]';
            activeTag.textContent = 'Escenario B Activo';
            activeTag.className = 'px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide bg-[#fd6f21] text-white';
            c2.className = 'px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all text-xs font-bold border-2 border-[#fd6f21] bg-[#fd6f21] text-white shadow-md ring-2 ring-[#fd6f21]/25 scale-[1.02] active:scale-95';
            showToast('Escenario B Activado: Oportunidad Estratégica', 'rocket_launch');
        } else if (num === 3) {
            container.className = 'rounded-2xl border-l-4 p-4 shadow-sm transition-all duration-300 bg-gradient-to-r from-[#f8d5ea]/80 via-[#f8d5ea]/20 to-white border-l-[#bd4a96] border-[#bd4a96]/40';
            if (iconBox) iconBox.className = 'w-7 h-7 rounded-lg flex items-center justify-center bg-[#bd4a96]/20 text-[#bd4a96]';
            activeTag.textContent = 'Escenario C Activo';
            activeTag.className = 'px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide bg-[#bd4a96] text-white';
            c3.className = 'px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all text-xs font-bold border-2 border-[#bd4a96] bg-[#bd4a96] text-white shadow-md ring-2 ring-[#bd4a96]/25 scale-[1.02] active:scale-95';
            showToast('Escenario C Activado: Mandato Regulatorio', 'gavel');
        }

        setStep(currentStep);
    }

    const stepData = {
        1: {
            duration: "Duración: 45 min",
            raciBadge: "Sincronizado con Paso 1",
            desc1: "El Líder Funcional detecta la necesidad o dolor operativo y coordina con el Portafolio Manager la sesión de descubrimiento inicial de 45 minutos para formalizar el Canvas de 1 Página.",
            desc2: "El BP/BA facilita la sesión y extrae los dolores estratégicos cuantitativos y cualitativos preliminares.",
            deliverable: "Canvas de 1 Página (Borrador Inicial)",
            deliverableIcon: "description",
            raciNote: "Foco RACI en Paso 1: LF y BP lideran la formulación del problema y la necesidad original.",
            raci: { R: ["LF", "BP"], A: ["PM"], C: ["AR"], I: ["SE"] }
        },
        2: {
            duration: "Duración: 1 a 2 días",
            raciBadge: "Sincronizado con Paso 2",
            desc1: "Cruce riguroso con OKRs anuales y validación de impacto directo en los pilares estratégicos de la compañía.",
            desc2: "Filtro temprano para descartar iniciativas redundantes o de bajo retorno sobre la inversión esperada.",
            deliverable: "Filtro de Viabilidad y Coherencia Estratégica",
            deliverableIcon: "rule",
            raciNote: "Foco RACI en Paso 2: PM evalúa la alineación estratégica y AR valida coherencia tecnológica.",
            raci: { R: ["PM"], A: ["PM", "SE"], C: ["AR", "LF"], I: ["BP"] }
        },
        3: {
            duration: "Duración: 3 días",
            raciBadge: "Sincronizado con Paso 3",
            desc1: "Co-creación del Canvas de 1 Página entre el promotor y el BP/BA, acotando el alcance preliminar y los recursos críticos requeridos.",
            desc2: "Definición clara de beneficiarios, sponsors y tamaño estimado de esfuerzo preliminar (T-Shirt Sizing).",
            deliverable: "Canvas Consolidado con Estimación T-Shirt",
            deliverableIcon: "pie_chart",
            raciNote: "Foco RACI en Paso 3: BP/BA consolida el artefacto oficial con aprobación del Líder Funcional.",
            raci: { R: ["BP", "LF"], A: ["LF"], C: ["AR", "PM"], I: ["SE"] }
        },
        4: {
            duration: "Duración: Comité Semanal",
            raciBadge: "Sincronizado con Paso 4",
            desc1: "Firma formal del Canvas por el Líder Funcional y el Portafolio Manager. Ingreso oficial al banco de iniciativas para priorización.",
            desc2: "Asignación de identificador único institucional y pase automático a la Jugada 1.2: Idea Priorizada.",
            deliverable: "Canvas Oficial Aprobado y Firmado",
            deliverableIcon: "verified",
            raciNote: "Foco RACI en Paso 4: PM formaliza la aceptación final y SE recibe el estatus oficial.",
            raci: { R: ["PM"], A: ["PM", "LF"], C: ["SE"], I: ["AR", "BP"] }
        },
        5: {
            duration: "Duración: 30 min / 1 sesión",
            raciBadge: "Sincronizado con Paso 5",
            desc1: "Emisión formal del Dictamen de la iniciativa mediante acuerdo colegiado entre el Líder Funcional y la Oficina de Portafolio / PMO para determinar luz verde oficial o reorientación táctica.",
            desc2: "Formalización del dictamen de viabilidad, dejando constancia de acuerdos, compromisos de sponsoreo y ruta de entrada a cartera de proyectos.",
            deliverable: "Dictamen Formal de Jugada / Acta de Validación",
            deliverableIcon: "gavel",
            raciNote: "Foco RACI en Paso 5: Emisión de Dictamen y resolución colegiada.",
            raci: { R: ["PM"], A: ["SE", "LF"], C: ["AR"], I: ["ET"] }
        }
    };

    function setStep(stepNum) {
        currentStep = stepNum;
        for (let i = 1; i <= 5; i++) {
            const btn = document.getElementById('step-btn-' + i);
            const pill = document.getElementById('step-pill-' + i);
            if (btn && pill) {
                if (i === stepNum) {
                    btn.className = "step-nav-btn text-left p-3.5 rounded-2xl bg-white border-2 border-[#802973] shadow-md transition-all relative overflow-hidden ring-2 ring-[#802973]/20 hover:scale-[1.02] active:scale-95 cursor-pointer";
                    pill.className = "px-2 py-0.5 rounded-lg bg-[#802973] text-white font-bold text-xs inline-block mb-2";
                } else {
                    btn.className = "step-nav-btn text-left p-3.5 rounded-2xl bg-white border border-[#e87bba]/40 shadow-sm hover:border-[#bd4a96] hover:bg-[#faf8f9] hover:scale-[1.02] active:scale-95 transition-all relative overflow-hidden cursor-pointer";
                    pill.className = "px-2 py-0.5 rounded-lg bg-[#f2f2f2] text-[#5a4b56] font-bold text-xs inline-block mb-2";
                }
            }
        }

        const data = stepData[stepNum];
        if (!data) return;

        const durEl = document.getElementById('step-active-duration');
        const raciBadgeEl = document.getElementById('step-raci-badge');
        const p1El = document.getElementById('step-context-p1');
        const p2El = document.getElementById('step-context-p2');
        const raciNote = document.getElementById('raci-focus-note');
        const delText = document.getElementById('step-deliverable-text');
        const delIcon = document.getElementById('step-deliverable-icon');

        if (durEl) durEl.innerHTML = '<span class="material-symbols-outlined text-sm">schedule</span> ' + data.duration;
        if (raciBadgeEl) raciBadgeEl.textContent = data.raciBadge;

        let desc1Text = data.desc1;
        let desc2Text = data.desc2;
        let noteText = data.raciNote;

        if (stepNum === 1 && activeScenario && scenarioConfigs[activeScenario]) {
            desc1Text = scenarioConfigs[activeScenario].step1Context;
            desc2Text = scenarioConfigs[activeScenario].step1Highlight;
            noteText = scenarioConfigs[activeScenario].raciFocus;
        }

        if (p1El) p1El.textContent = desc1Text;
        if (p2El) p2El.textContent = desc2Text;
        if (raciNote) raciNote.textContent = noteText;
        if (delText) delText.innerHTML = '<strong class="text-[#241822]">Entregable:</strong> ' + data.deliverable;
        if (delIcon) delIcon.textContent = data.deliverableIcon;

        renderRaciRoles('r', data.raci.R, 'bg-[#802973] text-white hover:ring-2 hover:ring-[#802973]/50');
        renderRaciRoles('a', data.raci.A, 'bg-[#e87bba]/40 text-[#802973] hover:ring-2 hover:ring-[#bd4a96]/50');
        renderRaciRoles('c', data.raci.C, 'bg-[#f1b3d7]/50 text-[#d63489] hover:ring-2 hover:ring-[#d63489]/50');
        renderRaciRoles('i', data.raci.I, 'bg-[#e4d8e0] text-[#5a4b56] hover:ring-2 hover:ring-[#5a4b56]/40');
    }

    /* Renderizado de Roles RACI con soporte de Tooltip Enriquecido */
    function renderRaciRoles(colKey, roles, badgeClass) {
        const container = document.getElementById('raci-items-' + colKey);
        if (!container) return;
        let html = '';
        roles.forEach(role => {
            html += `
                <div class="raci-badge py-1.5 px-2 rounded-xl ${badgeClass} text-xs font-bold shadow-xs flex items-center justify-center gap-1 cursor-pointer transition-transform duration-200"
                     tabindex="0"
                     data-role="${role}"
                     data-raci="${colKey}"
                     onmouseenter="showRaciTooltip(event, '${role}', '${colKey}')"
                     onmouseleave="hideRaciTooltip()"
                     onfocus="showRaciTooltip(event, '${role}', '${colKey}')"
                     onblur="hideRaciTooltip()"
                     onclick="handleRaciClick('${role}', '${colKey}')">
                    <span>• ${role}</span>
                    <span class="material-symbols-outlined text-[11px] opacity-70">info</span>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    /* Control del Tooltip Flotante */
    const tooltipEl = document.getElementById('raci-floating-tooltip');

    function showRaciTooltip(e, roleKey, raciKey) {
        if (!tooltipEl) return;
        const target = e.currentTarget;
        const roleInfo = roleDefinitions[roleKey] || { title: roleKey, subtitle: "Rol Operativo VRO", colorClass: "from-[#802973] to-[#bd4a96]" };
        const raciType = raciTypeLabels[raciKey] || { name: raciKey.toUpperCase(), bg: "bg-[#802973]", text: "text-white", border: "border-white/20" };
        
        const stepActions = raciActionsByStep[currentStep] || {};
        const actionText = stepActions[roleKey] || `Participa activamente como ${raciType.name} asegurando la alineación y calidad del proceso VRO en este paso.`;

        // Llenar contenido
        const badgeBadge = document.getElementById('tooltip-role-badge');
        const roleName = document.getElementById('tooltip-role-name');
        const roleSubtitle = document.getElementById('tooltip-role-subtitle');
        const raciTypeEl = document.getElementById('tooltip-raci-type');
        const stepLabel = document.getElementById('tooltip-step-label');
        const actionEl = document.getElementById('tooltip-role-action');

        if (badgeBadge) {
            badgeBadge.textContent = roleKey;
            badgeBadge.className = `w-8 h-8 rounded-xl bg-gradient-to-br ${roleInfo.colorClass} text-white font-headline font-black text-xs flex items-center justify-center shadow-md ring-2 ring-white/20`;
        }
        if (roleName) roleName.textContent = roleInfo.title;
        if (roleSubtitle) roleSubtitle.textContent = roleInfo.subtitle;
        if (raciTypeEl) {
            raciTypeEl.textContent = raciType.name;
            raciTypeEl.className = `px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide ${raciType.bg} ${raciType.text} border ${raciType.border}`;
        }
        if (stepLabel) stepLabel.textContent = `Acción en Paso ${currentStep}:`;
        if (actionEl) actionEl.textContent = actionText;

        // Calcular posición flotante precisa
        const rect = target.getBoundingClientRect();
        const tooltipWidth = 320;
        const tooltipHeight = 160;

        let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
        let top = rect.top - tooltipHeight - 12; // Arriba del elemento por defecto

        // Prevenir desbordes de pantalla
        if (left < 16) left = 16;
        if (left + tooltipWidth > window.innerWidth - 16) {
            left = window.innerWidth - tooltipWidth - 16;
        }

        // Si se sale arriba, colocar abajo
        if (top < 70) {
            top = rect.bottom + 12;
        }

        tooltipEl.style.left = `${left}px`;
        tooltipEl.style.top = `${top}px`;
        tooltipEl.classList.add('active');
    }

    function hideRaciTooltip() {
        if (!tooltipEl) return;
        tooltipEl.classList.remove('active');
    }

    function handleRaciClick(roleKey, raciKey) {
        const roleInfo = roleDefinitions[roleKey];
        const raciType = raciTypeLabels[raciKey];
        showToast(`${roleKey} (${raciType ? raciType.name : ''}): ${roleInfo ? roleInfo.title : ''}`, 'assignment_ind');
    }

    function previewStars(hoverCount) {
        const container = document.getElementById('interactive-scoring-stars');
        if (!container) return;
        const buttons = container.querySelectorAll('.star-btn');
        buttons.forEach((btn, idx) => {
            const icon = btn.querySelector('.material-symbols-outlined');
            if (idx < hoverCount) {
                btn.style.color = '#fd6f21';
                if (icon) icon.style.fontVariationSettings = "'FILL' 1";
            } else {
                btn.style.color = '#e4d8e0';
                if (icon) icon.style.fontVariationSettings = "'FILL' 0";
            }
        });
    }

    function restoreStars() {
        rateStars(currentScore, false);
    }

    function rateStars(count, triggerFeedback = true) {
        currentScore = count;
        const scoreBadge = document.getElementById('score-badge');
        const statusText = document.getElementById('score-text-status');
        if (scoreBadge) scoreBadge.textContent = count + '.0';
        if (statusText) statusText.textContent = count === 5 ? "SCORE GENERAL • MADUREZ ÓPTIMA" : "SCORE REGISTRADO: " + count + ".0 / 5.0";

        const container = document.getElementById('interactive-scoring-stars');
        if (container) {
            const buttons = container.querySelectorAll('.star-btn');
            buttons.forEach((btn, idx) => {
                const icon = btn.querySelector('.material-symbols-outlined');
                if (idx < count) {
                    btn.style.color = '#d63489';
                    if (icon) icon.style.fontVariationSettings = "'FILL' 1";
                } else {
                    btn.style.color = '#e4d8e0';
                    if (icon) icon.style.fontVariationSettings = "'FILL' 0";
                }
            });
        }
        if (triggerFeedback) {
            showToast('¡Calificación guardada: ' + count + ' estrellas!', 'star');
        }
    }

    function toggleTemplatesSection(forceOpen = false) {
        const content = document.getElementById('templates-content');
        const chevron = document.getElementById('templates-chevron');
        const label = document.getElementById('accordion-toggle-label');
        if (!content || !chevron) return;

        const isCurrentlyHidden = content.classList.contains('hidden');
        if (forceOpen || isCurrentlyHidden) {
            content.classList.remove('hidden');
            chevron.style.transform = 'rotate(180deg)';
            if (label) label.textContent = 'Ocultar Plantillas';
            showToast('Plantillas desplegadas');
        } else {
            content.classList.add('hidden');
            chevron.style.transform = 'rotate(0deg)';
            if (label) label.textContent = 'Mostrar Plantillas';
            showToast('Plantillas ocultadas');
        }
    }

    // Inicializar estado del Stepper y Roles RACI
    document.addEventListener('DOMContentLoaded', () => {
        setStep(1);
    });
