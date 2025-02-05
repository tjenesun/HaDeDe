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

// Carousel functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}

setInterval(nextItem, 3000); // Change item every 3 seconds

// Subscribe button functionality
document.getElementById('subscribeButton').addEventListener('click', () => {
    alert('Subscribe to our newsletter!');
});
