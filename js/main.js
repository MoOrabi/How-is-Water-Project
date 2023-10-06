
let wcButton = document.querySelector(".tapsContainer .water-cycle");
let ceButton = document.querySelector(".tapsContainer .climate-effect");

let waterCycleImage = document.querySelector(".content .water-cycle .photo img")

let wcContent = document.querySelector(".content .water-cycle");
let ceContent = document.querySelector(".content .climate-effect");

wcButton.addEventListener('click', () => {
    wcContent.style.display = 'flex'
    ceContent.style.display = 'none'
    stopSlides()
})

ceButton.addEventListener('click', () => {
    ceContent.style.display = 'flex'
    wcContent.style.display = 'none'
    stopSlides()
    showCSlide(0)
})


let currentSlide = 0;
let wslides = document.querySelectorAll('.container .content .water-cycle .slider-container .slider video');
const cslides = document.querySelectorAll('.container .content .climate-effect .slider-container  video');
const prevBtn = document.querySelector('.content .water-cycle .slider-container .slider-button .previous');
const nextBtn = document.querySelector('.content .water-cycle .slider-container .slider-button .next');
let startButton = document.querySelector('.start');

let startPointer = document.querySelector('.content .water-cycle .startContainer .start');
let lastButton = document.querySelector('.content .water-cycle .slider-container .slider-button .last');

console.log(startPointer)
let stages = ["Evaporation", "Condensation", "Precipitation","Infiltration"]

startButton.addEventListener('click',() => {
    stopSlides()
    showSlide(0)    
    window.scrollBy(0, 2000)
    wslides[0].currentTime = 0
    wslides[0].play()
    
})

function showSlide(index) {
    
    wslides.forEach((slide, i) => {
        if (i === index) {
            console.log(index)
            if (i === 0) {
                startPointer.style.display = 'flex'
                prevBtn.style.display = 'none'                
            } else if(i === wslides.length - 1) {
                startPointer.style.display = 'none'
                nextBtn.style.display = 'none'
                lastButton.style.display = 'flex'
            } else {
                prevBtn.style.display = 'flex'
                nextBtn.style.display = 'flex'
                startPointer.style.display = 'none'
                startPointer.style.display = 'none'
                lastButton.style.display = 'none'
            }
            
            slide.style.display = 'flex';
            slide.play()
        } else {
            slide.pause();
            slide.style.display = 'none';
            
        }
    });
}

function showCSlide(index) {
    
    cslides.forEach((slide, i) => {
        if (i === index) {
            console.log(index)
            slide.style.display = 'flex';
            slide.play()
        } else {
            slide.style.display = 'none';
            slide.pause();
        }
    });
}

function stopSlides() {
    wslides.forEach((slide, i) => {
        slide.pause()
    });
    cslides.forEach((slide, i) => {
        slide.pause()
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide == wslides.length) {
        currentSlide = 0;
    }
    else if (currentSlide < 0) {
        currentSlide = wslides.length -1;
    }
    showSlide(currentSlide);
}

prevBtn.addEventListener('click', () => changeSlide(-1));
nextBtn.addEventListener('click', () => changeSlide(1));

// Show the initial slide
showSlide(currentSlide);
