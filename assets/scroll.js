// global variable
let prevScrollpos = window.scrollY;

const headerNavbar = document.getElementById("header-navbar");
const imgPlaceholderClass = document.querySelectorAll(".img-placeholder");
const imgPlaceholder = document.getElementById("img-placeholder");

const reveals = document.querySelectorAll(".reveal");
const imgEvo = document.querySelectorAll(".img-evo");

/**
 * method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation right before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
*/
const windowScroll =
window.requestAnimationFrame ||
function (callback, el, height) {
  window.setTimeout(callback, 1000 / 60);
};

animationFade(); // all animations that used the reveal class
imageEvolutioWipe(); // animation for image evolution
imagePlaceholderWipe(); // animation for image placeholder
showImagePlaceholder(); // func to set the image placeholder fixed on scrolling

// set animations fade out from left, right or bottom
function animationFade() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      reveals[i].classList.remove("inactive");
    } else {
      // uncomment this to stop the animations loop
      reveals[i].classList.remove("active");
      reveals[i].classList.add("inactive");
    }
  }
  windowScroll(animationFade);
}

function imageEvolutioWipe() {
  for (let i = 0; i < imgEvo.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = imgEvo[i].getBoundingClientRect().top;
    const elementVisible = 275;

    if (elementTop < windowHeight - elementVisible) {
      imgEvo[i].classList.remove("wipe-gone");
      imgEvo[i].classList.add("wipe-left");
    } else {
      // uncomment this to stop the animations loop
      imgEvo[i].classList.remove("wipe-left");
      imgEvo[i].classList.add("wipe-gone");
    }
  }
  windowScroll(imageEvolutioWipe);
}

function imagePlaceholderWipe() {
  for (let i = 0; i < imgPlaceholderClass.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = imgPlaceholderClass[i].getBoundingClientRect().top;
    const elementVisible = 300;

    if (elementTop < windowHeight - elementVisible) {
      imgPlaceholderClass[i].classList.remove("wipe-gone");
      imgPlaceholderClass[i].classList.add("wipe-left");
    } else {
      // uncomment this to stop the animations loop
      imgPlaceholderClass[i].classList.remove("wipe-left");
      imgPlaceholderClass[i].classList.add("wipe-gone");
    }
  }
  windowScroll(imagePlaceholderWipe);
}

function setImagePlaceholder(value) {
  if (window.scrollY >= value) {
    imgPlaceholder.classList.add(
      "fixed",
    );
  } else {
    imgPlaceholder.classList.remove(
      "fixed",
    );
  }
}

function showImagePlaceholder() {
  if (window.innerWidth >= 1280) {
    setImagePlaceholder(2000);
  }
  if (window.innerWidth >= 1024) {
    setImagePlaceholder(1950);
  } 
  windowScroll(showImagePlaceholder);
}

window.onscroll = function () {
  /**
   * hide or show navbar depending on page scroll
   */
  const currentScrollPos = window.scrollY;
  // scroll up
  if (prevScrollpos > currentScrollPos) {
    headerNavbar.style.top = "0";
    headerNavbar.classList.add("bg-nav");
  }
  // scroll down
  else {
    headerNavbar.style.top = "-90px";
  }

  /**
   * not scrolled yet / on the top position
   */
  if (currentScrollPos === 0) {
    headerNavbar.classList.remove("bg-nav");
  }

  prevScrollpos = currentScrollPos;
};
