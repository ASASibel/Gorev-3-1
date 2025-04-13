const images=document.querySelectorAll('.gallery-image');
const modalImage=document.getElementById('modalImage');
const resimModal=new bootstrap.Modal(document.getElementById('resimModal'));
images.forEach(image=>{
    image.addEventListener('click',()=>{
        modalImage.src=image.src;
        modalImage.alt=image.alt;
        resimModal.show();
    });
});