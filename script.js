// Optional smooth scroll for older browsers
const links = document.querySelectorAll('nav a');

for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
}
