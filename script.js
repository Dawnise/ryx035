let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideWidth = slides.children[0].clientWidth;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.children.length;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

document.addEventListener('DOMContentLoaded', function() {
    setInterval(nextSlide, 3000); // 每3秒切换一次
});