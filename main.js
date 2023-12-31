import './style.css'
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";


const header = document.querySelector("header");
header.innerHTML = Header();
const main = document.querySelector("main");
main.innerHTML = Main();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
   const disclaimerButton = document.getElementById("disclaimerButton");
   const popup = document.querySelector(".disclaimer-popup");
   const overlay = document.querySelector(".overlay");
   const closeButton = popup.querySelector(".close-button");
 
   disclaimerButton.addEventListener("click", () => {
     popup.style.display = "block";
     overlay.style.display = "block";
   });
 
   overlay.addEventListener("click", () => {
     popup.style.display = "none";
     overlay.style.display = "none";
   });
 
   closeButton.addEventListener("click", () => {
     popup.style.display = "none";
     overlay.style.display = "none";
   });
 
   popup.addEventListener("click", (event) => {
     if (!event.target.closest(".disclaimer-popup-content")) {
       popup.style.display = "none";
       overlay.style.display = "none";
     }
   });
 });
 