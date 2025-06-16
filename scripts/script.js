
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('modo-oscuro-toggle');
    const html = document.documentElement;

    // Función para aplicar el tema
    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        console.log(`Tema aplicado: ${theme}`);
        toggle.checked = theme === 'light';
    }

    // Comprobar la preferencia guardada o del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // Escuchar cambios en el toggle
    toggle.addEventListener('change', () => {
        const newTheme = toggle.checked ? 'light' : 'dark';
        console.log(`Cambio de tema: ${newTheme}`);
        applyTheme(newTheme);
    });

    // Escuchar cambios en la preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
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

// Navbar y botón scrolltop aparece cuando se hace scroll hacia abajo
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.getElementById('main-header');
        const stickynav = document.getElementById('sticky-nav');
        const scrollTopButton = document.getElementById('scroll-top');
        const headerBottom = header.offsetTop + header.offsetHeight - 50;

        if(window.pageYOffset > headerBottom){
            stickynav.classList.add('opacity-100', 'translate-y-0');
            scrollTopButton.classList.add('opacity-100', 'translate-y-0');
            stickynav.classList.remove('opacity-0', 'translate-y-[-100%]');
            scrollTopButton.classList.remove('opacity-0', 'translate-y-[-100%]');
        } else {
            stickynav.classList.add('opacity-0', 'translate-y-[-100%]');
            scrollTopButton.classList.add('opacity-0', 'translate-y-[-100%]');
            stickynav.classList.remove('opacity-100', 'translate-y-0');
            scrollTopButton.classList.remove('opacity-100', 'translate-y-0');
        }
    });
});
