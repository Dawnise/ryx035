let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;

    // 隐藏所有幻灯片
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });

    // 更新当前索引
    slideIndex = (slideIndex + 1) % slideCount;

    // 显示当前幻灯片
    slides[slideIndex].style.transform = `translateX(0%)`;

    // 设置定时器，每3秒切换一次
    setTimeout(showSlides, 3000);
}

// 初始化幻灯片
showSlides();

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;

    slideIndex = (slideIndex - 1 + slideCount) % slideCount;

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;

    slideIndex = (slideIndex + 1) % slideCount;

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });
}