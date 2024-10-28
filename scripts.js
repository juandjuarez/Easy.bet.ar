// Evento para manejar el envío del formulario
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    if (!nombre || !email || !telefono) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    fetch('/.netlify/functions/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, telefono })
    })
    .then(response => {
        if (response.ok) {
            mostrarConfirmacion(); // Muestra la página de confirmación
        } else {
            throw new Error('Error al guardar los datos');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al guardar los datos.');
    });
});

// Función para mostrar la segunda página cuando se hace clic en el botón
function mostrarPagina2() {
    document.getElementById('page1').style.display = 'none';  // Oculta la página 1
    document.getElementById('page2').style.display = 'block';  // Muestra la página 2
}

// Función para mostrar la página de confirmación
function mostrarConfirmacion() {
    document.getElementById('page2').style.display = 'none';  // Oculta la página 2
    document.getElementById('confirmacion').style.display = 'block';  // Muestra la página de confirmación
}

// Función para volver al inicio (Página 1)
function mostrarPagina1() {
    document.getElementById('confirmacion').style.display = 'none';  // Oculta la página de confirmación
    document.getElementById('page1').style.display = 'block';  // Muestra la página 1
}
