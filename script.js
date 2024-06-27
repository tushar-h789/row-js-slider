let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Automatic slide
let autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Pause on hover
const slider = document.querySelector('.slider');
slider.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
slider.addEventListener('mouseout', () => autoSlideInterval = setInterval(nextSlide, 3000));

// Initial display
showSlide(slideIndex);
