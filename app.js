const hamburgerMenu = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const moon = document.querySelector("#moon");
const hLinks = document.querySelectorAll("#hLink");
const body = document.querySelector("body");

hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("bg-white");
});

moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});

hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburgerMenu.classList.toggle("bg-white");
  });
});
