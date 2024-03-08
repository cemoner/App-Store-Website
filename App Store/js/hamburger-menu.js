var menu_icon = document.querySelector(".hamburger-menu-icon");
var list = document.querySelector(".navigation-list");

menu_icon.addEventListener("click", (a) => {
    list.classList.toggle("nav-opened");
  });