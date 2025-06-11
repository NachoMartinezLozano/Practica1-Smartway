
document.getElementById('modo-oscuro-toggle').addEventListener('change', () => {
    document.body.classList.toggle('modo-oscuro');
});


// Fijar el scroll de la pantalla cuando nos vemos en el carousel de imágenes
document.querySelectorAll('.carousel .btn-circle').forEach(button => {
button.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el scroll automático
    const targetId = this.getAttribute('href').substring(1); // obtiene el ID (sin #)
    const target = document.getElementById(targetId);
    if (target) {
    target.scrollIntoView({ behavior: 'instant', block: 'nearest' }); // opcional: ajusta el comportamiento si necesitas animación
    }
});
});
