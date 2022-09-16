let isAutoplaySlider = true;
let initialCarouselRight = true;
let carouselRight = true;

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");
  const projects = document.querySelector("#projects");
  const projectsPosition = projects.getBoundingClientRect();
  const skills = document.querySelector("#skills");
  const skillsPosition = skills.getBoundingClientRect();

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }

  if (projectsPosition.top <= window.innerHeight && isAutoplaySlider) {
    autoPlaySlider();
    isAutoplaySlider = false;
  }

  if (skillsPosition.top <= window.innerHeight && initialCarouselRight) {
    carousel.style.transform = `translateX(-${widthCarouselTransition}px)`;
    initialCarouselRight = false;
    carouselRight = false;
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (!e.target.matches("#nav-menu") && !e.target.closest("#hamburger")) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// IMAGE SLIDER SCRIPT

// Select slide container, all slides, and all captions
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const captions = document.querySelectorAll(".caption");

// select next and previous slide button
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");

// set current slide to first slide
let currentSlide = 1;
slider.classList.add("transition-none");
slider.style.transform = `translateX(-100%)`;

let maxSlide = slides.length - 1;

// autoPlaySlider function to auto slide the image
const autoPlaySlider = () => {
  timeoutPlay = setTimeout(() => {
    if (currentSlide === maxSlide - 1) {
      captions[currentSlide - 1].classList.add("opacity-0");
      captions[0].classList.remove("opacity-0");
    } else {
      captions[currentSlide].classList.remove("opacity-0");
      captions[currentSlide - 1].classList.add("opacity-0");
    }
    nextSlide.disabled = true;
    prevSlide.disabled = true;
    slider.classList.remove("transition-none");
    slider.style.transform = `translateX(${-100 * (currentSlide + 1)}%)`;
    currentSlide++;
    slider.addEventListener("transitionend", () => {
      if (currentSlide >= maxSlide) {
        slider.classList.add("transition-none");
        slider.style.transform = `translateX(-100%)`;
        currentSlide = 1;
      }
      nextSlide.disabled = false;
      prevSlide.disabled = false;
    });

    autoPlaySlider();
  }, 5000);
};

// autoPlaySlider();

// set function next slide button
nextSlide.addEventListener("click", () => {
  if (currentSlide === maxSlide - 1) {
    captions[currentSlide - 1].classList.add("opacity-0");
    captions[0].classList.remove("opacity-0");
  } else {
    captions[currentSlide].classList.remove("opacity-0");
    captions[currentSlide - 1].classList.add("opacity-0");
  }
  nextSlide.disabled = true;
  slider.classList.remove("transition-none");
  slider.style.transform = `translateX(${-100 * (currentSlide + 1)}%)`;
  currentSlide++;
  slider.addEventListener("transitionend", () => {
    if (currentSlide >= maxSlide) {
      slider.classList.add("transition-none");
      console.log(slider.style.transition);
      slider.style.transform = `translateX(-100%)`;
      currentSlide = 1;
    }
    nextSlide.disabled = false;
  });

  clearTimeout(timeoutPlay);
  autoPlaySlider();
});

// set function previous slide button
prevSlide.addEventListener("click", () => {
  if (currentSlide === 1) {
    captions[maxSlide - 2].classList.remove("opacity-0");
    captions[0].classList.add("opacity-0");
  } else {
    captions[currentSlide - 2].classList.remove("opacity-0");
    captions[currentSlide - 1].classList.add("opacity-0");
  }
  prevSlide.disabled = true;
  slider.classList.remove("transition-none");
  slider.style.transform = `translateX(${-100 * (currentSlide - 1)}%)`;
  currentSlide--;
  slider.addEventListener("transitionend", () => {
    if (currentSlide <= 0) {
      currentSlide = maxSlide;
      slider.classList.add("transition-none");
      slider.style.transform = `translateX(${-100 * (currentSlide - 1)}%)`;
      currentSlide--;
    }
    prevSlide.disabled = false;
  });
  clearTimeout(timeoutPlay);
  autoPlaySlider();
});

// pause autoplaySlider on mouseover
slider.addEventListener("mouseover", () => {
  clearTimeout(timeoutPlay);
});

// play autoplaySlider on mouseout
slider.addEventListener("mouseout", () => {
  autoPlaySlider();
});

// CAROUSEL ICONS SCRIPT

// Select carousel container
const carousel = document.querySelector(".carousel");

const widthCarouselTransition = carousel.scrollWidth - carousel.clientWidth; // px

carousel.addEventListener("transitionend", () => {
  if (carouselRight) {
    carousel.style.transform = `translateX(-${widthCarouselTransition}px)`;
    carouselRight = false;
  } else {
    carousel.style.transform = `translateX(0)`;
    carouselRight = true;
  }
});
