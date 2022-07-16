import {showMenu, hiddenMenu} from "./script.js";

let btnMenu = document.querySelector(".button-menu");
let menu = document.querySelector(".main-container--hide");
let btnPageUp = document.querySelector(".btn-page-up");

//button mouse press
btnMenu.addEventListener("pointerdown", (event) => {
    if(menu.classList.contains("main-container--hide"))
        showMenu();
    else
        hiddenMenu();
});

//button page up
btnPageUp.addEventListener("pointerdown", (event) => {
    window.scrollTo(0, 0);
});