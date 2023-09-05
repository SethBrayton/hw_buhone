// Header slider
let slideIndex = 1;

showSlidesHd(slideIndex);

function plusSlidesHd(n) {
  showSlidesHd((slideIndex += n));
}

function currentSlideHd(n) {
  showSlidesHd((slideIndex = n));
}

function showSlidesHd(n) {
  let i;
  let slides = document.getElementsByClassName("header_slides");
  let dots = document.getElementsByClassName("dot_hd");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_hd", " ");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active_hd");
}

// Our Cases slider

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my_slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Reviews slider

showSlidesRw(slideIndex);

function plusSlidesRw(n) {
  showSlidesRw((slideIndex += n));
}

function currentSlideRw(n) {
  showSlidesRw((slideIndex = n));
}

function showSlidesRw(n) {
  let i;
  let slides = document.getElementsByClassName("review_slides");
  let dots = document.getElementsByClassName("dot_rw");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", " ");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

let burger_menu = document.querySelector(".burger_menu");
let nav = document.querySelector(".nav__menu");

function burger() {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

burger_menu.addEventListener("click", burger);


