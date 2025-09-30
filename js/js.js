document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

ScrollReveal().reveal('.hero-content, .hero-image, .about-content, .skills-container, .education-container, .projects-container', {
    origin: 'top',
    distance: '50px',
    duration: 1500,
    interval: 200
});
