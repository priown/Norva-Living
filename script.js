const subscribeBtn = document.querySelector('.subscribe-btn');

subscribeBtn.addEventListener('click', () => {
    subscribeBtn.textContent = 'Subscribed!';
    subscribeBtn.style.backgroundColor = '#4CAF50'; // Change button color to green
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
});