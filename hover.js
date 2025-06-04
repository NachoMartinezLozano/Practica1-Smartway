const pedrodiv = document.getElementById('review-pedro');
const luisadiv = document.getElementById('review-luisa');

pedrodiv.addEventListener('mouseover', () => {
    pedrodiv.querySelector('p').style.color = 'blue';
});

pedrodiv.addEventListener('mouseout', () => {
    pedrodiv.querySelector('p').style.color = 'gray';
});

luisadiv.addEventListener('mouseover', () => {
    luisadiv.querySelector('p').style.color = 'blue';
});

luisadiv.addEventListener('mouseout', () => {
    luisadiv.querySelector('p').style.color = 'gray';
});