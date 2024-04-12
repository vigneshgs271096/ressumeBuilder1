console.log('Script loaded');

document.getElementById('photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    console.log(event.target.files[0])
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});
