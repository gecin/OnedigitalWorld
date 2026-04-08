document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle
    // Menu Toggle (small panel)
const menuBtn = document.querySelector('.menu-btn');
const menuOverlay = document.querySelector('.menu-overlay');
const closeMenu = document.querySelector('.close-menu');

function openMenu() {
    menuOverlay.classList.add('active');
    document.body.classList.add('menu-open');
}
function closeMenuFunc() {
    menuOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
}

if(menuBtn && menuOverlay) {
    menuBtn.addEventListener('click', openMenu);
    if(closeMenu) closeMenu.addEventListener('click', closeMenuFunc);
    // Optional: close when clicking outside the menu panel
    document.addEventListener('click', function(e) {
        if(menuOverlay.classList.contains('active') && !menuOverlay.contains(e.target) && e.target !== menuBtn) {
            closeMenuFunc();
        }
    });
}
    
    // Hero Slider (4 images)
    let slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    if (slides.length) {
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }
        showSlide(0);
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }
    
    // FAQ toggle (if any)
    const faqButtons = document.querySelectorAll('.faq-question button');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.parentElement.nextElementSibling;
            if (answer) answer.classList.toggle('show');
        });
    });
    
    // Puzzle game (placeholder - keep your existing if any)
    // Carousel dissolve cycle
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
        // duplicate for seamless loop
        const items = carouselTrack.innerHTML;
        carouselTrack.innerHTML = items + items;
        
        let cycleActive = true;
        let timeoutId;
        
        function applyDissolve() {
            if (!cycleActive) return;
            carouselTrack.classList.add('dissolve-effect');
            timeoutId = setTimeout(() => {
                carouselTrack.classList.remove('dissolve-effect');
                void carouselTrack.offsetWidth;
                carouselTrack.style.animation = 'none';
                setTimeout(() => {
                    carouselTrack.style.animation = 'scrollHorizontal 30s linear infinite';
                }, 50);
                timeoutId = setTimeout(applyDissolve, 30000);
            }, 15000);
        }
        timeoutId = setTimeout(applyDissolve, 30000);
        
        carouselTrack.addEventListener('mouseenter', () => {
            if (timeoutId) clearTimeout(timeoutId);
            cycleActive = false;
            carouselTrack.classList.remove('dissolve-effect');
            carouselTrack.style.animation = 'scrollHorizontal 30s linear infinite';
        });
        carouselTrack.addEventListener('mouseleave', () => {
            cycleActive = true;
            timeoutId = setTimeout(applyDissolve, 30000);
        });
    }
});