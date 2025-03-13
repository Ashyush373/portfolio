// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-item');
  
  // Typing animation elements
  const nameText = document.getElementById('name-text');
  const roleText = document.getElementById('role-text');
  const nameCursor = document.getElementById('name-cursor');
  const roleCursor = document.getElementById('role-cursor');
  
  // Section elements
  const sections = document.querySelectorAll('section');
  const skillItems = document.querySelectorAll('.skill-item');
  
  // Form elements
  const contactForm = document.getElementById('contact-form');
  
  // Navbar scroll effect
  function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.padding = '1rem 0';
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
      navbar.style.padding = '1.5rem 0';
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
    
    // Update active nav item based on scroll position
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  }
  
  // Typing animation effect
  function startTypingAnimation() {
    const fullNameText = "Ayush Solaskar";
    const fullRoleText = "Frontend Developer";
    let nameIndex = 0;
    let roleIndex = 0;
    let nameTypingComplete = false;
    
    // Initial delay before typing starts
    setTimeout(() => {
      // Type name
      const nameTypingInterval = setInterval(() => {
        if (nameIndex < fullNameText.length) {
          nameText.textContent = fullNameText.substring(0, nameIndex + 1);
          nameIndex++;
        } else {
          clearInterval(nameTypingInterval);
          nameTypingComplete = true;
          
          // Hide name cursor and show role cursor
          nameCursor.style.visibility = 'hidden';
          roleCursor.style.visibility = 'visible';
          
          // Start typing role after a short delay
          setTimeout(() => {
            const roleTypingInterval = setInterval(() => {
              if (roleIndex < fullRoleText.length) {
                roleText.textContent = fullRoleText.substring(0, roleIndex + 1);
                roleIndex++;
              } else {
                clearInterval(roleTypingInterval);
                
                // Continue cursor blinking only for role
                setInterval(() => {
                  roleCursor.style.visibility = 
                    roleCursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
                }, 500);
              }
            }, 100);
          }, 400);
        }
      }, 100);
    }, 800);
    
    // Cursor blink effect for name cursor
    setInterval(() => {
      if (!nameTypingComplete) {
        nameCursor.style.visibility = 
          nameCursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
      }
    }, 500);
  }
  
  // Initialize skill bars animation
  function initSkillBars() {
    skillItems.forEach(item => {
      const percentage = item.getAttribute('data-percentage');
      const progressBar = item.querySelector('.skill-progress');
      
      // Observe when skill section comes into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            progressBar.style.width = `${percentage}%`;
            observer.disconnect();
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(item);
    });
  }
  
  // Section animation on scroll
  function initSectionAnimations() {
    const animateElements = document.querySelectorAll('.section-title, .section-description, .skill-category, .project-card, .contact-info, .contact-form-container');
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe each element
    animateElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Animated letter titles
  function initLetterAnimations() {
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
      const titleText = title.getAttribute('data-title');
      const letters = titleText.split('');
      
      let html = '';
      letters.forEach((letter, index) => {
        if (letter === ' ') {
          html += '<span class="letter-space">&nbsp;</span>';
        } else {
          html += `<span class="letter" style="animation-delay: ${0.1 * index}s">${letter}</span>`;
        }
      });
      
      title.innerHTML = html;
      
      // Observe when title comes into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const letters = entry.target.querySelectorAll('.letter');
            letters.forEach(letter => {
              letter.classList.add('animate');
            });
            
            // Add underline animation
            setTimeout(() => {
              const underline = document.createElement('span');
              underline.classList.add('title-underline');
              entry.target.appendChild(underline);
            }, letters.length * 100 + 200);
            
            observer.disconnect();
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(title);
    });
  }
  
  // Contact form submission
  function setupContactForm() {
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Clear form
        contactForm.reset();
        
        // Show success message (would connect to backend in a real implementation)
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
      });
    }
  }
  
  // Mobile menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialize animations and interactions
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Call once to set initial state
  
  startTypingAnimation();
  initSkillBars();
  initSectionAnimations();
  initLetterAnimations();
  setupContactForm();
  
  // Update skill bars on window resize
  window.addEventListener('resize', initSkillBars);
});

// Custom styles for letter animations
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .section-title .letter {
      display: inline-block;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .section-title .letter.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    .section-title .letter-space {
      display: inline-block;
      width: 0.5em;
    }
    
    .title-underline {
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 8px;
      background-color: rgba(250, 204, 21, 0.2); /* --accent-light */
      z-index: -1;
      transform: rotate(-1deg);
      animation: showTitleUnderline 0.5s ease forwards;
    }
    
    @keyframes showTitleUnderline {
      from { width: 0; }
      to { width: 100%; }
    }
    
    /* Fix for skill bars */
    .skill-item[data-percentage="90"] .skill-progress { width: 90%; }
    .skill-item[data-percentage="85"] .skill-progress { width: 85%; }
    .skill-item[data-percentage="80"] .skill-progress { width: 80%; }
    .skill-item[data-percentage="75"] .skill-progress { width: 75%; }
    .skill-item[data-percentage="70"] .skill-progress { width: 70%; }
    .skill-item[data-percentage="65"] .skill-progress { width: 65%; }
  </style>
`);