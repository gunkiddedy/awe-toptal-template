// global variable
let prevScrollpos = window.scrollY;
const wiper1 = document.getElementById("wiper1");

const navbarBackdrop = document.getElementById("navbarBackdrop");
const sidenav = document.getElementById("sidenav");

const headerNavbar = document.getElementById("header-navbar");

const imgPlaceholder = document.getElementById("img-placeholder");

const reveals = document.querySelectorAll(".reveal");

/**
 * method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation right before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
 */
const windowScroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

animationFade();
animationWipe();
showImagePlaceholder();

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

/**
 * if scroll y has reachead the minimum height value of 1000,
 * then run the wipe animations
 */
function animationWipe() {
  if (window.scrollY >= 1000) {
    // console.log('wiper up', window.scrollY)
    wiper1.classList.remove("wipe-gone");
    wiper1.classList.add("wipe-left");
  } else {
    // console.log('wiper down', window.scrollY)
    wiper1.classList.remove("wipe-left");
    wiper1.classList.add("wipe-gone");
  }
  windowScroll(animationWipe);
}

// set the image placeholder fixed/relative
function setImagePlaceholder(type, value) {
  if (type.toLowerCase() === "fixed") {
    const screenWidth = window.innerWidth;
    const pageWidth = 1440;
    const leftPosition = (screenWidth / pageWidth) * (100 / 7);
    const leftImage = leftPosition + "%";

    /**
     * set the dinamically left position of placeholder image
     */
    if (screenWidth > pageWidth) {
      imgPlaceholder.style.left = leftImage;
    } else {
      imgPlaceholder.style.left = "7%";
    }

    if (window.scrollY >= value) {
      // console.log('>= 2200')
      imgPlaceholder.classList.remove(
        "relative",
        "opacity-0",
        "transition-all",
        "duration-300"
      );
      imgPlaceholder.classList.add(
        "fixed",
        "opacity-100",
        "transition-all",
        "duration-300",
        "transform",
        "scale-105"
      );
    } else {
      // console.log('< 2200')
      imgPlaceholder.classList.add(
        "opacity-0",
        "transition-all",
        "duration-300",
        "relative"
      );
      imgPlaceholder.classList.remove(
        "fixed",
        "opacity-100",
        "transition-all",
        "duration-300",
        "transform",
        "scale-105"
      );
    }
  } else {
    if (window.scrollY >= value) {
      // console.log('>= 2200')
      imgPlaceholder.classList.add(
        "reveal",
        "fade-left",
        "active",
        "opacity-100",
        "transition-all",
        "duration-300",
        "scale-105"
      );
    }
  }
}

/**
 * show/hide the image placeholder fixed or relative
 */
function showImagePlaceholder() {
  if (window.innerWidth >= 1280) {
    // console.log('2000')
    setImagePlaceholder("fixed", 2000);
  } else if (window.innerWidth >= 1024) {
    // console.log('1950')
    setImagePlaceholder("fixed", 1950);
  } else {
    setImagePlaceholder("relative", 1950);
  }
  windowScroll(showImagePlaceholder);
}

// open mobile menu
function openNav() {
  document.body.style.overflow = "hidden";
  navbarBackdrop.classList.add("fixed", "inset-0", "h-[100vh]");
  sidenav.classList.remove("-top-[500px]");
  sidenav.classList.add("top-0");
}

// close mobile menu
function closeNav() {
  navbarBackdrop.classList.remove("fixed", "inset-0", "h-[100vh]");
  sidenav.classList.remove("top-0");
  sidenav.classList.add("-top-[500px]");
  document.body.style.overflow = "";
}

// call closeNav if window is resized
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1023) {
    console.log("close navbar in size", window.innerWidth);
    closeNav();
  }
});

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
