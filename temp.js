// page_224.js
const startCameraButton = document.getElementById('start-camera');
const stopCameraButton = document.getElementById('stop-camera');
const backgroundVideo = document.getElementById('background-video');
const fallbackBackground = document.getElementById('fallback-background');
const errorMessage = document.getElementById('error-message');

let stream;

startCameraButton.addEventListener('click', async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        backgroundVideo.srcObject = stream;
        backgroundVideo.style.display = 'block';
        fallbackBackground.style.display = 'none';
        startCameraButton.style.display = 'none';
        stopCameraButton.style.display = 'block';
        errorMessage.style.display = 'none';
    } catch (error) {
        console.error('无法访问摄像头:', error);
        errorMessage.textContent = '无法访问摄像头，请检查权限设置。';
        errorMessage.style.display = 'block';
    }
});

stopCameraButton.addEventListener('click', () => {
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        backgroundVideo.srcObject = null;
        backgroundVideo.style.display = 'none';
        fallbackBackground.style.display = 'block';
        startCameraButton.style.display = 'block';
        stopCameraButton.style.display = 'none';
    }
});