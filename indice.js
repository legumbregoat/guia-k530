async function cargarGuia() {
    const contenedor = document.getElementById('guia');
    try {
        const respuesta = await fetch('indice.txt');
        const texto = await respuesta.text();
        const lineas = texto.split('\n');

        contenedor.innerHTML = ''; // Limpiar carga

        lineas.forEach(linea => {
            if (linea.trim() === '') return;
            const [categoria, accion, teclas, descripcion] = linea.split('|');
            
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="categoria">${categoria}</div>
                <div class="accion">${accion}</div>
                <div class="teclas">${teclas}</div>
                <div class="descripcion">${descripcion}</div>
            `;
            contenedor.appendChild(card);
        });
    } catch (error) {
        contenedor.innerHTML = '<p>Error cargando los datos...</p>';
    }
}
window.onload = cargarGuia;
