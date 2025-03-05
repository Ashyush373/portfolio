document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".project-card, .social-icons");
    const projectButtons = document.querySelectorAll(".project-card button");
    // Project button transitions
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out";
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
            card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";
        });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });
    // Handle "View My Work" button click
    const viewWorkBtn = document.querySelector('.hero button');
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', (e) => {
            e.preventDefault();
           
            // Create overlay for transition effect
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = '#000';
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.5s ease';
            overlay.style.zIndex = '9999';
            document.body.appendChild(overlay);

            // Fade in overlay
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 100);

            // Create and open new page after transition
            setTimeout(() => {
                const newWindow = window.open('', '_blank');
                newWindow.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>My Development Journey</title>
                        <style>
                            body {
                                font-family: 'Arial', sans-serif;
                                line-height: 1.6;
                                margin: 0;
                                padding: 20px;
                                background: linear-gradient(135deg, #1a1a1a, #4a4a4a);
                                color: #fff;
                            }
                            .journey-step {
                                opacity: 0;
                                transform: translateY(30px);
                                animation: fadeInUp 0.8s forwards;
                                padding: 20px;
                                margin: 20px 0;
                                background: rgba(255, 255, 255, 0.1);
                                border-radius: 10px;
                                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                            }
                            @keyframes fadeInUp {
                                to {
                                    opacity: 1;
                                    transform: translateY(0);
                                }
                            }
                            h1 {
                                text-align: center;
                                color: #00ff88;
                                margin-bottom: 40px;
                                animation: glow 2s infinite;
                            }
                            @keyframes glow {
                                0% { text-shadow: 0 0 10px rgba(0,255,136,0.5); }
                                50% { text-shadow: 0 0 20px rgba(0,255,136,0.8); }
                                100% { text-shadow: 0 0 10px rgba(0,255,136,0.5); }
                            }
                        </style>
                    </head>
                    <body>
                        <h1>My Magical App Development Journey</h1>
                        <div class="journey-step" style="animation-delay: 0.2s">
                            <h2>Chapter 1: The Beginning</h2>
                            <p>It all started with a simple "Hello World" in HTML. Little did I know this would be the beginning of an extraordinary adventure into the world of web development.</p>
                        </div>
                        <div class="journey-step" style="animation-delay: 0.4s">
                            <h2>Chapter 2: The CSS Chronicles</h2>
                            <p>Mastering the art of styling, I discovered the power to transform plain pages into visual masterpieces. Each line of CSS became a brush stroke in my digital canvas.</p>
                        </div>
                        <div class="journey-step" style="animation-delay: 0.6s">
                            <h2>Chapter 3: JavaScript Magic</h2>
                            <p>The real magic began when I delved into JavaScript. Suddenly, static pages came alive with interactivity and dynamic features that seemed like pure wizardry.</p>
                        </div>
                        <div class="journey-step" style="animation-delay: 0.8s">
                            <h2>Chapter 4: The React Revolution</h2>
                            <p>Discovering React was like finding a magical spell book. Component-based architecture opened new realms of possibilities in my development journey.</p>
                        </div>
                        <div class="journey-step" style="animation-delay: 1s">
                            <h2>Chapter 5: Mobile Dreams</h2>
                            <p>Venturing into mobile development with Flutter and React Native, I learned to craft experiences that users could carry in their pockets.</p>
                        </div>
                        <div class="journey-step" style="animation-delay: 1.2s">
                            <h2>The Journey Continues...</h2>
                            <p>Every day brings new challenges and opportunities to create something amazing. This is just the beginning of my endless adventure in the world of development.</p>
                        </div>
                    </body>
                    </html>
                `);
                newWindow.document.close();
            }, 600);

            // Remove overlay from original page
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 1000);
        });
    }

    elements.forEach(el => observer.observe(el));

    // Project button hover animations
    projectButtons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.3s ease-in-out";
            button.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
            button.style.boxShadow = "none";
        });
    });

    // Contact form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = 'ayushsolaskar31@gmail.com';
            const name = document.getElementById('name').value;
            const senderEmail = document.getElementById('email').value;
            const message = document.getElementById('message').value;
           
            // Create mailto URL with pre-filled message
            const mailtoMessage = `Name: ${name}%0AEmail: ${senderEmail}%0AMessage: ${message}`;
            const mailtoURL = `mailto:${email}?subject=Contact Form Submission&body=${mailtoMessage}`;
           
            // Open default mail client
            window.location.href = mailtoURL;
        });
    }
});


