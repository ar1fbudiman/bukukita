// When the user scrolls the page, execute scrollFunction
window.onscroll = function () {
  scrollFunction();
};

// Get the navbar
var navbar = document.querySelector("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction() {
  const footerOffset = 1543;
  if (window.pageYOffset > sticky) {
    navbar.classList.add("blur-bg");
  } else {
    navbar.classList.remove("blur-bg");
  }
}

// Toggle hamburger menu
const toggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".nav-item_container");

toggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
