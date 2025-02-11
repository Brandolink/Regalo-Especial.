// Obtener referencias a los botones y elementos HTML
const botonMostrarPalabras = document.getElementById('mostrar-palabras');
const mensajePrincipal = document.getElementById('mensaje-principal');
const listaRazones = document.getElementById('lista-razones');
const botonMostrarMensajeFinal = document.getElementById('mostrar-mensaje-final');
const mensajeFinal = document.getElementById('mensaje-final');
const botonMostrarSegundoGrupo = document.getElementById('mostrar-segundo-grupo');
const segundoGrupo = document.getElementById('segundo-grupo');
const botonMostrarMensajeAgradecimiento = document.getElementById('mostrar-mensaje-agradecimiento');
const mensajeAgradecimiento = document.getElementById('mensaje-agradecimiento');

// Función para mostrar la lista de razones
function mostrarListaRazones() {
    mensajePrincipal.style.display = 'none';
    listaRazones.style.display = 'block';
}

// Función para mostrar el mensaje final
function mostrarMensajeFinal() {
    listaRazones.style.display = 'none';
    mensajeFinal.style.display = 'block';
}

// Función para mostrar el segundo grupo de razones
function mostrarSegundoGrupo() {
    mensajeFinal.style.display = 'none';
    segundoGrupo.style.display = 'block';
}

// Función para mostrar el mensaje de agradecimiento
function mostrarMensajeAgradecimiento() {
    mensajeAgradecimiento.style.display = 'block';
}

// Asignar eventos a los botones
botonMostrarPalabras.addEventListener('click', mostrarListaRazones);
botonMostrarMensajeFinal.addEventListener('click', mostrarMensajeFinal);
botonMostrarSegundoGrupo.addEventListener('click', mostrarSegundoGrupo);
botonMostrarMensajeAgradecimiento.addEventListener('click', mostrarMensajeAgradecimiento);

// Mostrar el botón de agradecimiento al final de la interacción
botonMostrarSegundoGrupo.addEventListener('click', () => {
    botonMostrarMensajeAgradecimiento.style.display = 'block';
});
