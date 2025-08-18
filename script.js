// Plovdiv Municipality Website Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Text size controls
    const textSizeBtns = document.querySelectorAll('.text-size-btn');
    textSizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const size = this.textContent;
            let scale = 1;
            
            if (size === 'A-') scale = 0.9;
            else if (size === 'A+') scale = 1.1;
            else scale = 1;
            
            document.body.style.fontSize = scale + 'em';
        });
    });

    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Търсене за: "${query}" - Функционалността ще бъде имплементирана`);
        }
    });

    // Service card interactions
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceTitle = this.querySelector('h3').textContent;
            alert(`Достъп до услуга: ${serviceTitle} - Функционалността ще бъде имплементирана`);
        });
    });

    // News link interactions
    const newsLinks = document.querySelectorAll('.news-link');
    newsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Прочети повече - Функционалността ще бъде имплементирана');
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const name = formData.get('name') || this.querySelector('input[type="text"]').value;
            const email = formData.get('email') || this.querySelector('input[type="email"]').value;
            const message = formData.get('message') || this.querySelector('textarea').value;
            
            if (name && email && message) {
                alert('Съобщението е изпратено успешно! Ще се свържем с вас скоро.');
                this.reset();
            } else {
                alert('Моля, попълнете всички полета.');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.textContent.toLowerCase();
            const targetSection = document.querySelector(`.${targetId}-section`);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Language selector
    const languageSelector = document.querySelector('.language-selector');
    languageSelector.addEventListener('click', function() {
        const currentLang = this.querySelector('.active').textContent;
        const newLang = currentLang === 'BG' ? 'EN' : 'BG';
        
        this.querySelector('.active').textContent = newLang;
        this.querySelector('.active').className = '';
        this.querySelector('span:not(.separator)').className = 'active';
        
        alert(`Езикът е променен на: ${newLang} - Функционалността ще бъде имплементирана`);
    });

    // Login button
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', function() {
        alert('Вход в системата - Функционалността ще бъде имплементирана');
    });

    // Services counter
    const servicesCounter = document.querySelector('.services-counter');
    servicesCounter.addEventListener('click', function() {
        alert('Списък с услуги - Функционалността ще бъде имплементирана');
    });

    // Add hover effects for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add loading animation for buttons
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type === 'submit') return; // Skip form submit buttons
            
            const originalText = this.textContent;
            this.textContent = 'Зареждане...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 1000);
        });
    });

    // Statistics counter animation for hero stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalText = target.textContent;
                const finalNumber = parseInt(finalText.replace(/[^0-9]/g, ''));
                const suffix = finalText.replace(/[0-9,]/g, '');
                
                animateCounter(target, 0, finalNumber, 2000, suffix);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => observer.observe(stat));

    function animateCounter(element, start, end, duration, suffix = '') {
        const startTime = performance.now();
        const startNumber = start;
        const difference = end - start;

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentNumber = Math.floor(startNumber + (difference * progress));
            element.textContent = currentNumber.toLocaleString() + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        const rate = scrolled * -0.3;
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add mobile menu toggle functionality
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuToggle.style.display = 'none';
    mobileMenuToggle.style.cssText = `
        background: #00a4dc;
        border: none;
        color: white;
        padding: 10px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 18px;
    `;
    
    const mainNav = document.querySelector('.main-nav');
    mainNav.appendChild(mobileMenuToggle);

    // Show mobile menu toggle on small screens
    function checkMobileMenu() {
        if (window.innerWidth <= 768) {
            mobileMenuToggle.style.display = 'block';
            document.querySelector('.nav-center').style.display = 'none';
        } else {
            mobileMenuToggle.style.display = 'none';
            document.querySelector('.nav-center').style.display = 'flex';
        }
    }

    checkMobileMenu();
    window.addEventListener('resize', checkMobileMenu);

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        const navCenter = document.querySelector('.nav-center');
        if (navCenter.style.display === 'none' || navCenter.style.display === '') {
            navCenter.style.display = 'flex';
            navCenter.style.flexDirection = 'column';
            navCenter.style.gap = '15px';
            navCenter.style.marginTop = '20px';
        } else {
            navCenter.style.display = 'none';
        }
    });

    // Add smooth reveal animation for sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });

    // Add typing effect to hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }

    // Add floating animation to coat of arms
    const coatOfArms = document.querySelector('.coat-of-arms');
    if (coatOfArms) {
        coatOfArms.style.animation = 'float 3s ease-in-out infinite';
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-5px); }
            }
        `;
        document.head.appendChild(style);
    }

    console.log('Община Пловдив уебсайт зареден успешно!');
    console.log('Municipality of Plovdiv website loaded successfully!');
});
