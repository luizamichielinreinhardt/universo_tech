// script para alternar as fotos da pagina principal(peguei essa ideia da internet)

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 5000);
showSlide(currentSlide);