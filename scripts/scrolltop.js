const scrollTopbotton = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    scrollTopbotton.classList.toggle('show', window.scrollY > 200);
});
scrollTopbotton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});