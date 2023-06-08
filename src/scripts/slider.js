let arrowLeft = document.querySelector(".slider__arrowLeft");
let arrowRight = document.querySelector(".slider__arrowRight");

let slideIndex = 1;
showSlide(slideIndex);

// function prevSlide() {
//     showSlide((slideIndex -= 1));
// }

// function nextSlide() {
//     showSlide((slideIndex += 1));
// }

arrowLeft.addEventListener("click", () => {
    showSlide((slideIndex -= 1));
    console.log(slideIndex);
});

arrowRight.addEventListener("click", () => {
    showSlide((slideIndex += 1));
    console.log(slideIndex);
});

function showSlide(index) {
    let slides = document.getElementsByClassName("slider");
    let currentSlide = document.getElementById("currentSlide");

    if (index < 1) {
        slideIndex = slides.length;
    } else if (index > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active");
    currentSlide.textContent = slideIndex;
}
