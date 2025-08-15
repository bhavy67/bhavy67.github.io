// ==========================================
// PORTFOLIO WEBSITE JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initThemeToggle();
    initMobileMenu();
    initSmoothScrolling();
    initActiveNavigation();
    initContactForm();
    initScrollAnimations();
    initSkillBars();
    initTypingEffect();
});

// ==========================================
// THEME TOGGLE FUNCTIONALITY
// ==========================================

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, themeIcon);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, themeIcon);
        
        // Add transition effect
        body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
}

function updateThemeIcon(theme, icon) {
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// ==========================================
// MOBILE MENU FUNCTIONALITY
// ==========================================

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================

function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ==========================================

function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

// ==========================================
// CONTACT FORM FUNCTIONALITY
// ==========================================

function initContactForm() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Reset previous errors
        clearErrors();
        
        // Validate form
        const isValid = validateForm();
        
        if (isValid) {
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.classList.add('loading');
            
            try {
                // Simulate form submission (replace with actual endpoint)
                await simulateFormSubmission();
                
                // Show success message
                showSuccessMessage();
                form.reset();
            } catch (error) {
                showErrorMessage('Failed to send message. Please try again.');
            } finally {
                submitBtn.classList.remove('loading');
            }
        }
    });
    
    // Real-time validation
    nameInput.addEventListener('blur', () => validateField('name'));
    emailInput.addEventListener('blur', () => validateField('email'));
    messageInput.addEventListener('blur', () => validateField('message'));
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    if (!name) {
        showFieldError('name', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showFieldError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    if (!email) {
        showFieldError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!message) {
        showFieldError('message', 'Message is required');
        isValid = false;
    } else if (message.length < 10) {
        showFieldError('message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    return isValid;
}

function validateField(fieldName) {
    const field = document.getElementById(fieldName);
    const value = field.value.trim();
    
    clearFieldError(fieldName);
    
    switch (fieldName) {
        case 'name':
            if (!value) {
                showFieldError(fieldName, 'Name is required');
            } else if (value.length < 2) {
                showFieldError(fieldName, 'Name must be at least 2 characters');
            }
            break;
        case 'email':
            if (!value) {
                showFieldError(fieldName, 'Email is required');
            } else if (!isValidEmail(value)) {
                showFieldError(fieldName, 'Please enter a valid email address');
            }
            break;
        case 'message':
            if (!value) {
                showFieldError(fieldName, 'Message is required');
            } else if (value.length < 10) {
                showFieldError(fieldName, 'Message must be at least 10 characters');
            }
            break;
    }
}

function showFieldError(fieldName, message) {
    const formGroup = document.getElementById(fieldName).closest('.form-group');
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    formGroup.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function clearFieldError(fieldName) {
    const formGroup = document.getElementById(fieldName).closest('.form-group');
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    formGroup.classList.remove('error');
    errorElement.classList.remove('show');
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    const formGroups = document.querySelectorAll('.form-group');
    
    errorElements.forEach(element => element.classList.remove('show'));
    formGroups.forEach(group => group.classList.remove('error'));
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function simulateFormSubmission() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000); // Simulate 2 second delay
    });
}

function showSuccessMessage() {
    // Create and show success notification
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Message sent successfully! I'll get back to you soon.</span>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles for notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: 'linear-gradient(135deg, #00d2d3, #6c5ce7)',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function showErrorMessage(message) {
    // Create and show error notification
    const notification = document.createElement('div');
    notification.className = 'notification error';
    notification.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles for notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: '#fd79a8',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll(`
        .about-content,
        .timeline-item,
        .education-card,
        .skill-category,
        .project-card,
        .contact-content
    `);
    
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// ==========================================
// SKILL BARS ANIMATION
// ==========================================

function initSkillBars() {
    const skillSection = document.querySelector('.skills');
    let skillsAnimated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                animateSkillBars();
                skillsAnimated = true;
            }
        });
    }, { threshold: 0.5 });
    
    if (skillSection) {
        observer.observe(skillSection);
    }
}

function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach((skill, index) => {
        setTimeout(() => {
            const level = skill.getAttribute('data-level');
            skill.style.setProperty('--skill-width', `${level}%`);
            
            // Add animation class
            skill.classList.add('animate');
        }, index * 100);
    });
}

// ==========================================
// TYPING EFFECT FOR HERO SECTION
// ==========================================

function initTypingEffect() {
    const subtitleElement = document.querySelector('.hero-subtitle');
    if (!subtitleElement) return;
    
    const titles = [
        'Software Developer',
        'Full Stack Developer',
        'Problem Solver',
        'Tech Enthusiast'
    ];
    
    // Set initial height to prevent layout shifts
    const originalHeight = subtitleElement.offsetHeight;
    subtitleElement.style.minHeight = `${originalHeight}px`;
    
    let currentTitle = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const current = titles[currentTitle];
        
        if (isDeleting) {
            subtitleElement.textContent = current.substring(0, currentChar - 1);
            currentChar--;
        } else {
            subtitleElement.textContent = current.substring(0, currentChar + 1);
            currentChar++;
        }
        
        // Add cursor effect
        const cursor = '|';
        const currentText = subtitleElement.textContent;
        
        // Only show cursor when not in the middle of deleting to 0
        if (!(isDeleting && currentChar === 0)) {
            subtitleElement.innerHTML = currentText + `<span class="typing-cursor">${cursor}</span>`;
        } else {
            // When fully deleted, show just cursor to maintain height
            subtitleElement.innerHTML = `<span class="typing-cursor">${cursor}</span>`;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentChar === current.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentTitle = (currentTitle + 1) % titles.length;
            typeSpeed = 500; // Pause before next title
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Add cursor styling
    const style = document.createElement('style');
    style.textContent = `
        .typing-cursor {
            animation: blink 1s infinite;
            color: var(--secondary-color);
        }
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Start typing effect after page load
    setTimeout(typeEffect, 1000);
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ==========================================
// PERFORMANCE OPTIMIZATIONS
// ==========================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scroll to element
function scrollToElement(element, offset = 70) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// ==========================================
// ERROR HANDLING
// ==========================================

window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.error);
    // Could send error to analytics service here
});

// ==========================================
// ACCESSIBILITY IMPROVEMENTS
// ==========================================

// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        hamburger.focus();
    }
});

// Focus management for theme toggle
document.getElementById('theme-toggle').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.target.click();
    }
});

// ==========================================
// CONSOLE WELCOME MESSAGE
// ==========================================

console.log(`
%c🚀 Welcome to My Portfolio! %c
%cBuilt with HTML, CSS, and Vanilla JavaScript
%cFeel free to explore the code!
%c
%c📧 Contact: your.email@example.com
%c🌐 Website: yourwebsite.com
%c💼 LinkedIn: linkedin.com/in/yourprofile
%c📝 GitHub: github.com/yourprofile
`,
'color: #6c5ce7; font-size: 20px; font-weight: bold;',
'',
'color: #00d2d3; font-size: 14px;',
'color: #fd79a8; font-size: 14px;',
'',
'color: #8a8b9a; font-size: 12px;',
'color: #8a8b9a; font-size: 12px;',
'color: #8a8b9a; font-size: 12px;',
'color: #8a8b9a; font-size: 12px;'
);

// ==========================================
// LOAD PERFORMANCE MONITORING
// ==========================================

window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`%cPage loaded in ${Math.round(loadTime)}ms`, 'color: #00d2d3; font-weight: bold;');
    
    // Initialize scroll-based animations
    initNavbarScrollEffect();
});

// ==========================================
// LAZY LOADING FOR IMAGES
// ==========================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initLazyLoading);
