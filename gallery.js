const thumbnails = document.querySelectorAll('.thumb');
const gallery = document.getElementById('gallery');

thumbnails.forEach((thumb, index) =>{
    thumb.addEventListener('click', function(){
        gallery.style.display = 'flex';
        console.log("Image", index);
    })
});

const close = document.querySelector('.close');
close.addEventListener('click', function(){
    gallery.style.display = 'none';
});

document.addEventListener('keydown', (event)=>{
    if(event.key === 'Escape'){
        gallery.style.display = 'none';
    }
});