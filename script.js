/* =========================================================
   Executive Zenith PMO / Oficina de Proyectos VRO
   Application logic
   ========================================================= */

'use strict';

function togglePlantillasDropdown() {
      const content = document.getElementById('plantillas-dropdown-content');
      const chevron = document.getElementById('plantillas-chevron');
      const label = document.getElementById('plantillas-toggle-text');
      const trigger = document.getElementById('plantillas-dropdown-trigger');
      if (!content) return;
      const isHidden = content.classList.contains('hidden');
      if (isHidden) {
        content.classList.remove('hidden');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
        if (label) label.textContent = 'Ocultar plantillas';
        if (trigger) trigger.setAttribute('aria-expanded', 'true');
      } else {
        content.classList.add('hidden');
        if (chevron) chevron.style.transform = 'rotate(0deg)';
        if (label) label.textContent = 'Mostrar plantillas';
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    }

// Reveal on scroll logic
        function reveal() {
            const reveals = document.querySelectorAll(".reveal");
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal(); // Initial check

        // Playbook State & Interactive Handlers
        const playbookFases = {
            1: {
                name: "Fase 1: Ideación & Formalización",
                shortName: "Fase 1",
                lifecycleStep: 1,
                jugadas: [
                    { id: "1.1", label: "Jugada 1.1: Idea Formalizada", icon: "🏈", badge: "Activa", badgeClass: "w-2 h-2 rounded-full bg-secondary animate-pulse" },
                    { id: "1.2", label: "Jugada 1.2: Idea Priorizada", icon: "📋", badge: "Próxima", badgeClass: "text-[10px] text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-bold" }
                ]
            },
            2: {
                name: "Fase 2: Evaluación & Priorización",
                shortName: "Fase 2",
                lifecycleStep: 2,
                jugadas: [
                    { id: "1.2", label: "Jugada 2.1: Matriz Scoring & Capacidad", icon: "📊", badge: "Destacada", badgeClass: "text-[10px] text-primary-container bg-primary-fixed px-2 py-0.5 rounded-full font-bold" },
                    { id: "1.1", label: "Jugada 2.2: Business Case & Viabilidad", icon: "💼", badge: "Pipeline", badgeClass: "text-[10px] text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-bold" }
                ]
            },
            3: {
                name: "Fase 3: Arquitectura & Estimación",
                shortName: "Fase 3",
                lifecycleStep: 3,
                jugadas: [
                    { id: "1.1", label: "Jugada 3.1: EDS & Arquitectura Base", icon: "📐", badge: "Técnica", badgeClass: "text-[10px] text-primary-container bg-primary-fixed px-2 py-0.5 rounded-full font-bold" },
                    { id: "1.2", label: "Jugada 3.2: Estimación Ágil & Squads", icon: "⚙️", badge: "Capacidad", badgeClass: "text-[10px] text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-bold" }
                ]
            },
            4: {
                name: "Fase 4: Entrega & Valor Sostenible",
                shortName: "Fase 4",
                lifecycleStep: 4,
                jugadas: [
                    { id: "1.1", label: "Jugada 4.1: Sprints & Handoff Operativo", icon: "🚀", badge: "Ejecución", badgeClass: "text-[10px] text-primary-container bg-primary-fixed px-2 py-0.5 rounded-full font-bold" },
                    { id: "1.2", label: "Jugada 4.2: Realización de Beneficios", icon: "📈", badge: "Valor", badgeClass: "text-[10px] text-secondary bg-secondary/10 px-2 py-0.5 rounded-full font-bold" }
                ]
            }
        };

        let currentFase = 1;
        let currentJugada = '1.1';
        let dropdownOpen = true;

        // Toggle del Menú Flotante (Solicitud 1)
        function toggleFloatingPlaybookDrawer() {
            const menu = document.getElementById('floating-playbook-menu');
            if (!menu) return;
            const isHidden = menu.classList.contains('hidden');
            if (isHidden) {
                menu.classList.remove('hidden');
                setTimeout(() => {
                    menu.classList.remove('scale-95');
                    menu.classList.add('scale-100');
                }, 10);
            } else {
                menu.classList.add('scale-95');
                menu.classList.remove('scale-100');
                setTimeout(() => {
                    menu.classList.add('hidden');
                }, 200);
            }
        }

        // Navegación rápida desde el Drawer flotante
        function quickNav(faseId, jugadaId) {
            selectFase(faseId);
            if (jugadaId) {
                selectJugada(jugadaId);
            }
            toggleFloatingPlaybookDrawer();
            const targetSection = document.getElementById('playbook-fases');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // 2. SOLICITUD 2: Al seleccionar el ciclo de vida del proyecto despliega el menú para seleccionar la fase y jugada
        function selectLifecycleStep(stepNumber, defaultJugada) {
            // Actualizar clase activa en las 5 tarjetas de Ciclo de Vida
            for (let i = 1; i <= 5; i++) {
                const card = document.getElementById(`lifecycle-step-${i}`);
                if (card) {
                    if (i === stepNumber || (stepNumber === 4 && i === 5 && defaultJugada === '1.2')) {
                        card.classList.add('active');
                    } else if (i === stepNumber) {
                        card.classList.add('active');
                    } else {
                        card.classList.remove('active');
                    }
                }
            }

            // Mapear paso a Fase: 1 -> Fase 1, 2 -> Fase 2, 3 -> Fase 3, 4 -> Fase 4, 5 -> Fase 4 Jugada 1.2
            let targetFase = stepNumber;
            if (stepNumber === 5) {
                targetFase = 4;
                defaultJugada = '1.2';
            }

            // Seleccionar y desplegar la fase
            currentFase = targetFase;
            dropdownOpen = true; // Desplegar menú de fase y jugadas
            
            const jugadasBar = document.getElementById('jugadas-bar');
            if (jugadasBar) {
                jugadasBar.classList.remove('hidden');
            }

            // Si se suministró jugada específica, activarla
            if (defaultJugada) {
                currentJugada = defaultJugada;
            } else {
                currentJugada = playbookFases[targetFase].jugadas[0].id;
            }

            updateFaseButtonStyles();
            renderJugadasBar(targetFase);
            displayFicha(currentJugada);
            updateBreadcrumb();

            // Scroll suave hacia el menú y la ficha del Playbook
            const playbookSection = document.getElementById('playbook-fases');
            if (playbookSection) {
                playbookSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        function renderJugadasBar(faseId) {
            const data = playbookFases[faseId];
            const label = document.getElementById('jugadas-label');
            const wrapper = document.getElementById('jugadas-buttons-wrapper');
            if (!label || !wrapper) return;

            label.innerHTML = `<span class="material-symbols-outlined text-sm">play_circle</span> Jugadas de ${data.shortName}:`;
            
            wrapper.innerHTML = data.jugadas.map((j) => {
                const isActive = (currentJugada === j.id);
                return `
                    <button id="jugada-btn-${j.id.replace('.', '-')}" 
                            onclick="selectJugada('${j.id}')" 
                            class="jugada-btn px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                                isActive 
                                ? 'bg-white text-primary-container shadow-sm border border-primary-container/40 ring-2 ring-primary-container/20' 
                                : 'text-on-surface-variant hover:bg-white/80 font-semibold border border-transparent hover:border-surface-container'
                            }">
                        <span>${j.icon}</span> ${j.label} 
                        <span class="${j.badgeClass}">${j.badge === 'Activa' ? '' : j.badge}</span>
                    </button>
                `;
            }).join('');
        }

        function updateBreadcrumb() {
            const bFase = document.getElementById('breadcrumb-fase');
            const bJugada = document.getElementById('breadcrumb-jugada');
            if (bFase) bFase.textContent = playbookFases[currentFase].shortName;
            if (bJugada) {
                const currentFaseData = playbookFases[currentFase];
                const matchingJugada = currentFaseData.jugadas.find(j => j.id === currentJugada);
                bJugada.textContent = matchingJugada ? matchingJugada.label : (currentJugada === '1.1' ? 'Jugada 1.1: Idea Formalizada' : 'Jugada 1.2: Idea Priorizada');
            }
        }

        function selectFase(faseId) {
            const jugadasBar = document.getElementById('jugadas-bar');
            
            // Toggle dropdown if clicked again on same fase
            if (currentFase === faseId) {
                dropdownOpen = !dropdownOpen;
                if (!dropdownOpen) {
                    jugadasBar.classList.add('hidden');
                } else {
                    jugadasBar.classList.remove('hidden');
                }
                updateFaseButtonStyles();
                return;
            }

            // New fase selected
            currentFase = faseId;
            dropdownOpen = true;
            jugadasBar.classList.remove('hidden');
            
            // Default jugada for this fase
            currentJugada = playbookFases[faseId].jugadas[0].id;
            
            // Sincronizar tarjeta visual del ciclo de vida
            for (let i = 1; i <= 5; i++) {
                const card = document.getElementById(`lifecycle-step-${i}`);
                if (card) {
                    if (i === faseId) card.classList.add('active');
                    else card.classList.remove('active');
                }
            }

            updateFaseButtonStyles();
            renderJugadasBar(faseId);
            displayFicha(currentJugada);
            updateBreadcrumb();
        }

        function updateFaseButtonStyles() {
            [1, 2, 3, 4].forEach(id => {
                const btn = document.getElementById(`fase-btn-${id}`);
                if (!btn) return;
                const chevron = btn.querySelector('.chevron-icon');
                const badge = btn.querySelector('.badge');

                if (id === currentFase) {
                    btn.className = "fase-btn px-5 py-3 rounded-xl bg-primary-container text-white font-bold text-xs md:text-sm shadow-md flex items-center gap-2 transition-all hover:scale-[1.02]";
                    if (chevron) {
                        chevron.classList.remove('hidden');
                        chevron.style.transform = dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)';
                    }
                    if (!badge) {
                        const newBadge = document.createElement('span');
                        newBadge.className = "badge text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold ml-1";
                        newBadge.textContent = "Activa";
                        btn.insertBefore(newBadge, chevron);
                    }
                } else {
                    btn.className = "fase-btn px-5 py-3 rounded-xl text-on-surface-variant hover:bg-white/60 font-semibold text-xs md:text-sm flex items-center gap-2 transition-all hover:text-primary-container opacity-80 hover:opacity-100";
                    if (chevron) {
                        chevron.classList.add('hidden');
                        chevron.style.transform = 'rotate(0deg)';
                    }
                    if (badge) badge.remove();
                }
            });
        }

        function selectJugada(jugadaId) {
            currentJugada = jugadaId;
            renderJugadasBar(currentFase);
            displayFicha(jugadaId);
            updateBreadcrumb();
        }

        function displayFicha(jugadaId) {
            const ficha1 = document.getElementById('ficha-jugada-1-1');
            const ficha2 = document.getElementById('ficha-jugada-1-2');

            if (!ficha1 || !ficha2) return;

            if (jugadaId === '1.1') {
                ficha2.classList.add('hidden');
                ficha1.classList.remove('hidden');
                ficha1.style.opacity = '0';
                ficha1.style.transform = 'translateY(12px)';
                setTimeout(() => {
                    ficha1.style.opacity = '1';
                    ficha1.style.transform = 'translateY(0)';
                }, 50);
            } else {
                ficha1.classList.add('hidden');
                ficha2.classList.remove('hidden');
                ficha2.style.opacity = '0';
                ficha2.style.transform = 'translateY(12px)';
                setTimeout(() => {
                    ficha2.style.opacity = '1';
                    ficha2.style.transform = 'translateY(0)';
                }, 50);
            }
        }

        // Initialize state on load
        window.addEventListener('load', () => {
            renderJugadasBar(1);
            updateFaseButtonStyles();
        });
