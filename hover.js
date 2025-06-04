const pedrodiv = document.getElementById('review-pedro');
const luisadiv = document.getElementById('review-luisa');
const textopedro = '"No puedo estar más contento de trabajar aquí. Gracias a los servicios que proporcionamos miles de empresas pueden estar seguras en Internet."';
const textoluisa = '"La antigua empresa para la que trabajaba disponía de los servicios ofrecidos por CyberPulse Labs. Gracias al fantástico servicio y la tan buena experiencia, finalmente me termine decidiendo por venir aquí. ¡De las mejores decisiones de mi vida!"';

pedrodiv.addEventListener('mouseover', () => {
    pedrodiv.querySelector('p').textContent = 'Si quieres saber más información sobre nuestros agentes, contacta con nosotros y forma parte de nuestro equipo.';
    pedrodiv.querySelector('p').style.color = 'blue';
});

pedrodiv.addEventListener('mouseout', () => {
    pedrodiv.querySelector('p').textContent = textopedro;
    pedrodiv.querySelector('p').style.color = 'gray';
});

luisadiv.addEventListener('mouseover', () => {
    luisadiv.querySelector('p').textContent = 'Si quieres saber más información sobre nuestros agentes, contacta con nosotros y forma parte de nuestro equipo.';
    luisadiv.querySelector('p').style.color = 'blue';
});

luisadiv.addEventListener('mouseout', () => {
    luisadiv.querySelector('p').textContent = textoluisa;
    luisadiv.querySelector('p').style.color = 'gray';
});