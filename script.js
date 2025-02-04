// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic hover effect for hero section button
const heroButton = document.querySelector('#home button');
if (heroButton) {
    heroButton.addEventListener('mouseover', () => {
        heroButton.textContent = 'Ready to Start!';
    });

    heroButton.addEventListener('mouseout', () => {
        heroButton.textContent = 'Learn More';
    });
}
