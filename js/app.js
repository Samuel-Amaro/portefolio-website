import {showMenu, hiddenMenu} from "./script.js";

let btnMenu = document.querySelector(".button-menu");
let menu = document.querySelector("nav");

//button mouse press
btnMenu.addEventListener("pointerdown", (event) => {
    if(menu.classList.contains("main-container--hide"))
        showMenu();
    else
        hiddenMenu();
});
