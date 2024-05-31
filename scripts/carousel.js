let slides = document.querySelectorAll('.carousel .slide'); 
let currentSlide = 0; 
slides[currentSlide].className = 'slide active'; // Add 'active' class to the first slide

// Fonction pour changer de slide
function changeSlide(newSlideIndex) {
    slides[currentSlide].className = 'slide'; // Remove 'active' class from the current slide
    currentSlide = newSlideIndex; 
    slides[currentSlide].className = 'slide active'; 
}

function nextSlide() {
    let newSlideIndex = (currentSlide + 1) % slides.length; // Calculate the new slide index
    changeSlide(newSlideIndex); 
}

function prevSlide() {
    let newSlideIndex = (currentSlide - 1 + slides.length) % slides.length; // Calculate the new slide index
    changeSlide(newSlideIndex); 
}

// Add event listeners to the next and previous buttons
let nextButton = document.querySelector('.carousel .next-button'); 
let prevButton = document.querySelector('.carousel .prev-button'); 

nextButton.addEventListener('click', function () {
    nextSlide(); 
});

prevButton.addEventListener('click', function () {
    prevSlide(); 
});
