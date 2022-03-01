const clickPrev = document.querySelector(".prev"),
    clickNext = document.querySelector(".next"),
    dots = document.getElementsByClassName("dot");

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

clickPrev.onclick = () => {
    plusSlides(-1);
};
clickNext.onclick = () => {
    plusSlides(1);
};

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    const slides = document.querySelectorAll(".one-slide");
    if (n > slides.length) {
    slideIndex = 1;
    }
    if (n < 2) {
    slideIndex = slides.length;
    }
    for(let i=0; i<slides.length; i++){
        slides[i].style.display='none';
    }
    for (let i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace(' active', '');
    }
    slides[slideIndex-1].style.display='block';
    dots[slideIndex-1]+=' active';
}
