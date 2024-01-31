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

const natureAdv = [
  'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
  'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
]

let counter = 1;
const currentImg = document.querySelector("img");
const changePage = document.getElementById("changePage");

function nextBtn() {
  if (counter < 5) {
    currentImg.src = natureAdv[counter];
    counter++;
    changePage.innerText = `${counter} of 5`;
    }
}

function prevBtn() {
  if (counter > 0) {
    changePage.innerText = `${counter} of 5`;
    counter--;
    currentImg.src = natureAdv[counter];
    }
}

function darkMode() {
  const dark = document.querySelector("link");
  dark.href = "/detail-page-darkmode.css";
}

function lightMode() {
  const light = document.querySelector("link");
  light.href = "/nature-adventures-detail-page.css";
}
