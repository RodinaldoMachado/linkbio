
const slides = document.querySelector('.slides');
let currentSlide = 0;

function nextSlide() {
  const slideWidth = document.querySelector('.slide').offsetWidth; // Calcula a largura do slide
  currentSlide = (currentSlide + 1) % slides.children.length;
  slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

setInterval(nextSlide, 3000);

// slider end

var whats = 'https://wa.me/5547984981854'
var insta = 'https://www.instagram.com/rodinaldo.machado/'
var face = 'https://www.facebook.com/rodinaldo.machado.798/'

var linkWhats = document.querySelectorAll('.whats')
for (let index = 0; index < linkWhats.length; index++) {
    linkWhats[index].href = whats
}

var linkInsta = document.querySelector('.insta')
linkInsta.href = insta

var linkFace = document.querySelector('.face')
linkFace.href = face
