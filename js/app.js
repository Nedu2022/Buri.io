const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const emailField =




menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
  navbar.classList.toggle("active");
});