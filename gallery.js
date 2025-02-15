const thumbnails = document.querySelectorAll('.thumb');
const gallery = document.getElementById('gallery');
const galleryImage = document.getElementById('gallery-image');
const close = document.querySelector('.close');
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let currentIndex = 0;

thumbnails.forEach((thumb, index) =>{
    thumb.addEventListener('click', function(){
        gallery.style.display = 'flex';
        galleryImage.src = this.getAttribute('alt');
        currentIndex = index;
    })
});


close.addEventListener('click', function(){
    gallery.style.display = 'none';
});

document.addEventListener('keydown', (event)=>{
    if(event.key === 'Escape'){
        gallery.style.display = 'none';
    } else if(event.key === 'ArrowLeft'){
        if (currentIndex > 0) {
            currentIndex--;
            galleryImage.src = thumbnails[currentIndex].getAttribute('alt');
        }
    } else if(event.key === 'ArrowRight'){
        if (currentIndex < thumbnails.length - 1) {
            currentIndex++;
            galleryImage.src = thumbnails[currentIndex].getAttribute('alt');
        }
    }
});

leftArrow.addEventListener('click', function(){
    console.log("left arrow clicked");
    if (currentIndex > 0) {
        currentIndex--;
        galleryImage.src = thumbnails[currentIndex].getAttribute('alt');
    }
});

rightArrow.addEventListener('click', function(){
    console.log("right arrow clicked");
    if (currentIndex < thumbnails.length - 1) {
        currentIndex++;
        galleryImage.src = thumbnails[currentIndex].getAttribute('alt');
    }
});
