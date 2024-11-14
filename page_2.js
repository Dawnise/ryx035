document.addEventListener("DOMContentLoaded", function() {
    const adModal = document.getElementById('ad-modal');
    const hasSeenAd = localStorage.getItem('hasSeenAd');

    if (!hasSeenAd) {
        adModal.style.display = 'block';
        localStorage.setItem('hasSeenAd', 'true');
    }
});

function closeAd() {
    const adModal = document.getElementById('ad-modal');
    if (adModal) {
        adModal.style.display = 'none';
    } else {
        console.error('Element with id "ad-modal" not found.');
    }
}