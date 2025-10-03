// script.js
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-level');

const animateSkillBars = () => {
    skillBars.forEach(skillBar => {
        const skillLevel = skillBar.getAttribute('data-level');
        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
        
        if (isInViewport(skillBar.parentElement)) {
            skillBar.style.width = `${skillLevel}%`;
        }
    });
};

// Initial check and add scroll event listener
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert(`Terima kasih ${name}! Pesan Anda telah dikirim.`);
    
    // Reset form
    contactForm.reset();
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    } else {
        header.style.backgroundColor = 'var(--primary-color)';
    }
});