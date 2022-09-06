const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");


// menuIcon.onclick = () => {
//   menuIcon.classList.toggle
// }

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
  navbar.classList.toggle("active");

  flag = !flag;
  if (!flag) {
    navItems.style.transform = "translateY(0)";
  } else {
    navItems.style.transform = "translateY(-100vh)";
  }
  // overlay.style.background = rgba(10, 10, 10, .75);

  //Animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease-in-out backwards ${
        index / 6 + 0.5
      }s`;
    }
  });
});