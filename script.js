document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    let autoSlideInterval;

    // Function to update slide visibility
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function nextSlide() {
        const newIndex = (currentIndex + 1) % slides.length;
        showSlide(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    // Auto-advance slides every 5 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
            resetAutoSlide();
        });
    });

    // Initialize
    startAutoSlide();
    // Expandable Passions Section Logic
document.addEventListener('DOMContentLoaded', () => {
    const passionCards = document.querySelectorAll('.passion-card');
    const detailBoxes = document.querySelectorAll('.passion-detail-box');

    passionCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            const targetBox = document.getElementById(targetId);
            const isAlreadyActive = card.classList.contains('active');

            // 1. Close all active cards and detail boxes
            passionCards.forEach(c => {
                c.classList.remove('active');
                c.setAttribute('aria-expanded', 'false');
            });
            detailBoxes.forEach(box => {
                box.classList.remove('open');
            });

            // 2. If the clicked card was NOT already open, expand it
            if (!isAlreadyActive) {
                card.classList.add('active');
                card.setAttribute('aria-expanded', 'true');
                targetBox.classList.add('open');

                // Smooth scroll into view if on mobile
                setTimeout(() => {
                    targetBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 150);
            }
        });
    });
});
});