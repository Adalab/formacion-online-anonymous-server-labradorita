"use strict";

const menuButton = document.querySelector(".nav-trigger");
const closeButton = document.querySelector(".nav-close");
const menuNav = document.querySelector(".nav");

function clickMenu() {
  menuNav.classList.toggle("menu-hidden");
}

menuButton.addEventListener("click", clickMenu);
closeButton.addEventListener("click", clickMenu);

// Change img to menu img
menuButton.innerHTML = "";
const menuImg = document.createElement("img");
menuImg.setAttribute("src", "images/ico-menu.svg");
menuButton.appendChild(menuImg);

// Change img to close img
closeButton.innerHTML = "";
const closeImg = document.createElement("img");
closeImg.setAttribute("src", "images/ico-close.svg");
closeButton.appendChild(closeImg);

menuNav.classList.add("menu-hidden");
