const datosTeclado = `CATEGORY|ACTION|KEYS|DESCRIPTION
HARDWARE_K530|Flecha Arriba|FN1 + W (o CapsLK + W)|Mueve el cursor hacia arriba
HARDWARE_K530|Flecha Izquierda|FN1 + A (o CapsLK + A)|Mueve el cursor hacia la izquierda
HARDWARE_K530|Flecha Abajo|FN1 + S (o CapsLK + S)|Mueve el cursor hacia abajo
HARDWARE_K530|Flecha Derecha|FN1 + D (o CapsLK + D)|Mueve el cursor hacia la derecha
HARDWARE_K530|Tecla Escape (Esc)|FN1 + 1|Sale de menús o cancela acciones
HARDWARE_K530|Tecla Tilde (~)|FN1 + Shift + Esc|Usada para directorios Home en Linux
HARDWARE_K530|Tecla Backtick (`)|FN1 + Esc|Usada para scripts en Bash
HARDWARE_K530|Borrar (Delete)|FN1 + . (Punto)|Borra el carácter delante del cursor
HARDWARE_K530|Inicio (Home)|FN1 + [|Va al principio de la línea
HARDWARE_K530|Fin (End)|FN1 + ]|Va al final de la línea
HARDWARE_K530|Re Pág (Page Up)|FN1 + ;|Sube una página entera
HARDWARE_K530|Av Pág (Page Down)|FN1 + '|Baja una página entera
HARDWARE_K530|Imprimir Pantalla|FN1 + P|Captura de pantalla (depende del OS)
HARDWARE_K530|Cambiar Perfil BT|FN2 + 1 / 2 / 3|Cambia entre dispositivos Bluetooth guardados
HARDWARE_K530|Grabar Luces|FN2 + CapsLK|Entra en modo grabación de luces (presionar otra vez para guardar)
ANDROID_S20|Ir a Home|Win + Enter|Vuelve a la pantalla principal
ANDROID_S20|Notificaciones|Win + N|Despliega la barra de notificaciones
ANDROID_S20|Buscador Apps|Win + F (o S)|Abre el buscador interno del teléfono
ANDROID_S20|Cambiar App|Alt + Tab|Alterna entre las últimas apps usadas
ANDROID_S20|Atrás (Back)|Esc|Vuelve a la pantalla anterior
ANDROID_S20|Menú Contextual|Shift + F10 (FN1 + 0)|Equivale al clic derecho del mouse
ANDROID_S20|Bloquear Pantalla|Win + L|Apaga la pantalla y bloquea el celular
ANDROID_S20|Dividir Pantalla|Win + [/]|(En algunos Samsung) Mueve la app a un lado
ANDROID_S20|Zoom Pantalla|Ctrl + Alt + (+/-)|(Si activado en accesibilidad) Hace zoom al sistema
TERMUX_CMD|Limpiar Pantalla|Ctrl + L|Limpia todo el texto visible (comando clear)
TERMUX_CMD|Cancelar Proceso|Ctrl + C|Detiene el script o comando actual (Kill)
TERMUX_CMD|Cerrar Sesión|Ctrl + D|Cierra Termux o sale del usuario actual
TERMUX_CMD|Autocompletar|Tab|Completa nombres de archivos o comandos
TERMUX_CMD|Historial Atrás|Flecha Arriba|Muestra el último comando escrito
TERMUX_CMD|Buscar Comando|Ctrl + R|Busca en el historial de comandos usados
TERMUX_CMD|Inicio de Línea|Ctrl + A|Mueve el cursor al inicio del comando
TERMUX_CMD|Fin de Línea|Ctrl + E|Mueve el cursor al final del comando
TERMUX_CMD|Borrar Línea|Ctrl + K|Borra desde el cursor hasta el final
TERMUX_CMD|Pegar (Terminal)|Ctrl + Alt + V|Pega texto en la terminal (específico de Termux)
TERMUX_CMD|Aumentar Fuente|Ctrl + Alt + +|Hace la letra de Termux más grande
TERMUX_CMD|Disminuir Fuente|Ctrl + Alt + -|Hace la letra de Termux más pequeña
TEXT_EDIT_ACODE|Seleccionar Texto|Shift + Flechas|Resalta texto para copiar/borrar
TEXT_EDIT_ACODE|Seleccionar Palabra|Ctrl + Shift + Flechas|Selecciona palabra por palabra rápido
TEXT_EDIT_ACODE|Copiar|Ctrl + C|Copia el texto seleccionado
TEXT_EDIT_ACODE|Cortar|Ctrl + X|Corta el texto seleccionado
TEXT_EDIT_ACODE|Pegar|Ctrl + V|Pega el texto (En editores gráficos sí funciona Ctrl+V)
TEXT_EDIT_ACODE|Guardar|Ctrl + S|Guarda el archivo actual
TEXT_EDIT_ACODE|Buscar en Archivo|Ctrl + F|Busca texto dentro del código
TEXT_EDIT_ACODE|Deshacer|Ctrl + Z|Deshace el último cambio
TEXT_EDIT_ACODE|Rehacer|Ctrl + Y (o Shift+Ctrl+Z)|Rehace lo deshecho
BROWSER_WEB|Nueva Pestaña|Ctrl + T|Abre una pestaña nueva en Chrome/Samsung
BROWSER_WEB|Cerrar Pestaña|Ctrl + W|Cierra la pestaña actual
BROWSER_WEB|Reabrir Pestaña|Ctrl + Shift + T|Abre la última pestaña cerrada
BROWSER_WEB|Buscar en Pág.|Ctrl + F|Busca una palabra en la web actual
BROWSER_WEB|Barra Direcciones|Alt + D (o Ctrl + L)|Salta a la barra para escribir una URL
BROWSER_WEB|Refrescar|F5 (FN1 + 5)|Recarga la página web`;
async function cargarGuia() {
    try {
        const contenedor = document.getElementById('guia-contenido');
        if (!contenedor) return;
        const lineas = datosTeclado.trim().split('\n');
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
        console.error('Error cargando los datos:', error);
    }
}
window.onload = cargarGuia;
