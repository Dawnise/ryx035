// scripts.js
function convertImage() {
    const fileInput = document.getElementById('image-file');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                canvas.toBlob(function (blob) {
                    const url = URL.createObjectURL(blob);
                    const a = document.getElementById('download-image-link');
                    a.href = url;
                    a.download = `${file.name.split('.')[0]}.jpg`;
                    a.style.display = 'block';

                    // 显示图片预览
                    const imagePreview = document.getElementById('image-preview');
                    imagePreview.src = url;
                    imagePreview.style.display = 'block';
                }, 'image/jpeg');
            };
        };

        reader.readAsDataURL(file);
    } else {
        alert('请选择一个图片文件');
    }
}

function convertText() {
    const fileInput = document.getElementById('text-file');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;
            const blob = new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            const url = URL.createObjectURL(blob);
            const a = document.getElementById('download-text-link');
            a.href = url;
            a.download = `${file.name.split('.')[0]}.docx`;
            a.style.display = 'block';

            // 显示文本预览
            const textPreview = document.getElementById('text-preview');
            textPreview.value = content;
        };

        reader.readAsText(file);
    } else {
        alert('请选择一个文本文件');
    }
}