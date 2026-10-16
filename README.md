<!DOCTYPE html><html class="light scroll-smooth" lang="es"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Metodología VRO - Versión Interactiva y Animada Oficial | Executive Zenith PMO</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;family=Manrope:wght@600;700;800&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script>
    tailwind.config = {
        darkMode: "class",
        theme: {
            extend: {
                colors: {
                    "primary": "#802973",
                    "secondary": "#bd4a96",
                    "accent-pink": "#d63489",
                    "rose-mid": "#e87bba",
                    "blush-soft": "#f1b3d7",
                    "surface-neutral": "#f2f2f2",
                    "callout-orange": "#fd6f21",
                    "on-surface": "#241822",
                    "on-surface-variant": "#5a4b56",
                    "outline-variant": "#e4d8e0"
                },
                fontFamily: {
                    headline: ["Manrope", "Inter", "sans-serif"],
                    body: ["Inter", "sans-serif"]
                }
            }
        }
    }
</script>
<style>
    .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    body {
        background-color: #faf8f9;
        color: #241822;
        overflow-x: hidden;
    }

    @keyframes slowOrbit {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    .orbit-slow {
        transform-origin: 170px 170px;
        animation: slowOrbit 30s linear infinite;
    }

    @keyframes pulseCore {
        0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 4px 12px rgba(128, 41, 115, 0.4));
        }
        50% {
            transform: scale(1.06);
            filter: drop-shadow(0 0 25px rgba(214, 52, 137, 0.7)) drop-shadow(0 0 35px rgba(241, 179, 215, 0.8));
        }
    }
    .pulse-core-node {
        transform-origin: 170px 170px;
        animation: pulseCore 3.2s ease-in-out infinite;
    }

    .circle-node {
        transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.25s ease;
        transform-origin: center;
        cursor: pointer;
    }
    .circle-node:hover, .circle-node.node-active {
        transform: scale(1.14);
        filter: drop-shadow(0 8px 18px rgba(128, 41, 115, 0.45));
    }

    @keyframes buttonShimmer {
        0% { transform: translateX(-180%) skewX(-20deg); }
        100% { transform: translateX(280%) skewX(-20deg); }
    }
    .shimmer-active {
        position: relative;
        overflow: hidden;
    }
    .shimmer-active::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 65%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
        animation: buttonShimmer 2.8s infinite ease-in-out;
        pointer-events: none;
    }

    .star-btn {
        transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.15s ease;
    }
    .star-btn:hover {
        transform: scale(1.25) translateY(-2px);
    }

    .hover-lift {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .hover-lift:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px -5px rgba(128, 41, 115, 0.1);
    }

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .anim-fade-up {
        animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    /* RACI Badge Interactive & Floating Tooltip Styles */
    .raci-badge {
        position: relative;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        user-select: none;
    }
    .raci-badge:hover, .raci-badge:focus-visible {
        transform: scale(1.08) translateY(-2px);
        box-shadow: 0 8px 20px -3px rgba(128, 41, 115, 0.35);
        outline: none;
    }

    #raci-floating-tooltip {
        position: fixed;
        z-index: 9999;
        pointer-events: none;
        transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        transform: translateY(8px) scale(0.97);
        opacity: 0;
        visibility: hidden;
        filter: drop-shadow(0 20px 30px rgba(19, 27, 46, 0.35)) drop-shadow(0 4px 8px rgba(128, 41, 115, 0.18));
    }
    #raci-floating-tooltip.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
    }

    @media (prefers-reduced-motion: reduce) {
        *, ::before, ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
        .orbit-slow, .pulse-core-node, .shimmer-active::after { animation: none !important; }
    }
