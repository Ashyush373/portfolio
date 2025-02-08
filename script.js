// Smooth Scrolling to Sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Apply animations when elements come into view
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in, .slide-up");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(el => observer.observe(el));
});

// Contact Form Validation & Submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Simple email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simulating form submission (Can be integrated with a backend API)
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
});

// Add hover effects dynamically to social icons
document.querySelectorAll(".social-icons a").forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.style.transform = "scale(1.2)";
    });
    icon.addEventListener("mouseout", () => {
        icon.style.transform = "scale(1)";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".hero h2").style.opacity = "1";
    }, 500);
});