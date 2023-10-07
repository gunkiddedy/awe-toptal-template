const navbarBackdrop = document.getElementById("navbarBackdrop");
const sidenav = document.getElementById("sidenav");

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