</style>
</head>
<body class="font-body selection:bg-[#f1b3d7] selection:text-[#802973]">
<!-- Toast Notification -->
<div class="fixed bottom-6 right-6 z-50 transform transition-all duration-300 flex items-center gap-3 px-4 py-3 bg-[#131b2e] text-white rounded-2xl shadow-2xl border border-white/10 text-xs font-semibold opacity-0 translate-y-20 pointer-events-none" id="toast-notification">
<div class="w-7 h-7 rounded-lg bg-[#802973] text-white flex items-center justify-center flex-shrink-0" id="toast-icon-wrapper">
<span class="material-symbols-outlined text-sm" id="toast-icon">insights</span>
</div>
<span id="toast-message" class="">Dimensión: Alcance y cronograma</span>
</div>
<!-- Floating Enriched Tooltip for RACI Roles -->
<div class="max-w-xs md:max-w-sm w-80 bg-[#131b2e] text-white rounded-2xl p-4 border border-white/15 backdrop-blur-xl shadow-2xl" id="raci-floating-tooltip" style="left: 576.5px; top: 1929px;"><div class="flex items-start justify-between gap-3 pb-2.5 border-b border-white/10"><div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded-xl bg-gradient-to-br from-[#bd4a96] to-[#d63489] text-white font-headline font-black text-xs flex items-center justify-center shadow-md ring-2 ring-white/20" id="tooltip-role-badge">BP</div><div><h6 class="font-headline font-bold text-xs text-white leading-tight" id="tooltip-role-name">BP • Business Partner / Analyst</h6><span class="text-[10px] text-[#f1b3d7] font-medium block" id="tooltip-role-subtitle">Facilitador de Negocio y Estrategia</span></div></div><span class="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide bg-[#802973] text-[#ffd7f1] border border-[#ffd7f1]/30" id="tooltip-raci-type">Responsable (R)</span></div><div class="mt-2.5 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-2"><div class="flex items-center gap-1.5 min-w-0"><span class="material-symbols-outlined text-sm text-[#f1b3d7]">person</span><span class="text-[11px] font-semibold text-white truncate" id="tooltip-person-name">Asignado Oficial</span></div><a class="text-[10px] text-[#f1b3d7] hover:text-white underline truncate flex items-center gap-1" href="mailto:" id="tooltip-person-email" target="_blank"><span class="material-symbols-outlined text-[11px]">mail</span><span id="tooltip-person-email-text" class="">contacto@empresa.com</span></a></div><div class="mt-2.5 space-y-2 text-[11px] leading-relaxed"><div class="flex items-center gap-1.5 text-[10px] font-bold text-[#f1b3d7] uppercase tracking-wider"><span class="material-symbols-outlined text-xs text-[#d63489]">assignment_ind</span><span id="tooltip-step-label" class="">Acción en Paso 1:</span></div><p class="text-white/85 text-xs font-normal" id="tooltip-role-action">Facilita activamente la sesión de descubrimiento de 45 min, estructura las hipótesis de solución y traduce el dolor en impacto cuantificable preliminar.</p></div><div class="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50"><span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-[#d63489]"></span> Gobernanza Oficial VRO</span><span class="text-[#f1b3d7]/80 font-medium">Click para ver más</span></div></div><div class="fixed inset-0 z-50 bg-[#131b2e]/70 backdrop-blur-sm flex items-center justify-center p-4 hidden anim-fade-up" id="raci-config-modal"><div class="bg-white rounded-3xl border border-[#e4d8e0] shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"><div class="p-5 md:p-6 bg-gradient-to-r from-[#faf8f9] via-white to-[#f1b3d7]/20 border-b border-[#e4d8e0] flex items-center justify-between gap-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-2xl bg-[#802973] text-white flex items-center justify-center shadow-md flex-shrink-0"><span class="material-symbols-outlined text-xl">manage_accounts</span></div><div><h3 class="font-headline font-bold text-lg text-[#241822]">Directorio y Configuración de Roles RACI</h3><p class="text-xs text-[#5a4b56]">Asigna los nombres y correos institucionales de los participantes por rol</p></div></div><button class="w-8 h-8 rounded-full bg-[#f2f2f2] hover:bg-[#e4d8e0] text-[#5a4b56] flex items-center justify-center cursor-pointer transition-colors" onclick="closeRaciConfigModal()" type="button"><span class="material-symbols-outlined text-base">close</span></button></div><div class="p-5 md:p-6 overflow-y-auto flex-1 space-y-4"><div class="flex items-center justify-between gap-3 flex-wrap pb-2 border-b border-[#f2f2f2]"><span class="text-xs font-bold uppercase tracking-wider text-[#bd4a96] flex items-center gap-1"><span class="material-symbols-outlined text-sm">badge</span> Participantes Asignados por Rol</span><div class="flex items-center gap-2"><button class="px-2.5 py-1.5 rounded-xl bg-[#f2f2f2] text-[#5a4b56] hover:bg-white border border-[#e4d8e0] text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors" onclick="resetRaciDefaults()" type="button"><span class="material-symbols-outlined text-xs">restart_alt</span> Restablecer Predeterminados</button><button class="px-2.5 py-1.5 rounded-xl bg-[#f1b3d7]/40 text-[#802973] hover:bg-[#f1b3d7]/70 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors" onclick="showNewRoleFormToggle(true)" type="button"><span class="material-symbols-outlined text-xs">person_add</span> + Nuevo Rol</button></div></div><div class="hidden p-4 rounded-2xl bg-[#faf8f9] border border-[#e87bba]/40 space-y-3" id="new-role-creator-box"><div class="flex items-center justify-between"><span class="text-xs font-bold text-[#802973] flex items-center gap-1"><span class="material-symbols-outlined text-sm text-[#bd4a96]">add_circle</span> Crear Rol Personalizado</span><button class="text-xs text-[#5a4b56] hover:text-[#ba1a1a] cursor-pointer" onclick="showNewRoleFormToggle(false)" type="button">Cancelar</button></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-2"><input class="p-2 text-xs border border-[#e4d8e0] rounded-xl bg-white" id="new-role-code" placeholder="Código (ej: QA)" type="text"><input class="p-2 text-xs border border-[#e4d8e0] rounded-xl bg-white sm:col-span-2" id="new-role-title" placeholder="Nombre del Cargo (ej: QA • Quality Lead)" type="text"><input class="p-2 text-xs border border-[#e4d8e0] rounded-xl bg-white" id="new-role-subtitle" placeholder="Subtítulo (ej: Calidad y Pruebas)" type="text"><input class="p-2 text-xs border border-[#e4d8e0] rounded-xl bg-white" id="new-role-person" placeholder="Persona Asignada" type="text"><input class="p-2 text-xs border border-[#e4d8e0] rounded-xl bg-white" id="new-role-email" placeholder="Correo institucional" type="email"></div><div class="flex justify-end pt-1"><button class="px-3 py-1.5 bg-[#802973] text-white rounded-xl text-xs font-bold flex items-center gap-1 hover:bg-[#bd4a96] cursor-pointer" onclick="saveNewCustomRole()" type="button"><span class="material-symbols-outlined text-xs">save</span> Guardar Rol</button></div></div><div class="space-y-3" id="raci-roles-form-list"></div></div><div class="p-4 md:p-5 bg-[#faf8f9] border-t border-[#e4d8e0] flex items-center justify-between gap-3"><span class="text-[11px] text-[#5a4b56] flex items-center gap-1"><span class="material-symbols-outlined text-xs text-emerald-500">sync</span> Sincronización instantánea con los tooltips interactivos</span><div class="flex items-center gap-2"><button class="px-4 py-2 rounded-xl border border-[#e4d8e0] bg-white text-[#5a4b56] hover:bg-[#f2f2f2] text-xs font-semibold cursor-pointer transition-colors" onclick="closeRaciConfigModal()" type="button">Cancelar</button><button class="px-4 py-2 rounded-xl bg-gradient-to-r from-[#802973] via-[#bd4a96] to-[#d63489] text-white hover:brightness-110 text-xs font-bold flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer" onclick="saveAndSyncRaciSettings()" type="button"><span class="material-symbols-outlined text-sm">check_circle</span> Guardar y Sincronizar</button></div></div></div></div>
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-[#faf8f9]/90 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full mx-auto border-b border-[#f2f2f2]">
<div class="text-xl font-extrabold text-[#802973] font-headline flex items-center gap-2 group cursor-pointer">
<span class="w-2.5 h-2.5 rounded-full bg-[#802973] inline-block group-hover:scale-125 transition-transform duration-300"></span>
        OFICINA DE PROYECTOS VRO
    </div>
<div class="hidden md:flex space-x-8 items-center font-semibold tracking-tight text-sm">
<a class="text-[#241822]/70 hover:text-[#802973] transition-colors" href="#">Home</a>
<a class="text-[#802973] font-bold border-b-2 border-[#802973] pb-1" href="#playbook-fases">Playbook</a>
<a class="text-[#241822]/70 hover:text-[#802973] transition-colors" href="#ciclo-de-vida-section">Pilares</a>
<a class="text-[#241822]/70 hover:text-[#802973] transition-colors" href="#plantillas-section">Plantillas</a>
<a class="text-[#241822]/70 hover:text-[#802973] transition-colors" href="#">Contacto</a>
</div>
<div class="flex items-center space-x-4">
<button class="material-symbols-outlined text-[#802973] p-2 hover:bg-[#f2f2f2] rounded-full transition-transform active:scale-90 cursor-pointer" onclick="showToast('Buscador activo: Metodología VRO')">search</button>
</div>
</nav>
<main class="pt-24 pb-16 px-6 md:px-14 max-w-screen-2xl mx-auto space-y-14">
<!-- Header Hero -->
<header>
<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-2">
<div class="max-w-2xl">
<h1 class="font-headline text-4xl md:text-6xl font-extrabold text-[#802973] leading-tight tracking-tight">Playbook <font color="#bd4a96">VRO</font></h1>
<p class="text-xs md:text-sm font-semibold tracking-wide text-[#bd4a96] mt-2">La estrategia en movimiento, el valor en cada jugada</p>
</div>
<div class="max-w-sm text-left md:text-right">
<p class="text-[#5a4b56]/80 text-[11px] md:text-xs font-normal leading-relaxed">Identificar los escenarios estratégicos fundamentales para estructurar el playbook institucional, garantizando una ejecución estandarizada y eficiente en la operación.</p>
</div>
</div>
</header>
<!-- BIG PICTURE VRO Diagram Section -->
<section class="scroll-mt-24" id="ciclo-de-vida-section">
<div class="text-center mb-6">
<h2 class="font-headline font-extrabold tracking-tight text-lg md:text-xl">
<span class="text-[#d63489]">BIG PICTURE VRO:</span> <span class="text-[#802973]">De la Estrategia a la Entrega de Valor</span>
</h2>
</div>
<div class="bg-gradient-to-b from-white via-[#faf8f9] to-[#f1b3d7]/30 rounded-3xl p-6 md:p-8 border border-[#e87bba]/40 shadow-xl shadow-[#802973]/5 space-y-6">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
<!-- Columna Izquierda: Fase 0 -->
<div class="lg:col-span-3 flex flex-col rounded-2xl overflow-hidden border border-[#e87bba]/40 bg-white shadow-sm hover:shadow-md transition-shadow">
<div class="bg-gradient-to-r from-[#802973] to-[#bd4a96] text-white py-3 px-4 text-center">
<h3 class="font-headline font-bold text-sm tracking-wide">Fase 0. Preproyecto</h3>
</div>
<div class="p-5 flex-1 flex flex-col justify-around gap-2.5 bg-[#faf8f9]">
<button class="group text-left p-3 rounded-xl bg-white border border-[#e87bba]/30 hover:border-[#802973] hover:shadow-sm hover:translate-x-1 transition-all flex items-center gap-3 cursor-pointer" onclick="document.getElementById('playbook-fases').scrollIntoView({behavior: 'smooth'})" type="button">
<div class="w-9 h-9 rounded-xl bg-[#f1b3d7]/50 text-[#802973] flex items-center justify-center flex-shrink-0 group-hover:bg-[#802973] group-hover:text-white transition-all">
<span class="material-symbols-outlined text-lg">lightbulb</span>
</div>
<span class="font-headline font-bold text-xs text-[#241822] group-hover:text-[#802973]">1. Idea</span>
</button>
<button class="group text-left p-3 rounded-xl bg-white border border-[#e87bba]/30 hover:border-[#bd4a96] hover:shadow-sm hover:translate-x-1 transition-all flex items-center gap-3 cursor-pointer" onclick="document.getElementById('playbook-fases').scrollIntoView({behavior: 'smooth'})" type="button">
<div class="w-9 h-9 rounded-xl bg-[#f1b3d7]/50 text-[#bd4a96] flex items-center justify-center flex-shrink-0 group-hover:bg-[#bd4a96] group-hover:text-white transition-all">
<span class="material-symbols-outlined text-lg">track_changes</span>
</div>
<span class="font-headline font-bold text-xs text-[#241822] group-hover:text-[#bd4a96]">2. Evaluación</span>
</button>
<button class="group text-left p-3 rounded-xl bg-white border border-[#e87bba]/30 hover:border-[#d63489] hover:shadow-sm hover:translate-x-1 transition-all flex items-center gap-3 cursor-pointer" onclick="document.getElementById('playbook-fases').scrollIntoView({behavior: 'smooth'})" type="button">
<div class="w-9 h-9 rounded-xl bg-[#f1b3d7]/50 text-[#d63489] flex items-center justify-center flex-shrink-0 group-hover:bg-[#d63489] group-hover:text-white transition-all">
<span class="material-symbols-outlined text-lg">assignment_turned_in</span>
</div>
<span class="font-headline font-bold text-xs text-[#241822] group-hover:text-[#d63489]">3. EDS y Estimación</span>
</button>
<button class="group text-left p-3 rounded-xl bg-white border border-[#e87bba]/30 hover:border-[#802973] hover:shadow-sm hover:translate-x-1 transition-all flex items-center gap-3 cursor-pointer" onclick="document.getElementById('playbook-fases').scrollIntoView({behavior: 'smooth'})" type="button">
<div class="w-9 h-9 rounded-xl bg-[#f1b3d7]/50 text-[#802973] flex items-center justify-center flex-shrink-0 group-hover:bg-[#802973] group-hover:text-white transition-all">
<span class="material-symbols-outlined text-lg">verified</span>
</div>
<span class="font-headline font-bold text-xs text-[#241822] group-hover:text-[#802973]">4. Formalización y Autorización</span>
</button>
</div>
</div>
<!-- Columna Central: Planeación - Ejecución - Cierre -->
<div class="lg:col-span-6 flex flex-col rounded-2xl overflow-hidden border border-[#e87bba]/40 bg-white shadow-sm hover:shadow-md transition-shadow">
<div class="bg-gradient-to-r from-[#802973] via-[#bd4a96] to-[#802973] text-white py-3 px-4 text-center">
<h3 class="font-headline font-bold text-sm tracking-wide">Planeación - Ejecución - Cierre</h3>
</div>
<div class="p-6 flex-1 flex flex-col items-center justify-center relative bg-gradient-to-b from-[#faf8f9] to-white">
<div class="w-full flex flex-col items-center justify-center py-2 space-y-4 select-none">
<div class="relative w-full max-w-[310px] aspect-square flex items-center justify-center">
<svg class="w-full h-full overflow-visible drop-shadow-sm" viewBox="0 0 340 340">
<defs>
<radialGradient cx="50%" cy="50%" id="coreGlow" r="50%">
<stop offset="0%" stop-color="#a83594"></stop>
<stop offset="70%" stop-color="#802973"></stop>
<stop offset="100%" stop-color="#5c1552"></stop>
</radialGradient>
<filter height="200%" id="auraGlow" width="200%" x="-50%" y="-50%">
<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="6"></feGaussianBlur>
<feMerge>
<feMergeNode in="blur"></feMergeNode>
<feMergeNode in="SourceGraphic"></feMergeNode>
</feMerge>
</filter>
</defs>
<!-- Órbita Continua con animación @keyframes slowOrbit -->
<g class="orbit-slow">
<circle cx="170" cy="170" fill="none" opacity="0.8" r="120" stroke="#f1b3d7" stroke-dasharray="8 6" stroke-width="2.5"></circle>
</g>
<circle cx="170" cy="170" fill="none" opacity="0.4" r="120" stroke="#bd4a96" stroke-width="2"></circle>
<!-- Conectores y flechas -->
<line opacity="0.4" stroke="#e87bba" stroke-dasharray="3 3" stroke-width="1.5" x1="170" x2="170" y1="170" y2="50"></line>
<line opacity="0.4" stroke="#e87bba" stroke-dasharray="3 3" stroke-width="1.5" x1="170" x2="284" y1="170" y2="133"></line>
<line opacity="0.4" stroke="#e87bba" stroke-dasharray="3 3" stroke-width="1.5" x1="170" x2="240" y1="170" y2="268"></line>
<line opacity="0.4" stroke="#e87bba" stroke-dasharray="3 3" stroke-width="1.5" x1="170" x2="100" y1="170" y2="268"></line>
<line opacity="0.4" stroke="#e87bba" stroke-dasharray="3 3" stroke-width="1.5" x1="170" x2="56" y1="170" y2="133"></line>
<!-- 5 Pétalos Interactivos -->
<g class="circle-node group node-active" id="petal-alcance" onclick="highlightDimension('Alcance y cronograma: Hitos críticos y roadmap de entregables.', 'petal-alcance')" onmouseenter="highlightDimension('Alcance y cronograma: Hitos críticos y roadmap de entregables.', 'petal-alcance')">
<circle cx="170" cy="50" fill="#ffffff" r="32" stroke="#802973" stroke-width="2.5"></circle>
<circle cx="170" cy="50" fill="#802973" r="26"></circle>
<text fill="#ffffff" font-family="Inter" font-size="8" font-weight="700" text-anchor="middle" x="170" y="46">Alcance y</text>
<text fill="#ffffff" font-family="Inter" font-size="8" font-weight="700" text-anchor="middle" x="170" y="57">cronograma</text>
</g>
<g class="circle-node group" id="petal-recursos" onclick="highlightDimension('Recursos: Capacidad instalada, squads técnicos y talento asignado.', 'petal-recursos')" onmouseenter="highlightDimension('Recursos: Capacidad instalada, squads técnicos y talento asignado.', 'petal-recursos')">
<circle cx="284" cy="133" fill="#ffffff" r="31" stroke="#bd4a96" stroke-width="2.5"></circle>
<circle cx="284" cy="133" fill="#bd4a96" r="25"></circle>
<text fill="#ffffff" font-family="Inter" font-size="8.5" font-weight="700" text-anchor="middle" x="284" y="136">Recursos</text>
</g>
<g class="circle-node group" id="petal-finanzas" onclick="highlightDimension('Finanzas: Capex, Opex, presupuesto y retorno proyectado.', 'petal-finanzas')" onmouseenter="highlightDimension('Finanzas: Capex, Opex, presupuesto y retorno proyectado.', 'petal-finanzas')">
<circle cx="240" cy="268" fill="#ffffff" r="31" stroke="#d63489" stroke-width="2.5"></circle>
<circle cx="240" cy="268" fill="#d63489" r="25"></circle>
<text fill="#ffffff" font-family="Inter" font-size="8.5" font-weight="700" text-anchor="middle" x="240" y="271">Finanzas</text>
</g>
<g class="circle-node group" id="petal-riesgos" onclick="highlightDimension('Riesgos: Matriz de calor, contingencias y mitigaciones tempranas.', 'petal-riesgos')" onmouseenter="highlightDimension('Riesgos: Matriz de calor, contingencias y mitigaciones tempranas.', 'petal-riesgos')">
<circle cx="100" cy="268" fill="#ffffff" r="31" stroke="#d63489" stroke-width="2.5"></circle>
<circle cx="100" cy="268" fill="#d63489" r="25"></circle>
<text fill="#ffffff" font-family="Inter" font-size="8.5" font-weight="700" text-anchor="middle" x="100" y="271">Riesgos</text>
</g>
<g class="circle-node group" id="petal-gobernanza" onclick="highlightDimension('Gobernanza: Comités de cartera, estándares y cumplimiento VRO.', 'petal-gobernanza')" onmouseenter="highlightDimension('Gobernanza: Comités de cartera, estándares y cumplimiento VRO.', 'petal-gobernanza')">
<circle cx="56" cy="133" fill="#ffffff" r="31" stroke="#802973" stroke-width="2.5"></circle>
<circle cx="56" cy="133" fill="#802973" r="25"></circle>
<text fill="#ffffff" font-family="Inter" font-size="8.5" font-weight="700" text-anchor="middle" x="56" y="136">Gobernanza</text>
</g>
<!-- Nodo Central con Animación Pulse Core -->
<g class="circle-node pulse-core-node group" onclick="document.getElementById('playbook-fases').scrollIntoView({behavior: 'smooth'})" title="Generación de Valor">
<circle cx="170" cy="170" fill="#f1b3d7" filter="url(#auraGlow)" opacity="0.45" r="58"></circle>
<circle cx="170" cy="170" fill="#ffffff" r="52" stroke="#f1b3d7" stroke-width="3"></circle>
<circle cx="170" cy="170" fill="url(#coreGlow)" r="46" stroke="#ffffff" stroke-width="2"></circle>
<circle cx="170" cy="170" fill="none" opacity="0.6" r="41" stroke="#f1b3d7" stroke-dasharray="4 3" stroke-width="1.5"></circle>
<path d="M 170,144 L 177,151 L 170,158 L 163,151 Z" fill="#f1b3d7"></path>
<text fill="#ffffff" font-family="Manrope" font-size="11" font-weight="800" text-anchor="middle" x="170" y="172">Generación</text>
<text fill="#f1b3d7" font-family="Manrope" font-size="11" font-weight="800" text-anchor="middle" x="170" y="185">de Valor</text>
</g>
</svg>
</div>
<div class="flex items-center justify-center gap-2 text-xs text-[#802973] font-semibold bg-white px-4 py-1.5 rounded-full border border-[#e87bba]/30 shadow-sm transition-all" id="dimension-tooltip-text"><span class="w-2 h-2 rounded-full bg-[#fd6f21] inline-block animate-ping"></span><span class="">Alcance y cronograma: Hitos críticos y roadmap de entregables.</span></div>
</div>
</div>
</div>
<!-- Columna Derecha: Fase 5 -->
<div class="lg:col-span-3 flex flex-col rounded-2xl overflow-hidden border border-[#fd6f21]/40 bg-white shadow-sm hover:shadow-md transition-shadow">
<div class="bg-gradient-to-r from-[#d63489] to-[#fd6f21] text-white py-3 px-4 text-center">
<h3 class="font-headline font-bold text-sm tracking-wide">Fase 5. Realización de valor</h3>
</div>
<div class="p-5 flex-1 flex flex-col items-center justify-between text-center gap-4 bg-gradient-to-b from-[#faf8f9] to-[#fd6f21]/10">
<div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#fd6f21]/20 to-[#f1b3d7]/40 flex items-center justify-center text-[#fd6f21] border-2 border-[#fd6f21]/30 mt-2 shadow-sm">
<span class="material-symbols-outlined text-4xl">emoji_events</span>
</div>
<div class="bg-white p-3.5 rounded-xl border border-[#fd6f21]/20 shadow-sm flex items-start gap-3 text-left w-full">
<div class="w-8 h-8 rounded-lg bg-[#fd6f21]/20 text-[#fd6f21] flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-base">query_stats</span>
</div>
<p class="text-xs text-[#5a4b56] leading-relaxed">
<strong class="text-[#241822]">Medición y cierre del ciclo:</strong> Evaluación final de <span class="font-bold text-[#802973]">resultados</span> frente a KPIs y OKRs para validar el retorno.
                            </p>
</div>
<button class="relative overflow-hidden w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#802973] via-[#bd4a96] to-[#fd6f21] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 shimmer-active cursor-pointer" onclick="showToast('Calculando métricas de Retorno ROI para el portafolio...', 'query_stats')" type="button">
<span class="material-symbols-outlined text-sm text-[#f1b3d7]">check_circle</span> VALIDAR RETORNO ROI
                        </button>
</div>
</div>
</div>
<!-- Barras Horizontales de Alineación Continua -->
<div class="space-y-2 pt-2">
<div class="flex flex-col md:flex-row items-center gap-2.5">
<div class="w-full md:w-44 flex items-center gap-2 text-xs font-bold text-[#802973] uppercase tracking-wider flex-shrink-0 pl-1">
<span class="material-symbols-outlined text-base text-[#bd4a96]">psychology</span>
<span class="">Change Management</span>
</div>
<div class="w-full flex-1 grid grid-cols-1 md:grid-cols-12 gap-2 text-center text-xs font-semibold">
<div class="md:col-span-3 py-2 px-3 rounded-xl bg-[#f1b3d7]/40 text-[#802973] border border-[#e87bba]/40 truncate hover:bg-[#f1b3d7]/70 transition-colors cursor-pointer" onclick="showToast('Change Management: Preparando el cambio')">Preparando el cambio</div>
<div class="md:col-span-6 py-2 px-3 rounded-xl bg-[#f1b3d7]/30 text-[#802973] border border-[#e87bba]/40 truncate hover:bg-[#f1b3d7]/60 transition-colors cursor-pointer" onclick="showToast('Change Management: Gestionando y viviendo el cambio')">Gestionando y viviendo el cambio</div>
<div class="md:col-span-3 py-2 px-3 rounded-xl bg-[#f1b3d7]/40 text-[#802973] border border-[#e87bba]/40 truncate hover:bg-[#f1b3d7]/70 transition-colors cursor-pointer" onclick="showToast('Change Management: Reforzando el cambio')">Reforzando el cambio</div>
</div>
</div>
<div class="flex flex-col md:flex-row items-center gap-2.5">
<div class="w-full md:w-44 flex items-center gap-2 text-xs font-bold text-[#bd4a96] uppercase tracking-wider flex-shrink-0 pl-1">
<span class="material-symbols-outlined text-base text-[#bd4a96]">trending_up</span>
<span class="">Valor</span>
</div>
<div class="w-full flex-1 grid grid-cols-1 md:grid-cols-12 gap-2 text-center text-xs font-semibold">
<div class="md:col-span-3 py-2 px-3 rounded-xl bg-[#f1b3d7]/30 text-[#bd4a96] border border-[#e87bba]/30 truncate hover:bg-[#f1b3d7]/60 transition-colors cursor-pointer" onclick="showToast('Flujo de Valor: Identificación temprana')">Identificación</div>
<div class="md:col-span-6 py-2 px-3 rounded-xl bg-[#f1b3d7]/30 text-[#bd4a96] border border-[#e87bba]/30 truncate hover:bg-[#f1b3d7]/60 transition-colors cursor-pointer" onclick="showToast('Flujo de Valor: Construcción continua')">Construcción</div>
<div class="md:col-span-3 py-2 px-3 rounded-xl bg-[#fd6f21]/15 text-[#802973] border border-[#fd6f21]/30 truncate font-bold hover:bg-[#fd6f21]/25 transition-colors cursor-pointer" onclick="showToast('Flujo de Valor: Captura formal')">Captura</div>
</div>
</div>
</div>
<!-- Pilares VRO -->
<div class="pt-3 border-t border-[#e87bba]/30 space-y-2.5">
<div class="w-full py-1.5 px-4 rounded-xl bg-[#f1b3d7]/40 text-center font-headline font-extrabold text-xs tracking-widest uppercase text-[#802973] border border-[#e87bba]/20">
                    Pilares VRO
                </div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<div class="p-3.5 rounded-xl bg-gradient-to-br from-[#802973] to-[#bd4a96] text-white flex items-center gap-3 shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" onclick="showToast('Pilar 1: Alineación estratégica y priorización')">
<div class="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-lg">change_history</span>
</div>
<span class="text-xs font-bold leading-snug">Alineación estratégica y priorización de proyectos</span>
</div>
<div class="p-3.5 rounded-xl bg-gradient-to-br from-[#bd4a96] to-[#d63489] text-white flex items-center gap-3 shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" onclick="showToast('Pilar 2: Road map anual sincronizado')">
<div class="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-lg">calendar_today</span>
</div>
<span class="text-xs font-bold leading-snug">Road map anual</span>
</div>
<div class="p-3.5 rounded-xl bg-gradient-to-br from-[#802973] to-[#bd4a96] text-white flex items-center gap-3 shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" onclick="showToast('Pilar 3: Mediciones y reportes centrados en resultados')">
<div class="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-lg">assignment</span>
</div>
<span class="text-xs font-bold leading-snug">Mediciones y reportes centrados en resultados</span>
</div>
<div class="p-3.5 rounded-xl bg-gradient-to-br from-[#d63489] to-[#802973] text-white flex items-center gap-3 shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" onclick="showToast('Pilar 4: Gobernanza VRO institucional')">
<div class="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-lg">account_balance</span>
</div>
<span class="text-xs font-bold leading-snug">Gobernanza VRO</span>
</div>
</div>
</div>
</div>
</section>
<!-- Playbook de Jugadas por Fase Section -->
<div class="p-4 md:p-5 rounded-3xl bg-white border border-[#e4d8e0] shadow-sm transition-all duration-300 space-y-4" id="profile-mode-bar"><div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"><div class="flex items-center gap-3 flex-wrap"><div class="flex items-center gap-2 p-1 bg-[#f2f2f2] rounded-2xl border border-[#e4d8e0]"><button id="btn-mode-viewer" onclick="switchProfileMode('viewer')" type="button" class="px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer bg-white text-[#802973] shadow-sm"><span class="material-symbols-outlined text-sm text-[#802973]">visibility</span><span class="">Perfil General (Visualizador)</span></button><button id="btn-mode-editor" onclick="switchProfileMode('editor')" type="button" class="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#5a4b56] hover:bg-white/80 transition-all flex items-center gap-1.5 cursor-pointer"><span class="material-symbols-outlined text-sm text-[#bd4a96]">edit_document</span><span class="">Perfil Editor (PMO Admin)</span></button></div><div id="status-badge-container" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#faf8f9] border border-[#e87bba]/30 text-xs"><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span><span class="font-bold text-[#802973]" id="mode-status-text">🟢 Versión Oficial Publicada</span></div></div><div class="flex items-center gap-2 flex-wrap"><button id="btn-new-jugada" onclick="openNewJugadaModal()" type="button" class="hidden px-3.5 py-2 rounded-xl bg-[#802973] hover:bg-[#bd4a96] text-white font-bold text-xs shadow-sm transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"><span class="material-symbols-outlined text-sm">add_circle</span><span class="">+ Nueva Jugada</span></button><button id="btn-publish-jugada" onclick="publishPlaybookChanges()" type="button" class="hidden px-4 py-2 rounded-xl bg-gradient-to-r from-[#d63489] to-[#fd6f21] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 shimmer-active transition-all flex items-center gap-1.5 cursor-pointer"><span class="material-symbols-outlined text-sm">rocket_launch</span><span class="">🚀 Publicar Jugada</span></button></div></div><div id="editor-actions-strip" class="hidden pt-3 border-t border-[#e4d8e0] flex flex-wrap items-center justify-between gap-3 text-xs"><div class="flex items-center gap-2 flex-wrap"><span class="text-[11px] font-bold uppercase tracking-wider text-[#bd4a96] flex items-center gap-1"><span class="material-symbols-outlined text-xs">tune</span> Herramientas de Edición:</span><button onclick="toggleInlineEditMode()" type="button" id="btn-toggle-edit-mode" class="px-2.5 py-1.5 rounded-xl bg-[#f1b3d7]/40 text-[#802973] font-bold hover:bg-[#f1b3d7]/70 transition-all flex items-center gap-1 cursor-pointer"><span class="material-symbols-outlined text-xs">edit</span><span id="toggle-edit-label" class="">Editar Ficha Actual</span></button><button onclick="addScenarioInteractive()" type="button" class="px-2.5 py-1.5 rounded-xl bg-[#f2f2f2] text-[#5a4b56] hover:bg-white border border-[#e4d8e0] font-semibold transition-all flex items-center gap-1 cursor-pointer"><span class="material-symbols-outlined text-xs text-[#bd4a96]">add</span> + Agregar Escenario</button><button onclick="addStepInteractive()" type="button" class="px-2.5 py-1.5 rounded-xl bg-[#f2f2f2] text-[#5a4b56] hover:bg-white border border-[#e4d8e0] font-semibold transition-all flex items-center gap-1 cursor-pointer"><span class="material-symbols-outlined text-xs text-[#802973]">playlist_add</span> + Agregar Paso</button><button onclick="removeStepInteractive()" type="button" class="px-2.5 py-1.5 rounded-xl bg-[#f2f2f2] text-[#c2410c] hover:bg-[#ffe5d4]/50 border border-[#e4d8e0] font-semibold transition-all flex items-center gap-1 cursor-pointer"><span class="material-symbols-outlined text-xs text-[#ba1a1a]">delete</span> ✕ Eliminar Paso</button><button onclick="attachDocumentLinkInteractive()" type="button" class="px-2.5 py-1.5 rounded-xl bg-[#f2f2f2] text-[#5a4b56] hover:bg-white border border-[#e4d8e0] font-semibold transition-all flex items-center gap-1 cursor-pointer"><span class="material-symbols-outlined text-xs text-[#bd4a96]">attach_file</span> + Adjuntar Enlace</button><button class="px-2.5 py-1.5 rounded-xl bg-[#f2f2f2] text-[#5a4b56] hover:bg-white border border-[#e4d8e0] font-semibold transition-all flex items-center gap-1 cursor-pointer" onclick="openRaciConfigModal()" type="button"><span class="material-symbols-outlined text-xs text-[#802973]">group_add</span> 👥 Configurar Directorio RACI</button></div><div class="flex items-center gap-2 text-[11px] text-[#5a4b56]"><span class="w-2 h-2 rounded-full bg-[#fd6f21]"></span><span class="">Modo Administrador PMO Activo • Cambios en borrador</span></div></div></div><section class="scroll-mt-24 space-y-6" id="playbook-fases">
<div>
<h2 class="font-headline text-3xl md:text-4xl font-extrabold text-[#802973] tracking-tight">Playbook de Jugadas por Fase</h2>
</div>
<!-- Selector de Fases Principal -->
<div class="space-y-4">
<div class="text-xs font-bold tracking-wider uppercase text-[#bd4a96] flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm">route</span> Selecciona la Etapa
            </div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-[#f2f2f2] rounded-2xl w-full border border-[#e4d8e0]">
<button class="px-3 py-2.5 rounded-xl bg-[#802973] text-white font-bold text-xs shadow-md flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer">
<span class="material-symbols-outlined text-sm flex-shrink-0">flag</span>
<span class="truncate">Etapa 1: Ideación &amp; Formalización</span>
</button>
<button class="px-3 py-2.5 rounded-xl text-[#5a4b56] hover:bg-white/80 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer" onclick="showToast('Etapa 2: En desarrollo en la metodología')">
<span class="material-symbols-outlined text-sm flex-shrink-0">tune</span>
<span class="truncate">Etapa 2: Evaluación &amp; Priorización</span>
</button>
<button class="px-3 py-2.5 rounded-xl text-[#5a4b56] hover:bg-white/80 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer" onclick="showToast('Etapa 3: En desarrollo en la metodología')">
<span class="material-symbols-outlined text-sm flex-shrink-0">architecture</span>
<span class="truncate">Etapa 3: Arquitectura &amp; Estimación</span>
</button>
<button class="px-3 py-2.5 rounded-xl text-[#5a4b56] hover:bg-white/80 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer" onclick="showToast('Etapa 4: En desarrollo en la metodología')">
<span class="material-symbols-outlined text-sm flex-shrink-0">rocket_launch</span>
<span class="truncate">Etapa 4: Entrega &amp; Valor Sostenible</span>
</button>
</div>
<!-- Sub-tabs Jugadas -->
<div class="bg-[#f2f2f2] p-3 rounded-2xl border border-[#e4d8e0] flex items-center justify-between gap-4">
<div class="flex items-center gap-3 flex-wrap">
<span class="text-xs font-bold text-[#bd4a96] uppercase tracking-wider pl-2 flex items-center gap-1.5">
<span class="material-symbols-outlined text-sm">play_circle</span> Jugada FASE 0:
                    </span>
<div class="flex flex-wrap gap-2">
<button class="px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#802973] shadow-sm border border-[#802973]/40 ring-2 ring-[#802973]/20 flex items-center gap-2 cursor-pointer">
<span class="">🏈</span> Jugada 1.1: Idea Formalizada 
                            <span class="w-2 h-2 rounded-full bg-[#d63489] animate-pulse"></span>
</button>
<button class="px-4 py-2 rounded-xl text-xs font-semibold text-[#5a4b56] hover:bg-white flex items-center gap-2 cursor-pointer" onclick="showToast('Próximamente: Jugada 1.2 en revisión técnica')">
<span class="">📋</span> Jugada 1.2: Idea Priorizada 
                            <span class="text-[10px] text-[#bd4a96] bg-[#f1b3d7]/50 px-2 py-0.5 rounded-full font-bold">Próxima</span>
</button>
</div>
</div>
</div>
</div>
<!-- Ficha de Jugada 1.1 Master Container -->
<div class="bg-gradient-to-br from-[#faf8f9] via-white to-[#f1b3d7]/30 rounded-[2rem] border-2 border-[#e87bba]/40 shadow-xl shadow-[#802973]/5 overflow-hidden p-6 md:p-8 space-y-6">
<!-- Header & Disparador con Escenarios Reactivos -->
<div class="rounded-3xl bg-gradient-to-br from-white via-[#faf8f9] to-[#f1b3d7]/20 border border-[#e4d8e0] p-6 md:p-8 shadow-sm space-y-6">
<div class="space-y-4 pb-4 border-b border-[#e4d8e0]">
<div class="flex items-center gap-2">
<span class="text-[10px] font-bold uppercase tracking-wider text-white bg-[#802973] px-2.5 py-0.5 rounded-full">Fase 0: Preproyecto</span>
</div>
<h3 class="font-headline text-2xl md:text-4xl font-extrabold text-[#241822]">Jugada 1.1: Idea Formalizada</h3>
<p class="text-xs md:text-sm text-[#5a4b56]">Da click en el escenario para conocer el paso a paso y la ruta táctica correspondiente.</p>
</div>
<!-- Disparador Box -->
<div class="rounded-2xl border-l-4 p-4 shadow-sm transition-all duration-300 bg-white border-l-[#802973]/40 border-[#e4d8e0]" id="trigger-container">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
<div class="lg:col-span-6 space-y-1.5">
<div class="flex items-center gap-2 flex-wrap">
<div class="w-7 h-7 rounded-lg flex items-center justify-center bg-[#f2f2f2] text-[#5a4b56]" id="trigger-icon-box">
<span class="material-symbols-outlined text-base" id="trigger-icon">policy</span>
</div>
<h4 class="font-headline font-semibold text-xs md:text-sm text-[#241822]">¿Cuándo ejecutar esta jugada? (Disparador)</h4>
<span class="px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide bg-[#f2f2f2] text-[#5a4b56]" id="active-escenario-tag">Sin Escenario Seleccionado</span>
</div>
<p class="text-[11px] md:text-xs text-[#5a4b56] leading-relaxed transition-opacity duration-200" id="trigger-desc-text">Inmediatamente cuando un líder funcional o área identifica una necesidad u oportunidad operativa y requiere estructurarla formalmente para evaluación estratégica preliminar.</p>
</div>
<div class="lg:col-span-6 flex items-center justify-start lg:justify-end gap-2 flex-wrap">
<button class="px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all text-xs font-semibold border-2 border-[#802973]/30 bg-[#f1b3d7]/30 text-[#802973] hover:bg-[#f1b3d7]/60 active:scale-95" id="escenario-card-1" onclick="selectEscenario(1)" type="button">
<span class="w-2 h-2 rounded-full bg-[#802973]"></span>
<span class="font-headline font-bold">Escenario</span>
<span class="text-[9px] px-1.5 py-0.5 rounded-full font-extrabold bg-[#f1b3d7] text-[#802973]">A</span>
</button>
<button class="px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all text-xs font-semibold border-2 border-[#fd6f21]/40 bg-[#ffe5d4]/40 text-[#c2410c] hover:bg-[#ffe5d4] active:scale-95" id="escenario-card-2" onclick="selectEscenario(2)" type="button">
<span class="w-2 h-2 rounded-full bg-[#fd6f21]"></span>
<span class="font-headline font-bold">Escenario</span>
<span class="text-[9px] px-1.5 py-0.5 rounded-full font-extrabold bg-[#fd6f21]/15 text-[#fd6f21]">B</span>
</button>
<button class="px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all text-xs font-semibold border-2 border-[#bd4a96]/40 bg-[#f8d5ea]/40 text-[#821564] hover:bg-[#f8d5ea] active:scale-95" id="escenario-card-3" onclick="selectEscenario(3)" type="button">
<span class="w-2 h-2 rounded-full bg-[#bd4a96]"></span>
<span class="font-headline font-bold">Escenario</span>
<span class="text-[9px] px-1.5 py-0.5 rounded-full font-extrabold bg-[#bd4a96]/15 text-[#bd4a96]">C</span>
</button>
</div>
</div>
</div>
<!-- Regla de Oro y Objetivos -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
<div class="md:col-span-8 flex flex-col gap-3 justify-between">
<div class="bg-white rounded-xl border-l-4 border-l-[#fd6f21] border border-[#e87bba]/30 px-3.5 py-2.5 shadow-sm flex items-center hover-lift">
<div class="flex items-center gap-3 w-full">
<div class="w-8 h-8 rounded-lg bg-[#f1b3d7]/30 flex items-center justify-center text-[#802973] flex-shrink-0">
<span class="material-symbols-outlined text-lg">workspace_premium</span>
</div>
<div class="space-y-0.5 flex-1">
<h4 class="font-headline font-bold text-[#802973] text-xs">Regla de Oro Inquebrantable</h4>
<p class="text-[#5a4b56] text-xs"><strong class="text-[#241822]">Ninguna iniciativa avanza</strong> sin su <a class="font-semibold text-[#bd4a96] underline underline-offset-2 hover:text-[#802973]" href="#plantillas-section" onclick="toggleTemplatesSection(true)">Canvas de 1 Página firmado</a> por Líder Funcional y Portfolio Manager.</p>
</div>
</div>
</div>
<div class="bg-white rounded-xl border border-[#e4d8e0] p-3 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover-lift">
<div class="flex items-center gap-2.5">
<div class="w-8 h-8 rounded-lg bg-[#f1b3d7]/40 text-[#802973] flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-lg">inbox</span>
</div>
<div>
<div class="flex items-center gap-2">
<span class="text-[10px] font-bold uppercase tracking-wider text-[#802973]">Insumos / Entradas requeridas</span>
<span class="text-[9px] bg-[#f1b3d7]/40 text-[#802973] font-bold px-1.5 py-0.5 rounded-full">Mandatorio</span>
</div>
<p class="text-xs text-[#5a4b56] mt-0.5">Idea original documentada, dolor de negocio o requerimiento de cumplimiento detectado.</p>
</div>
</div>
<div class="flex items-center gap-1.5 flex-shrink-0">
<span class="inline-flex items-center gap-1 text-[10px] font-semibold text-[#802973] bg-[#faf8f9] border border-[#e87bba]/30 px-2 py-1 rounded-lg cursor-pointer" onclick="showToast('Verificado: Validación Inicial requerida')"><span class="material-symbols-outlined text-xs text-[#bd4a96]">check</span> Validación Inicial</span>
<span class="inline-flex items-center gap-1 text-[10px] font-semibold text-[#802973] bg-[#faf8f9] border border-[#e87bba]/30 px-2 py-1 rounded-lg cursor-pointer" onclick="showToast('Brief Táctico disponible')"><span class="material-symbols-outlined text-xs text-[#bd4a96]">description</span> Brief Táctico</span>
</div>
</div>
</div>
<div class="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-2">
<div class="px-3 py-2 bg-white rounded-xl border border-[#e4d8e0] shadow-sm flex items-center justify-between hover-lift">
<div>
<span class="text-[9px] font-bold tracking-wider text-[#bd4a96] uppercase block">OBJETIVO (O)</span>
<div class="text-sm font-extrabold text-[#802973] mt-0.5">Alinear</div>
<p class="text-[10px] text-[#5a4b56]">A prioridades clave</p>
</div>
<span class="material-symbols-outlined text-lg text-[#802973]">flag</span>
</div>
<div class="px-3 py-2 bg-white rounded-xl border border-[#e4d8e0] shadow-sm flex items-center justify-between hover-lift">
<div>
<span class="text-[9px] font-bold tracking-wider text-[#bd4a96] uppercase block">KEY RESULT (KR)</span>
<div class="text-sm font-extrabold text-[#d63489] mt-0.5">100%</div>
<p class="text-[10px] text-[#5a4b56]">Ideas estructuradas</p>
</div>
<span class="material-symbols-outlined text-lg text-[#d63489]">trending_up</span>
</div>
</div>
</div>
</div>
<!-- Empty State Prompt (Visible cuando ningún escenario está activo) -->
<div class="p-8 md:p-10 rounded-3xl bg-white border-2 border-dashed border-[#e87bba]/60 flex flex-col items-center justify-center text-center space-y-3 shadow-sm transition-all" id="paso-empty-state">
<div class="w-14 h-14 rounded-2xl bg-[#f1b3d7]/30 text-[#802973] flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">ads_click</span>
</div>
<div class="max-w-md space-y-1">
<h5 class="font-headline font-bold text-base text-[#241822]">Selecciona un escenario arriba para desplegar el flujo de ejecución paso a paso</h5>
<p class="text-xs text-[#5a4b56] leading-relaxed">Haz clic en <strong>Escenario A, B o C</strong> en el bloque superior para activar la ruta metodológica y sincronizar los roles RACI correspondientes.</p>
</div>
<div class="flex items-center gap-2 text-[11px] font-semibold text-[#bd4a96] pt-1">
<span class="w-2 h-2 rounded-full bg-[#bd4a96] animate-ping"></span>
<span class="">3 rutas tácticas disponibles según el origen de la iniciativa</span>
</div>
</div>
<!-- Recorrido Táctico en 5 Pasos Interactivo (Oculto de inicio, aparece con animación) -->
<div class="space-y-4 transition-all duration-300 anim-fade-up hidden" id="paso-a-paso-section">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#802973] mb-1">
<span class="material-symbols-outlined text-sm text-[#bd4a96]">alt_route</span>
<span class="px-2.5 py-0.5 rounded-full bg-[#f1b3d7]/50 text-[#802973] font-bold text-[10px]" id="escenario-context-badge">Ruta Activa: Escenario B (Oportunidad Estratégica Top-Down)</span>
</div>
<h4 class="font-headline text-xl font-extrabold text-[#241822]">Paso a paso para la ejecución de la jugada</h4>
<p class="text-xs text-[#5a4b56]">Haz click en cada paso para ver el detalle operativo y la matriz RACI.</p>
</div>
<div class="flex items-center gap-2">
<span class="text-xs text-[#5a4b56]">¿Cambiar escenario?</span>
<button class="text-xs font-bold text-[#802973] hover:text-[#bd4a96] underline flex items-center gap-1 cursor-pointer transition-colors active:scale-95" onclick="selectEscenario(null)" type="button">
<span class="material-symbols-outlined text-xs">close</span> Deseleccionar
                        </button>
</div>
</div>
<!-- 5 Pasos Stepper Buttons -->
<div class="grid grid-cols-2 md:grid-cols-5 gap-3">
<button class="step-nav-btn text-left p-3.5 rounded-2xl bg-white border-2 border-[#802973] shadow-md transition-all relative overflow-hidden ring-2 ring-[#802973]/20 hover:scale-[1.02] active:scale-95 cursor-pointer" id="step-btn-1" onclick="setStep(1)">
<span class="px-2 py-0.5 rounded-lg bg-[#802973] text-white font-bold text-xs inline-block mb-2" id="step-pill-1">Paso 1</span>
<div class="font-headline font-bold text-xs text-[#241822]">Recepción de la Necesidad (Input)</div>
</button>
<button class="step-nav-btn text-left p-3.5 rounded-2xl bg-white border border-[#e87bba]/40 shadow-sm hover:border-[#bd4a96] hover:bg-[#faf8f9] hover:scale-[1.02] active:scale-95 transition-all relative overflow-hidden cursor-pointer" id="step-btn-2" onclick="setStep(2)">
<span class="px-2 py-0.5 rounded-lg bg-[#f2f2f2] text-[#5a4b56] font-bold text-xs inline-block mb-2" id="step-pill-2">Paso 2</span>
<div class="font-headline font-bold text-xs text-[#241822]">Evaluación Estratégica Inicial</div>
</button>
<button class="step-nav-btn text-left p-3.5 rounded-2xl bg-white border border-[#e87bba]/40 shadow-sm hover:border-[#bd4a96] hover:bg-[#faf8f9] hover:scale-[1.02] active:scale-95 transition-all relative overflow-hidden cursor-pointer" id="step-btn-3" onclick="setStep(3)">
<span class="px-2 py-0.5 rounded-lg bg-[#f2f2f2] text-[#5a4b56] font-bold text-xs inline-block mb-2" id="step-pill-3">Paso 3</span>
<div class="font-headline font-bold text-xs text-[#241822]">Estructuración del Entregable</div>
</button>
<button class="step-nav-btn text-left p-3.5 rounded-2xl bg-white border border-[#e87bba]/40 shadow-sm hover:border-[#bd4a96] hover:bg-[#faf8f9] hover:scale-[1.02] active:scale-95 transition-all relative overflow-hidden cursor-pointer" id="step-btn-4" onclick="setStep(4)">
<span class="px-2 py-0.5 rounded-lg bg-[#f2f2f2] text-[#5a4b56] font-bold text-xs inline-block mb-2" id="step-pill-4">Paso 4</span>
<div class="font-headline font-bold text-xs text-[#241822]">Validación de Formalización</div>
</button>
<button class="step-nav-btn text-left p-3.5 rounded-2xl bg-white border border-[#e87bba]/40 shadow-sm hover:border-[#bd4a96] hover:bg-[#faf8f9] hover:scale-[1.02] active:scale-95 transition-all relative overflow-hidden cursor-pointer" id="step-btn-5" onclick="setStep(5)">
<span class="px-2 py-0.5 rounded-lg bg-[#f2f2f2] text-[#5a4b56] font-bold text-xs inline-block mb-2" id="step-pill-5">Paso 5</span>
<div class="font-headline font-bold text-xs text-[#241822]">Dictamen de Viabilidad</div>
</button>
</div>
<!-- Detalle Operativo & Matriz RACI Sincronizados -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
<!-- Cuadrante Izquierdo: Detalle Operativo -->
<div class="bg-white rounded-3xl p-6 md:p-7 border border-[#e4d8e0] shadow-sm flex flex-col justify-between space-y-6">
<div class="space-y-4">
<div class="flex items-center justify-between gap-4 pb-3 border-b border-[#e4d8e0]">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-2xl bg-[#f1b3d7]/50 text-[#802973] flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-xl">tune</span>
</div>
<div>
<h5 class="font-headline font-bold text-base md:text-lg text-[#241822] leading-tight">Detalle Operativo</h5>
<p class="text-xs text-[#5a4b56]">Flujo táctico y actividades</p>
</div>
</div>
<span class="px-2.5 py-1 rounded-xl bg-[#faf8f9] border border-[#e4d8e0] text-[#802973] font-bold text-xs flex items-center gap-1" id="step-active-duration"><span class="material-symbols-outlined text-sm">schedule</span> Duración: 45 min</span>
</div>
<div class="space-y-3 text-xs md:text-sm leading-relaxed" id="step-active-desc">
<p class="text-[#5a4b56] transition-opacity duration-200" id="step-context-p1">El Líder Funcional detecta la necesidad o dolor operativo y coordina con el Portafolio Manager la sesión de descubrimiento inicial de 45 minutos para formalizar el Canvas de 1 Página.</p>
<p class="text-[#802973] font-semibold transition-opacity duration-200" id="step-context-p2">El BP/BA facilita la sesión y extrae los dolores estratégicos cuantitativos y cualitativos preliminares.</p>
</div>
</div>
<div class="pt-2">
<div class="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-[#e87bba]/40 shadow-xs hover:border-[#802973] transition-all cursor-pointer" onclick="showToast('Entregable oficial disponible')">
<span class="material-symbols-outlined text-base text-[#d63489]" id="step-deliverable-icon">description</span>
<span class="text-xs text-[#5a4b56]" id="step-deliverable-text"><strong class="text-[#241822]">Entregable:</strong> Canvas de 1 Página (Borrador Inicial)</span>
</div>
</div>
</div>
<!-- Cuadrante Derecho: Matriz RACI con Tooltip Flotante Enriquecido -->
<div class="bg-white rounded-3xl p-6 md:p-7 border border-[#e4d8e0] shadow-sm flex flex-col justify-between space-y-6">
<div>
<div class="flex items-center justify-between gap-4 pb-3 border-b border-[#e4d8e0]">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-2xl bg-[#f1b3d7]/30 text-[#802973] flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-2xl text-[#802973]">group</span>
</div>
<div>
<h5 class="font-headline font-bold text-base md:text-lg text-[#241822] leading-tight">¿Quién participa?</h5>
<p class="text-xs text-[#5a4b56]">Pasa el cursor por cada badge para ver rol y acción</p>
</div>
</div>
<div class="flex items-center gap-2 flex-wrap"><span class="px-2 py-0.5 rounded-lg bg-[#f1b3d7]/40 text-[#802973] text-[10px] font-bold" id="step-raci-badge">Sincronizado con Paso 1</span><button class="px-2.5 py-1 rounded-lg bg-white border border-[#e87bba]/40 text-[#802973] hover:bg-[#f1b3d7]/30 text-[10px] font-bold flex items-center gap-1 shadow-xs cursor-pointer transition-all active:scale-95" onclick="openRaciConfigModal()" type="button"><span class="material-symbols-outlined text-xs text-[#bd4a96]">settings</span> Configurar Participantes RACI</button></div>
</div>
<div class="grid grid-cols-4 gap-3 pt-5" id="raci-matrix-grid">
<div class="rounded-2xl border border-[#e4d8e0] bg-[#faf8f9] p-3 text-center flex flex-col items-center gap-2" id="raci-col-r">
<div class="border-b border-[#e4d8e0] pb-1 w-full">
<span class="block font-headline font-bold text-sm text-[#802973]">R</span>
<span class="block text-[9px] font-bold text-[#5a4b56] uppercase tracking-wider">Responsable</span>
</div>
<div class="w-full space-y-2 pt-1" id="raci-items-r">
                <div class="raci-badge py-1.5 px-2 rounded-xl bg-[#802973] text-white hover:ring-2 hover:ring-[#802973]/50 text-xs font-bold shadow-xs flex items-center justify-center gap-1 cursor-pointer transition-transform duration-200" tabindex="0" data-role="LF" data-raci="r" onmouseenter="showRaciTooltip(event, 'LF', 'r')" onmouseleave="hideRaciTooltip()" onfocus="showRaciTooltip(event, 'LF', 'r')" onblur="hideRaciTooltip()" onclick="handleRaciClick('LF', 'r')">
                    <span>• LF</span>
                    <span class="material-symbols-outlined text-[11px] opacity-70">info</span>
                </div>
            
                <div class="raci-badge py-1.5 px-2 rounded-xl bg-[#802973] text-white hover:ring-2 hover:ring-[#802973]/50 text-xs font-bold shadow-xs flex items-center justify-center gap-1 cursor-pointer transition-transform duration-200" tabindex="0" data-role="BP" data-raci="r" onmouseenter="showRaciTooltip(event, 'BP', 'r')" onmouseleave="hideRaciTooltip()" onfocus="showRaciTooltip(event, 'BP', 'r')" onblur="hideRaciTooltip()" onclick="handleRaciClick('BP', 'r')">
                    <span>• BP</span>
                    <span class="material-symbols-outlined text-[11px] opacity-70">info</span>
                </div>
            </div>
</div>
<div class="rounded-2xl border border-[#e4d8e0] bg-[#faf8f9] p-3 text-center flex flex-col items-center gap-2" id="raci-col-a">
<div class="border-b border-[#e4d8e0] pb-1 w-full">
<span class="block font-headline font-bold text-sm text-[#bd4a96]">A</span>
<span class="block text-[9px] font-bold text-[#5a4b56] uppercase tracking-wider">Aprobador</span>
</div>
<div class="w-full space-y-2 pt-1" id="raci-items-a">
                <div class="raci-badge py-1.5 px-2 rounded-xl bg-[#e87bba]/40 text-[#802973] hover:ring-2 hover:ring-[#bd4a96]/50 text-xs font-bold shadow-xs flex items-center justify-center gap-1 cursor-pointer transition-transform duration-200" tabindex="0" data-role="PM" data-raci="a" onmouseenter="showRaciTooltip(event, 'PM', 'a')" onmouseleave="hideRaciTooltip()" onfocus="showRaciTooltip(event, 'PM', 'a')" onblur="hideRaciTooltip()" onclick="handleRaciClick('PM', 'a')">
                    <span>• PM</span>
                    <span class="material-symbols-outlined text-[11px] opacity-70">info</span>
                </div>
            </div>
</div>
<div class="rounded-2xl border border-[#e4d8e0] bg-[#faf8f9] p-3 text-center flex flex-col items-center gap-2" id="raci-col-c">
<div class="border-b border-[#e4d8e0] pb-1 w-full">
<span class="block font-headline font-bold text-sm text-[#d63489]">C</span>
<span class="block text-[9px] font-bold text-[#5a4b56] uppercase tracking-wider">Consultado</span>
</div>
<div class="w-full space-y-2 pt-1" id="raci-items-c">
                <div class="raci-badge py-1.5 px-2 rounded-xl bg-[#f1b3d7]/50 text-[#d63489] hover:ring-2 hover:ring-[#d63489]/50 text-xs font-bold shadow-xs flex items-center justify-center gap-1 cursor-pointer transition-transform duration-200" tabindex="0" data-role="AR" data-raci="c" onmouseenter="showRaciTooltip(event, 'AR', 'c')" onmouseleave="hideRaciTooltip()" onfocus="showRaciTooltip(event, 'AR', 'c')" onblur="hideRaciTooltip()" onclick="handleRaciClick('AR', 'c')">
                    <span>• AR</span>
                    <span class="material-symbols-outlined text-[11px] opacity-70">info</span>
                </div>
            </div>
</div>
<div class="rounded-2xl border border-[#e4d8e0] bg-[#faf8f9] p-3 text-center flex flex-col items-center gap-2" id="raci-col-i">
<div class="border-b border-[#e4d8e0] pb-1 w-full">
<span class="block font-headline font-bold text-sm text-[#5a4b56]">I</span>
<span class="block text-[9px] font-bold text-[#5a4b56] uppercase tracking-wider">Informado</span>
</div>
<div class="w-full space-y-2 pt-1" id="raci-items-i">
                <div class="raci-badge py-1.5 px-2 rounded-xl bg-[#e4d8e0] text-[#5a4b56] hover:ring-2 hover:ring-[#5a4b56]/40 text-xs font-bold shadow-xs flex items-center justify-center gap-1 cursor-pointer transition-transform duration-200" tabindex="0" data-role="SE" data-raci="i" onmouseenter="showRaciTooltip(event, 'SE', 'i')" onmouseleave="hideRaciTooltip()" onfocus="showRaciTooltip(event, 'SE', 'i')" onblur="hideRaciTooltip()" onclick="handleRaciClick('SE', 'i')">
                    <span>• SE</span>
                    <span class="material-symbols-outlined text-[11px] opacity-70">info</span>
                </div>
            </div>
</div>
</div>
</div>
<div class="p-3 rounded-2xl bg-[#f1b3d7]/30 border border-[#e87bba]/30 flex items-center gap-3">
<span class="material-symbols-outlined text-lg text-[#802973] flex-shrink-0">info</span>
<p class="text-xs text-[#5a4b56]"><strong class="text-[#802973]" id="raci-focus-note">Foco RACI en Paso 1: LF y BP lideran la formulación del problema y la necesidad original.</strong></p>
</div>
</div>
</div>
</div>
<!-- Aceleradores e Insumos -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="bg-[#faf8f9] p-5 rounded-3xl border border-[#e4d8e0] space-y-3 shadow-sm hover-lift">
<div class="flex items-center gap-2 text-[#802973] font-headline font-bold text-sm mb-1">
<span class="material-symbols-outlined text-base text-[#bd4a96]">speed</span> Aceleradores e Insumos
                    </div>
<p class="text-xs text-[#5a4b56]">Un acelerador es un rol o proceso que facilita la ejecución eficiente de cada jugada para agilizar el avance de las iniciativas.</p>
<div class="space-y-2">
<div class="p-3 bg-white rounded-2xl border border-[#e4d8e0] shadow-sm hover:border-[#bd4a96]/40 transition-colors cursor-pointer" onclick="showToast('Acelerador Rol: Portafolio Manager &amp; BP/BA')">
<span class="text-[10px] font-bold uppercase tracking-wider text-[#802973] block mb-0.5">Aceleradores rol</span>
<p class="text-xs text-[#5a4b56] font-medium">Portafolio Manager, BP/BA asignado</p>
</div>
<div class="p-3 bg-white rounded-2xl border border-[#e4d8e0] shadow-sm hover:border-[#bd4a96]/40 transition-colors cursor-pointer" onclick="showToast('Proceso de priorización institucional')">
<span class="text-[10px] font-bold uppercase tracking-wider text-[#bd4a96] block mb-0.5">Procesos</span>
<p class="text-xs text-[#5a4b56] font-medium">Proceso de priorización.</p>
</div>
</div>
</div>
<div class="bg-[#faf8f9] p-5 rounded-3xl border border-[#e4d8e0] space-y-3 shadow-sm hover-lift">
<div>
<div class="flex items-center gap-2 text-[#802973] font-headline font-bold text-sm mb-2">
<span class="material-symbols-outlined text-base text-[#bd4a96]">folder_special</span> Templates de Jugadas
                        </div>
<p class="text-xs text-[#5a4b56] mb-2">Artefactos operativos y formatos oficiales requeridos:</p>
<div class="flex flex-wrap gap-2">
<button class="px-3 py-1.5 rounded-xl bg-white border border-[#e87bba]/40 text-[#802973] text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-[#f1b3d7]/30 transition-all active:scale-95 cursor-pointer" onclick="showToast('Descargando Canvas de 1 Página (.docx)', 'download')" type="button">
<span class="material-symbols-outlined text-sm text-[#bd4a96]">description</span> Canvas de 1 Página (.docx)
                            </button>
<button class="px-3 py-1.5 rounded-xl bg-white border border-[#e87bba]/40 text-[#802973] text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-[#f1b3d7]/30 transition-all active:scale-95 cursor-pointer" onclick="showToast('Descargando Matriz RACI &amp; Roles', 'download')" type="button">
<span class="material-symbols-outlined text-sm text-[#bd4a96]">table_chart</span> Matriz RACI &amp; Roles
                            </button>
</div>
</div>
<div class="pt-3 border-t border-[#e4d8e0]">
<div class="flex items-center gap-2 text-[#802973] font-headline font-bold text-sm mb-1.5">
<span class="material-symbols-outlined text-base text-[#bd4a96]">policy</span> Políticas y Procesos Asociados
                        </div>
<div class="flex flex-wrap gap-2">
<span class="px-2.5 py-1 rounded-xl bg-white border border-[#e87bba]/40 text-[#802973] text-[11px] font-bold flex items-center gap-1.5 shadow-sm cursor-pointer" onclick="showToast('Consultando Pol_Gestión Portafolio TI...')"><span class="material-symbols-outlined text-xs text-[#bd4a96]">verified_user</span> Pol_Gestión Portafolio TI</span>
<span class="px-2.5 py-1 rounded-xl bg-white border border-[#e87bba]/40 text-[#802973] text-[11px] font-bold flex items-center gap-1.5 shadow-sm cursor-pointer" onclick="showToast('Consultando Proceso Fase 0 &amp; 1...')"><span class="material-symbols-outlined text-xs text-[#bd4a96]">fact_check</span> Proceso Fase 0 &amp; 1</span>
</div>
</div>
</div>
</div>
<!-- Pro-Tip vs Trampa Común -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="p-6 rounded-3xl bg-gradient-to-br from-[#f1b3d7]/30 to-white border border-[#e87bba]/40 shadow-sm hover-lift">
<div class="flex items-center gap-3 mb-2.5">
<div class="w-9 h-9 rounded-2xl bg-[#f1b3d7] text-[#802973] flex items-center justify-center text-lg">💡</div>
<h5 class="font-headline font-bold text-base text-[#802973]">Pro-Tip: Agilidad sobre Perfección</h5>
</div>
<p class="text-xs text-[#5a4b56] leading-relaxed">
<strong>No redactes un Business Case exhaustivo de 30 páginas en este momento.</strong> El propósito del Canvas de 1 Página es dar evidencia suficiente al Portafolio Manager para responder una sola pregunta: <em>¿Vale la pena invertir tiempo en evaluarla a fondo?</em>
</p>
</div>
<div class="p-6 rounded-3xl bg-gradient-to-br from-[#fd6f21]/10 to-white border border-[#fd6f21]/30 shadow-sm hover-lift">
<div class="flex items-center gap-3 mb-2.5">
<div class="w-9 h-9 rounded-2xl bg-[#fd6f21]/20 text-[#fd6f21] flex items-center justify-center">
<span class="material-symbols-outlined text-xl text-[#fd6f21]">warning</span>
</div>
<h5 class="font-headline font-bold text-base text-[#241822]">Trampa Común: Parálisis por Análisis Técnico</h5>
</div>
<p class="text-xs text-[#5a4b56] leading-relaxed">
                        Evita involucrar a comités técnicos multitudinarios en esta fase. Si invitas a múltiples arquitectos e ingenieros antes de formalizar estratégicamente la idea, gastarás horas hombre debatiendo soluciones para problemas no prioritarios.
                    </p>
</div>
</div>
<!-- Banner Siguiente Jugada -->
<div class="bg-gradient-to-r from-[#802973] via-[#bd4a96] to-[#d63489] rounded-2xl p-5 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
<div>
<span class="text-[10px] font-bold uppercase tracking-wider text-[#f1b3d7] block mb-1">Siguiente Jugada en el Pipeline</span>
<h5 class="font-headline font-bold text-base md:text-lg">¿Qué ocurre una vez formalizada la idea?</h5>
<p class="text-xs text-white/80 max-w-xl">El Canvas firmado ingresa directamente a la Jugada 1.2: Idea Priorizada, donde el Comité evalúa su scoring estratégico.</p>
</div>
<button class="px-5 py-2.5 bg-white text-[#802973] hover:bg-[#f1b3d7] font-bold text-xs rounded-xl shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 flex-shrink-0 shimmer-active cursor-pointer" onclick="showToast('Explorando Jugada 1.2...', 'rocket_launch')">
                    EXPLORAR JUGADA 1.2 <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</section>
<!-- Scoring y Retroalimentación Section (5 Estrellas Interactivas) -->
<div class="p-6 md:p-7 rounded-3xl bg-[#faf8f9] border border-[#e4d8e0] shadow-sm space-y-4 hover-lift">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-[#e4d8e0]">
<div>
<div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#802973] mb-1">
<span class="material-symbols-outlined text-base text-[#bd4a96]">rate_review</span>
<span class="">Mejora Continua</span>
</div>
<h4 class="font-headline text-xl font-extrabold text-[#241822]">Evaluación &amp; Scoring de la Jugada</h4>
<p class="text-xs text-[#5a4b56] max-w-2xl mt-0.5">Califica la efectividad, aplicabilidad y claridad de esta jugada para retroalimentar el proceso metodológico de la VRO.</p>
</div>
<div class="flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl border border-[#e4d8e0] shadow-sm">
<span class="px-2.5 py-1 rounded-xl bg-[#f1b3d7] text-[#802973] font-extrabold text-sm" id="score-badge">5.0</span>
<span class="text-[10px] font-bold text-[#5a4b56] uppercase tracking-wider" id="score-text-status">SCORE GENERAL • MADUREZ ÓPTIMA</span>
</div>
</div>
<div class="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#e4d8e0]">
<span class="text-xs font-bold text-[#241822]">¿Qué tan clara y accionable te resultó esta guía táctica?</span>
<div class="flex items-center gap-1.5" id="interactive-scoring-stars">
<button class="star-btn text-[#d63489] p-1 cursor-pointer transition-transform" onclick="rateStars(1)" onmouseenter="previewStars(1)" onmouseleave="restoreStars()" type="button"><span class="material-symbols-outlined text-2xl" style="font-variation-settings: &quot;FILL&quot; 1;">star</span></button>
<button class="star-btn text-[#d63489] p-1 cursor-pointer transition-transform" onclick="rateStars(2)" onmouseenter="previewStars(2)" onmouseleave="restoreStars()" type="button"><span class="material-symbols-outlined text-2xl" style="font-variation-settings: &quot;FILL&quot; 1;">star</span></button>
<button class="star-btn text-[#d63489] p-1 cursor-pointer transition-transform" onclick="rateStars(3)" onmouseenter="previewStars(3)" onmouseleave="restoreStars()" type="button"><span class="material-symbols-outlined text-2xl" style="font-variation-settings: &quot;FILL&quot; 1;">star</span></button>
<button class="star-btn text-[#d63489] p-1 cursor-pointer transition-transform" onclick="rateStars(4)" onmouseenter="previewStars(4)" onmouseleave="restoreStars()" type="button"><span class="material-symbols-outlined text-2xl" style="font-variation-settings: &quot;FILL&quot; 1;">star</span></button>
<button class="star-btn text-[#d63489] p-1 cursor-pointer transition-transform" onclick="rateStars(5)" onmouseenter="previewStars(5)" onmouseleave="restoreStars()" type="button"><span class="material-symbols-outlined text-2xl" style="font-variation-settings: &quot;FILL&quot; 1;">star</span></button>
</div>
</div>
</div>
<!-- Plantillas de Autor Desplegables Section -->
<section class="scroll-mt-24 mb-6" id="plantillas-section">
<div class="rounded-3xl bg-white border border-[#e4d8e0] shadow-sm overflow-hidden transition-all duration-300">
<button class="w-full p-6 flex items-center justify-between text-left hover:bg-[#faf8f9] transition-colors cursor-pointer" onclick="toggleTemplatesSection()" type="button">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-2xl bg-[#f1b3d7]/40 text-[#802973] flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-2xl">folder_zip</span>
</div>
<div>
<h4 class="font-headline font-bold text-lg text-[#241822]">Plantillas de Autor y Artefactos Oficiales</h4>
<p class="text-xs text-[#5a4b56]">Accede y descarga los artefactos estandarizados de la Oficina de Proyectos VRO</p>
</div>
</div>
<div class="flex items-center gap-3">
<span class="text-xs font-bold text-[#802973] hidden sm:inline" id="accordion-toggle-label">Mostrar Plantillas</span>
<div class="w-8 h-8 rounded-full bg-[#f2f2f2] flex items-center justify-center text-[#802973] transition-transform duration-300" id="templates-chevron" style="transform: rotate(0deg);">
<span class="material-symbols-outlined text-lg">expand_more</span>
</div>
</div>
</button>
<div class="hidden border-t border-[#e4d8e0] bg-[#faf8f9] p-6 transition-all duration-300" id="templates-content">
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<div class="bg-white p-4 rounded-2xl border border-[#e4d8e0] shadow-sm flex flex-col justify-between space-y-3 hover-lift">
<div class="space-y-1.5">
<div class="w-8 h-8 rounded-xl bg-[#f1b3d7]/30 text-[#802973] flex items-center justify-center">
<span class="material-symbols-outlined text-lg">description</span>
</div>
<h5 class="font-headline font-bold text-sm text-[#241822]">Canvas de 1 Página (VRO Official)</h5>
<p class="text-xs text-[#5a4b56] leading-relaxed">Formato estructurado para la formulación inicial de iniciativas y justificación.</p>
</div>
<div class="pt-2 flex items-center justify-between border-t border-[#f2f2f2]">
<span class="text-[10px] text-[#5a4b56] font-semibold">DOCX • 240 KB</span>
<button class="px-3 py-1.5 bg-[#802973] text-white hover:bg-[#bd4a96] text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 flex items-center gap-1 cursor-pointer" onclick="showToast('Descargando Canvas de 1 Página Oficial (.docx)', 'download')">
<span class="material-symbols-outlined text-xs">download</span> Descargar
                            </button>
</div>
</div>
<div class="bg-white p-4 rounded-2xl border border-[#e4d8e0] shadow-sm flex flex-col justify-between space-y-3 hover-lift">
<div class="space-y-1.5">
<div class="w-8 h-8 rounded-xl bg-[#f1b3d7]/30 text-[#802973] flex items-center justify-center">
<span class="material-symbols-outlined text-lg">table_chart</span>
</div>
<h5 class="font-headline font-bold text-sm text-[#241822]">Matriz RACI Institucional</h5>
<p class="text-xs text-[#5a4b56] leading-relaxed">Matriz operativa de responsabilidades cruzadas con roles LF, BP, PM, AR y SE.</p>
</div>
<div class="pt-2 flex items-center justify-between border-t border-[#f2f2f2]">
<span class="text-[10px] text-[#5a4b56] font-semibold">XLSX • 180 KB</span>
<button class="px-3 py-1.5 bg-[#802973] text-white hover:bg-[#bd4a96] text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 flex items-center gap-1 cursor-pointer" onclick="showToast('Descargando Matriz RACI Institucional (.xlsx)', 'download')">
<span class="material-symbols-outlined text-xs">download</span> Descargar
                            </button>
</div>
</div>
<div class="bg-white p-4 rounded-2xl border border-[#e4d8e0] shadow-sm flex flex-col justify-between space-y-3 hover-lift">
<div class="space-y-1.5">
<div class="w-8 h-8 rounded-xl bg-[#fd6f21]/20 text-[#fd6f21] flex items-center justify-center">
<span class="material-symbols-outlined text-lg">assessment</span>
</div>
<h5 class="font-headline font-bold text-sm text-[#241822]">Scorecard de Priorización VRO</h5>
<p class="text-xs text-[#5a4b56] leading-relaxed">Plantilla ponderada con algoritmos de priorización estratégica y ROI.</p>
</div>
<div class="pt-2 flex items-center justify-between border-t border-[#f2f2f2]">
<span class="text-[10px] text-[#5a4b56] font-semibold">XLSX • 320 KB</span>
<button class="px-3 py-1.5 bg-[#802973] text-white hover:bg-[#bd4a96] text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95 flex items-center gap-1 cursor-pointer" onclick="showToast('Descargando Scorecard de Priorización (.xlsx)', 'download')">
<span class="material-symbols-outlined text-xs">download</span> Descargar
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-[#131b2e] text-white py-12 px-8 border-t border-white/10 mt-12">
<div class="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/60">
<div>
<div class="flex items-center gap-2 text-white font-bold mb-1">
<span class="w-2 h-2 rounded-full bg-[#d63489] inline-block"></span>SITE VRO
            </div>
<p class="">© 2026 Playbook VRO. La estrategia en movimiento, el valor en cada jugada.</p>
</div>
<div class="flex items-center gap-6">
<a class="hover:text-white transition-colors" href="#">Contacto</a>
<a class="hover:text-white transition-colors" href="#">LinkedIn</a>
<a class="hover:text-white transition-colors" href="#">Términos</a>
<a class="hover:text-white transition-colors" href="#">Privacidad</a>
</div>
</div>
</footer><script>
let currentProfileMode = 'viewer';
let isEditingInline = false;

function switchProfileMode(mode) {
    currentProfileMode = mode;
    const btnViewer = document.getElementById('btn-mode-viewer');
    const btnEditor = document.getElementById('btn-mode-editor');
    const statusText = document.getElementById('mode-status-text');
    const btnNew = document.getElementById('btn-new-jugada');
    const btnPublish = document.getElementById('btn-publish-jugada');
    const editorStrip = document.getElementById('editor-actions-strip');

    if (mode === 'editor') {
        if (btnViewer) {
            btnViewer.className = 'px-3.5 py-2 rounded-xl text-xs font-semibold text-[#5a4b56] hover:bg-white/80 transition-all flex items-center gap-1.5 cursor-pointer';
        }
        if (btnEditor) {
            btnEditor.className = 'px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer bg-white text-[#802973] shadow-sm border border-[#802973]/30';
        }
        if (statusText) statusText.textContent = '✏️ Modo Editor Activo (Borrador)';
        if (btnNew) btnNew.classList.remove('hidden');
        if (btnPublish) btnPublish.classList.remove('hidden');
        if (editorStrip) editorStrip.classList.remove('hidden');
        showToast('Modo Editor (PMO Admin) activado', 'edit_document');
    } else {
        if (btnViewer) {
            btnViewer.className = 'px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer bg-white text-[#802973] shadow-sm';
        }
        if (btnEditor) {
            btnEditor.className = 'px-3.5 py-2 rounded-xl text-xs font-semibold text-[#5a4b56] hover:bg-white/80 transition-all flex items-center gap-1.5 cursor-pointer';
        }
        if (statusText) statusText.textContent = '🟢 Versión Oficial Publicada';
        if (btnNew) btnNew.classList.add('hidden');
        if (btnPublish) btnPublish.classList.add('hidden');
        if (editorStrip) editorStrip.classList.add('hidden');
        if (isEditingInline) toggleInlineEditMode(false);
        showToast('Perfil General (Visualizador) activado', 'visibility');
    }
}

function toggleInlineEditMode(forceState) {
    isEditingInline = forceState !== undefined ? forceState : !isEditingInline;
    const label = document.getElementById('toggle-edit-label');
    const btn = document.getElementById('btn-toggle-edit-mode');
    const editableIds = ['trigger-desc-text', 'step-context-p1', 'step-context-p2', 'step-deliverable-text'];
    
    editableIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.contentEditable = isEditingInline ? 'true' : 'false';
            if (isEditingInline) {
                el.classList.add('ring-2', 'ring-[#bd4a96]/40', 'rounded-lg', 'p-1', 'bg-[#f1b3d7]/15');
            } else {
                el.classList.remove('ring-2', 'ring-[#bd4a96]/40', 'rounded-lg', 'p-1', 'bg-[#f1b3d7]/15');
            }
        }
    });

    if (label) label.textContent = isEditingInline ? 'Finalizar Edición Ficha' : 'Editar Ficha Actual';
    if (btn) {
        if (isEditingInline) {
            btn.className = 'px-2.5 py-1.5 rounded-xl bg-[#802973] text-white font-bold transition-all flex items-center gap-1 cursor-pointer';
        } else {
            btn.className = 'px-2.5 py-1.5 rounded-xl bg-[#f1b3d7]/40 text-[#802973] font-bold hover:bg-[#f1b3d7]/70 transition-all flex items-center gap-1 cursor-pointer';
        }
    }
    showToast(isEditingInline ? 'Campos editables activados en la ficha' : 'Edición en línea guardada en memoria', isEditingInline ? 'edit' : 'save');
}

function openNewJugadaModal() {
    const title = prompt('Nombre o número de la nueva jugada (ej. Jugada 1.3: Kickoff Operativo):', 'Jugada 1.3: Kickoff Operativo');
    if (title) {
        showToast(`Nueva jugada "${title}" creada en borrador`, 'add_circle');
    }
}

function addScenarioInteractive() {
    const newLetter = prompt('Código o letra del nuevo escenario (ej. Escenario D):', 'Escenario D');
    if (newLetter) {
        showToast(`Escenario "${newLetter}" agregado con éxito a la ficha`, 'alt_route');
    }
}

function addStepInteractive() {
    const stepName = prompt('Nombre del nuevo paso táctico:', 'Paso 6: Validación de Cierre');
    if (stepName) {
        showToast(`Paso agregado al flujo: "${stepName}"`, 'playlist_add');
    }
}

function removeStepInteractive() {
    const confirmDel = confirm('¿Deseas remover el último paso del flujo táctico?');
    if (confirmDel) {
        showToast('Paso eliminado del flujo en borrador', 'delete');
    }
}

function attachDocumentLinkInteractive() {
    const url = prompt('Ingresa la URL o identificador del artefacto oficial:', 'https://sharepoint.vro/plantillas/canvas.docx');
    if (url) {
        showToast('Enlace documental vinculado a la jugada', 'link');
    }
}

function editRaciParticipantsInteractive() {
    const roles = prompt('Roles sugeridos separados por coma (ej. LF, BP, PM, AR, SE):', 'LF, BP, PM, AR, SE');
    if (roles) {
        showToast(`Matriz RACI actualizada con: ${roles}`, 'group');
    }
}

function publishPlaybookChanges() {
    const confirmPublish = confirm('¿Deseas publicar oficialmente las modificaciones en el Playbook VRO?');
    if (confirmPublish) {
        if (isEditingInline) toggleInlineEditMode(false);
        switchProfileMode('viewer');
        showToast('🚀 ¡Jugada publicada exitosamente en el repositorio institucional!', 'verified');
    }
}
</script>
<script>
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
</script>




<script>
const defaultRoleDefinitions = {
    LF: { title: 'LF • Líder Funcional', subtitle: 'Sponsor Promotor / Dueño del Dolor', colorClass: 'from-[#802973] to-[#bd4a96]', person: 'Mariana Salazar', email: 'mariana.salazar@vro-latam.com', roleDesc: 'Dueño del dolor funcional' },
    BP: { title: 'BP • Business Partner / Analyst', subtitle: 'Facilitador de Negocio y Estrategia', colorClass: 'from-[#bd4a96] to-[#d63489]', person: 'Carlos Mendoza', email: 'carlos.mendoza@vro-latam.com', roleDesc: 'Facilitador de valor' },
    PM: { title: 'PM • Portafolio Manager VRO', subtitle: 'Custodio de la Gobernanza y Cartera', colorClass: 'from-[#802973] to-[#51134a]', person: 'Valeria Castro', email: 'valeria.castro@vro-latam.com', roleDesc: 'Gestora de Cartera PMO' },
    AR: { title: 'AR • Arquitectura & Solución', subtitle: 'Factibilidad Técnica y TI', colorClass: 'from-[#d63489] to-[#802973]', person: 'Ing. Alejandro Silva', email: 'alejandro.silva@vro-latam.com', roleDesc: 'Arquitecto de Solución' },
    SE: { title: 'SE • Sponsor Ejecutivo / RFx', subtitle: 'Dirección Estratégica & Cartera Senior', colorClass: 'from-[#5a4b56] to-[#241822]', person: 'Eduardo Morales', email: 'eduardo.morales@vro-latam.com', roleDesc: 'Director / Patrocinador' },
    ET: { title: 'ET • Equipo Técnico & Delivery', subtitle: 'Líderes de Squad & Especialistas', colorClass: 'from-[#bd4a96] to-[#fd6f21]', person: 'Squad Core Delivery', email: 'delivery.squad@vro-latam.com', roleDesc: 'Equipo de Ejecución' }
};

if (typeof roleDefinitions !== 'undefined') {
    Object.keys(defaultRoleDefinitions).forEach(k => {
        if (roleDefinitions[k]) {
            roleDefinitions[k].person = roleDefinitions[k].person || defaultRoleDefinitions[k].person;
            roleDefinitions[k].email = roleDefinitions[k].email || defaultRoleDefinitions[k].email;
            roleDefinitions[k].roleDesc = roleDefinitions[k].roleDesc || defaultRoleDefinitions[k].roleDesc;
        } else {
            roleDefinitions[k] = Object.assign({}, defaultRoleDefinitions[k]);
        }
    });
}

function renderRaciRolesForm() {
    const list = document.getElementById('raci-roles-form-list');
    if (!list) return;
    let html = '';
    Object.keys(roleDefinitions).forEach(code => {
        const role = roleDefinitions[code];
        html += `
            <div class="p-3.5 rounded-2xl bg-white border border-[#e4d8e0] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-3 hover:border-[#bd4a96]/40 transition-colors">
                <div class="flex items-center gap-3 w-full md:w-52 flex-shrink-0">
                    <div class="w-9 h-9 rounded-xl bg-gradient-to-br ${role.colorClass || 'from-[#802973] to-[#bd4a96]'} text-white font-headline font-black text-xs flex items-center justify-center shadow-xs flex-shrink-0">${code}</div>
                    <div class="min-w-0">
                        <span class="font-headline font-bold text-xs text-[#241822] block truncate">${role.title}</span>
                        <span class="text-[10px] text-[#5a4b56] block truncate">${role.subtitle}</span>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full flex-1">
                    <div>
                        <label class="text-[9px] font-bold text-[#802973] uppercase tracking-wide block mb-0.5">Persona Asignada</label>
                        <input type="text" class="w-full px-2.5 py-1.5 text-xs rounded-xl border border-[#e4d8e0] bg-[#faf8f9] focus:bg-white focus:border-[#802973] outline-none" id="role-input-person-${code}" value="${role.person || ''}" placeholder="Nombre y apellido">
                    </div>
                    <div>
                        <label class="text-[9px] font-bold text-[#bd4a96] uppercase tracking-wide block mb-0.5">Correo Institucional</label>
                        <input type="email" class="w-full px-2.5 py-1.5 text-xs rounded-xl border border-[#e4d8e0] bg-[#faf8f9] focus:bg-white focus:border-[#bd4a96] outline-none" id="role-input-email-${code}" value="${role.email || ''}" placeholder="correo@vro-latam.com">
                    </div>
                </div>
            </div>
        `;
    });
    list.innerHTML = html;
}

function openRaciConfigModal() {
    const modal = document.getElementById('raci-config-modal');
    if (modal) {
        renderRaciRolesForm();
        modal.classList.remove('hidden');
    }
}

function closeRaciConfigModal() {
    const modal = document.getElementById('raci-config-modal');
    if (modal) {
        modal.classList.add('hidden');
        showNewRoleFormToggle(false);
    }
}

function saveAndSyncRaciSettings() {
    Object.keys(roleDefinitions).forEach(code => {
        const personInp = document.getElementById(`role-input-person-${code}`);
        const emailInp = document.getElementById(`role-input-email-${code}`);
        if (personInp && roleDefinitions[code]) {
            roleDefinitions[code].person = personInp.value.trim() || roleDefinitions[code].person;
        }
        if (emailInp && roleDefinitions[code]) {
            roleDefinitions[code].email = emailInp.value.trim() || roleDefinitions[code].email;
        }
    });
    closeRaciConfigModal();
    showToast('Directorio RACI sincronizado correctamente', 'manage_accounts');
}

function resetRaciDefaults() {
    Object.keys(defaultRoleDefinitions).forEach(code => {
        roleDefinitions[code] = Object.assign({}, defaultRoleDefinitions[code]);
    });
    renderRaciRolesForm();
    showToast('Valores predeterminados restablecidos', 'restart_alt');
}

function showNewRoleFormToggle(show) {
    const box = document.getElementById('new-role-creator-box');
    if (!box) return;
    if (show) {
        box.classList.remove('hidden');
    } else {
        box.classList.add('hidden');
        const c = document.getElementById('new-role-code');
        const t = document.getElementById('new-role-title');
        const s = document.getElementById('new-role-subtitle');
        const p = document.getElementById('new-role-person');
        const e = document.getElementById('new-role-email');
        if (c) c.value = '';
        if (t) t.value = '';
        if (s) s.value = '';
        if (p) p.value = '';
        if (e) e.value = '';
    }
}

function saveNewCustomRole() {
    const c = document.getElementById('new-role-code');
    const t = document.getElementById('new-role-title');
    const s = document.getElementById('new-role-subtitle');
    const p = document.getElementById('new-role-person');
    const e = document.getElementById('new-role-email');
    if (!c || !t) return;
    const code = c.value.trim().toUpperCase();
    const title = t.value.trim();
    if (!code || !title) {
        alert('Por favor indica al menos el código y nombre del cargo');
        return;
    }
    roleDefinitions[code] = {
        title: title,
        subtitle: s ? s.value.trim() || 'Rol Operativo VRO' : 'Rol Operativo VRO',
        colorClass: 'from-[#802973] to-[#bd4a96]',
        person: p ? p.value.trim() || 'Participante Asignado' : 'Participante Asignado',
        email: e ? e.value.trim() || 'contacto@empresa.com' : 'contacto@empresa.com'
    };
    showNewRoleFormToggle(false);
    renderRaciRolesForm();
    showToast(`Nuevo rol ${code} añadido al directorio RACI`, 'person_add');
}

window.showRaciTooltip = function(e, roleKey, raciKey) {
    const tooltip = document.getElementById('raci-floating-tooltip');
    if (!tooltip) return;
    const target = e.currentTarget;
    const roleInfo = roleDefinitions[roleKey] || defaultRoleDefinitions[roleKey] || { title: roleKey, subtitle: 'Rol Operativo VRO', colorClass: 'from-[#802973] to-[#bd4a96]', person: 'Asignado Oficial', email: 'contacto@vro-latam.com' };
    const raciType = raciTypeLabels[raciKey] || { name: raciKey.toUpperCase(), bg: 'bg-[#802973]', text: 'text-white', border: 'border-white/20' };
    const stepActions = raciActionsByStep[currentStep] || {};
    const actionText = stepActions[roleKey] || `Participa activamente como ${raciType.name} asegurando la alineación y calidad del proceso VRO en este paso.`;

    const badgeBadge = document.getElementById('tooltip-role-badge');
    const roleName = document.getElementById('tooltip-role-name');
    const roleSubtitle = document.getElementById('tooltip-role-subtitle');
    const raciTypeEl = document.getElementById('tooltip-raci-type');
    const stepLabel = document.getElementById('tooltip-step-label');
    const actionEl = document.getElementById('tooltip-role-action');
    const personName = document.getElementById('tooltip-person-name');
    const personEmail = document.getElementById('tooltip-person-email');
    const personEmailText = document.getElementById('tooltip-person-email-text');

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
    if (personName) personName.textContent = roleInfo.person || 'Sin Asignar';
    if (personEmail) personEmail.href = `mailto:${roleInfo.email || ''}`;
    if (personEmailText) personEmailText.textContent = roleInfo.email || 'contacto@empresa.com';

    const rect = target.getBoundingClientRect();
    const tooltipWidth = 320;
    const tooltipHeight = 210;
    let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
    let top = rect.top - tooltipHeight - 12;
    if (left < 16) left = 16;
    if (left + tooltipWidth > window.innerWidth - 16) left = window.innerWidth - tooltipWidth - 16;
    if (top < 70) top = rect.bottom + 12;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.classList.add('active');
};
</script></body></html>
