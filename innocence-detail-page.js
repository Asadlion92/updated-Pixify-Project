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

const innocence = [
    'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
    'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
  ]

let counter = 1;
const currentImg = document.querySelector("img");
const changePage = document.getElementById("changePage");

function nextBtn() {
  if (counter < 5) {
    currentImg.src = innocence[counter];
    counter++;
    changePage.innerText = `${counter} of 5`;
  }
}

function prevBtn() {
  if (counter > 0) {
    changePage.innerText = `${counter} of 5`;
    counter--;
    currentImg.src = innocence[counter];
  }
}

function darkMode() {
  const dark = document.querySelector("link");
  dark.href = "/detail-page-darkmode.css";
}
            
function lightMode() {
  const light = document.querySelector("link");
  light.href = "/innocence-detail-page.css";
}
