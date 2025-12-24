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

// Back button
// Back to Top Logic
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Show button when user scrolls down 300px from the top
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.addEventListener("click", () => {
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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


// popup message 
// Popup Logic
window.onload = function() {
    const popup = document.getElementById('statusPopup');
    const closeX = document.getElementById('closePopup');
    const closeBtn = document.getElementById('gotItBtn');

    // Show popup after 1 second
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 1000);

    // Close on X click
    closeX.onclick = function() {
        popup.style.display = 'none';
    }

    // Close on button click
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    // Close if user clicks outside the white box
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
};

// Live Clock for Goalpokher
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('live-time').innerText = timeString;
}
setInterval(updateClock, 1000);

// Volunteer Counter Animation
function animateCounter(id, target) {
    let count = 0;
    const speed = 2000 / target; // Adjust speed
    const timer = setInterval(() => {
        count++;
        document.getElementById(id).innerText = count + "+";
        if (count === target) clearInterval(timer);
    }, speed);
}

// Start counter when page loads
window.addEventListener('DOMContentLoaded', () => {
    animateCounter('volunteers-count', 12); // Set your actual volunteer count here
});
