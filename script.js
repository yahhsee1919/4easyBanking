const btn = document.querySelector(".btn");
const mobileMenu = document.querySelector(".mobile-menu");
const heroImg = document.querySelector(".heroImg");

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  mobileMenu.classList.toggle("hidden");
}
mobileMenu.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
  mobileMenu.classList.add("hidden");
}
