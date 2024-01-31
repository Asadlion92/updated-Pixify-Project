//Mobile Menu 
  
const hamburgerMenu = document.querySelector("#hamburger-menu");
const header = document.querySelector("header");
const navbar = document.querySelector("nav");

const openMenu = () => {
  header.classList.toggle("mobile-header");
  navbar.classList.toggle("mobile-menu");
  navbar.classList.toggle("browser-menu");
  //The browser-menu is the default. When user clicks burger icon, the browser-menu disappears and the mobile-menu takes its place
};
  
hamburgerMenu.onclick = openMenu;

function darkMode() {
  const dark = document.querySelector("link");
  dark.href = "/about-darkmode.css";
}
    
function lightMode() {
  const light = document.querySelector("link");
  light.href = "/about.css";
}