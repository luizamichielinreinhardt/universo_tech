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

// Troca a cada 5 segundos
setInterval(nextSlide, 5000);

// Mostrar primeiro slide ao carregar
showSlide(currentSlide);




// const menuToggle = document.querySelector(".menu-toggle");
// const navMenu = document.querySelector(".navbar ul");

// if(menuToggle){
//   menuToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//   });
// }

// function saibaMais() {
//   alert("Aqui você pode colocar mais informações sobre a empresa!");
// }
