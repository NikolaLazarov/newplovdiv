// Plovdiv Website Interactive Features

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

    // Card button interactions
    const cardBtns = document.querySelectorAll('.card-btn');
    cardBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const cardTitle = this.closest('.card').querySelector('h2').textContent;
            alert(`Заявление за: ${cardTitle} - Функционалността ще бъде имплементирана`);
        });
    });

    // Status check functionality
    const statusBtn = document.querySelector('.status-btn');
    const statusInput = document.querySelector('.status-input');
    
    statusBtn.addEventListener('click', function() {
        const statusNumber = statusInput.value.trim();
        if (statusNumber) {
            alert(`Проверка на статус за: ${statusNumber} - Функционалността ще бъде имплементирана`);
        } else {
            alert('Моля, въведете номер на заявление');
        }
    });

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

    // Hero CTA button
    const heroCta = document.querySelector('.hero-cta');
    heroCta.addEventListener('click', function() {
        alert('Към картата - Функционалността ще бъде имплементирана');
    });

    // Language selector
    const languageSelector = document.querySelector('.language-selector');
    languageSelector.addEventListener('click', function() {
        alert('Превключване на език - Функционалността ще бъде имплементирана');
    });

    // Login button
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', function() {
        alert('Вход в системата - Функционалността ще бъде имплементирана');
    });

    // Objects counter
    const objectsCounter = document.querySelector('.objects-counter');
    objectsCounter.addEventListener('click', function() {
        alert('Списък с обекти - Функционалността ще бъде имплементирана');
    });

    // Add hover effects for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
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
            const originalText = this.textContent;
            this.textContent = 'Зареждане...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 1000);
        });
    });

    // Statistics counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.textContent.replace(/,/g, ''));
                animateCounter(target, 0, finalNumber, 2000);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => observer.observe(stat));

    function animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        const startNumber = start;
        const difference = end - start;

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentNumber = Math.floor(startNumber + (difference * progress));
            element.textContent = currentNumber.toLocaleString();
            
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
        const rate = scrolled * -0.5;
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add mobile menu toggle functionality
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuToggle.style.display = 'none';
    
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
        } else {
            navCenter.style.display = 'none';
        }
    });

    console.log('Пловдив - Технологична дестинация уебсайт зареден успешно!');
});
