document.addEventListener('DOMContentLoaded', function() {
    const btnResumen = document.getElementById('btnResumen');
    const btnCompleto = document.getElementById('btnCompleto');
    const card = document.querySelector('.expediente-card');
    const sections = card.querySelectorAll('.expediente-info-section');

    btnResumen.addEventListener('click', function() {
        btnResumen.classList.add('active');
        btnCompleto.classList.remove('active');
        // Solo muestra la primera sección
        sections.forEach((sec, idx) => {
            sec.style.display = idx === 0 ? 'block' : 'none';
        });
    });

    btnCompleto.addEventListener('click', function() {
        btnCompleto.classList.add('active');
        btnResumen.classList.remove('active');
        // Muestra todas las secciones
        sections.forEach(sec => sec.style.display = 'block');
    });

    // Por defecto, inicia en resumen
    btnResumen.click();

    // Cambia el borde según el estado de riesgo
    const estado = document.querySelector('.expediente-estado');
    const foto = document.querySelector('.expediente-foto');
    if (estado && foto) {
        if (estado.textContent.includes('Alto')) {
            foto.classList.add('riesgo-alto');
        } else if (estado.textContent.includes('Bajo')) {
            foto.classList.add('riesgo-bajo');
        } else if (estado.textContent.includes('Medio')) {
            foto.classList.add('riesgo-medio');
        }
    }
});