document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('modo-oscuro-toggle').addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });
});


// Fijar el scroll de la pantalla cuando nos vemos en el carousel de imágenes
document.addEventListener('DOMContentLoaded', function() {
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
});

// Navbar aparece cuando se hace scroll hacia abajo
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.getElementById('main-header');
        const stickynav = document.getElementById('sticky-nav');
        const headerBottom = header.offsetTop + header.offsetHeight - 50;

        if(window.pageYOffset > headerBottom){
            stickynav.classList.add('opacity-100', 'translate-y-0');
            stickynav.classList.remove('opacity-0', 'translate-y-[-100%]');
        } else {
            stickynav.classList.add('opacity-0', 'translate-y-[-100%]');
            stickynav.classList.remove('opacity-100', 'translate-y-0');
        }
    });
});
