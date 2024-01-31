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

const facesOfWorld = [
    'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
    'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  ]

let counter = 1;
const currentImg = document.querySelector("img");
const changePage = document.getElementById("changePage");

function nextBtn() {
  if (counter < 5) {
    currentImg.src = facesOfWorld[counter];
    counter++;
    changePage.innerText = `${counter} of 5`;
    }
}

function prevBtn() {
  if (counter > 0) {
    changePage.innerText = `${counter} of 5`;
    counter--;
    currentImg.src = facesOfWorld[counter];
    }
}

function darkMode() {
  const dark = document.querySelector("link");
  dark.href = "/detail-page-darkmode.css";
}
    
function lightMode() {
  const light = document.querySelector("link");
  light.href = "/faces-of-the-world-detail-page.css";
}