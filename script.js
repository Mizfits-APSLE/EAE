document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Carousel Functionality ---
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    let autoSlideInterval;

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

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
        prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => { showSlide(i); resetAutoSlide(); });
        });
        startAutoSlide();
    }

    // --- 2. Expandable Passions Toggle ---
    const passionCards = document.querySelectorAll('.passion-card');
    const detailBoxes = document.querySelectorAll('.passion-detail-box');

    passionCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            const targetBox = document.getElementById(targetId);
            const isAlreadyActive = card.classList.contains('active');

            // Close all open cards and detail boxes
            passionCards.forEach(c => c.classList.remove('active'));
            detailBoxes.forEach(box => box.classList.remove('open'));

            // If it wasn't already active, open the target detail box
            if (!isAlreadyActive) {
                card.classList.add('active');
                targetBox.classList.add('open');
            }
        });
    });
});