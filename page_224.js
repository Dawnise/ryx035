// scripts.js
const startCameraButton = document.getElementById('start-camera');
const stopCameraButton = document.getElementById('stop-camera');
const backgroundVideo = document.getElementById('background-video');

let stream;

startCameraButton.addEventListener('click', async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        backgroundVideo.srcObject = stream;
        backgroundVideo.style.display = 'block';
        startCameraButton.style.display = 'none';
        stopCameraButton.style.display = 'block';
    } catch (error) {
        console.error('无法访问摄像头:', error);
        alert('无法访问摄像头，请检查权限设置。');
    }
});

stopCameraButton.addEventListener('click', () => {
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        backgroundVideo.srcObject = null;
        backgroundVideo.style.display = 'none';
        startCameraButton.style.display = 'block';
        stopCameraButton.style.display = 'none';
    }
});