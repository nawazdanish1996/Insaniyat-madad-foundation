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

/* Map & Location */
.map-wrapper {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border: 5px solid white;
}

/* Stats Bar */
.stats-bar {
    background: var(--primary-color);
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 40px 5%;
    text-align: center;
}

.stat-item h3 {
    font-size: 2.5rem;
    margin-bottom: 5px;
}

.stat-item p {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Responsive Fix for Map */
@media screen and (max-width: 768px) {
    .stats-bar {
        flex-direction: column;
        gap: 30px;
    }
}

