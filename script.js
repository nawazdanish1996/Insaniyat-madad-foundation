// Mobile Navigation Toggle
const menuBtn = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon from Bars to X
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.querySelector('i').classList.add('fa-bars');
        menuBtn.querySelector('i').classList.remove('fa-xmark');
    });
});

// Form Submission Message
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent. Our team will contact you soon.");
    e.target.reset();
});
