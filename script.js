// === Smooth Scroll ===
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// === Dark Mode Toggle ===
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// === Contact Form Validation ===
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    alert("Message sent successfully!");
    this.reset();
});

// === Fade-in on Scroll ===
const fadeElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});

// === Animate Skill Bars on Scroll ===
window.addEventListener('scroll', () => {
    document.querySelectorAll('.bar span').forEach(span => {
        const rect = span.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            span.style.width = span.getAttribute('data-skill') + '%';
        }
    });
});
