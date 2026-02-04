document.addEventListener('DOMContentLoaded', () => {
    
    // --- REFERENCIAS AL DOM ---
    const searchInput = document.getElementById('buscador');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.truco-card');
    const printBtn = document.getElementById('btnPrint');

    // --- FUNCIÓN DE BÚSQUEDA ---
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        cards.forEach(card => {
            // Buscamos en el título y en la descripción
            const title = card.querySelector('.accion-titulo').innerText.toLowerCase();
            const desc = card.querySelector('.desc-text').innerText.toLowerCase();
            const code = card.querySelector('.teclas-code').innerText.toLowerCase();

            if (title.includes(searchTerm) || desc.includes(searchTerm) || code.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // --- FUNCIÓN DE FILTRADO POR CATEGORÍA ---
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Manejar estado visual del botón activo
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Filtrar tarjetas
            const categoryClass = btn.getAttribute('data-filter');

            cards.forEach(card => {
                if (categoryClass === 'all') {
                    card.style.display = 'flex';
                } else {
                    if (card.classList.contains(categoryClass)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
            
            // Limpiar buscador al cambiar filtro para evitar confusiones
            searchInput.value = '';
        });
    });

    // --- FUNCIÓN DE IMPRESIÓN ---
    printBtn.addEventListener('click', () => {
        window.print();
    });

    console.log('Guía Maestra K530 cargada. Sistema listo.');
});
