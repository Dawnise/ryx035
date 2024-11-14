document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const pages = document.querySelectorAll('.page');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetPage = tab.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(targetPage).classList.add('active');
        });
    });
});