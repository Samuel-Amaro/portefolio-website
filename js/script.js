export function hiddenMenu() {
    let menu = document.querySelector(".main-container__nav-bar-content");
    menu.classList.remove("main-container__nav-bar-content");
    menu.classList.add("main-container--hide");
}

export function showMenu() {
    let menu = document.querySelector(".main-container--hide");
    menu.classList.remove("main-container--hide");
    menu.classList.add("main-container__nav-bar-content");
}