// scripts.js
document.getElementById('home-button').addEventListener('click', function() {
    window.location.href = 'real_index.html'; // 返回主页
});

document.getElementById('prev-button').addEventListener('click', function() {
    window.location.href = 'https://www.taobao.com/?spm=a21n57.sem.logo.1.6e733903BfiS5s'; // 跳转到上一页
});

document.getElementById('next-button').addEventListener('click', function() {
    window.location.href = 'https://www.jd.com/'; // 跳转到下一页
});

const tooltip = document.getElementById('tooltip');

document.querySelectorAll('.product-card img').forEach(img => {
    img.addEventListener('mouseover', function(event) {
        const description = this.getAttribute('data-description');
        tooltip.textContent = description;
        tooltip.style.display = 'block';
        tooltip.style.left = `${event.pageX + 20}px`;
        tooltip.style.top = `${event.pageY + 20}px`;
    });

    img.addEventListener('mousemove', function(event) {
        tooltip.style.left = `${event.pageX + 20}px`;
        tooltip.style.top = `${event.pageY + 20}px`;
    });

    img.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    });
});