/* header */

const header = document.querySelector("header");
const logoImg = document.querySelector(".logo > img");

const upbar = document.querySelector(".upbar");
const downbar = document.querySelector(".downbar");

window.addEventListener("scroll", () => {
    if (scrollY == 0) {
        header.classList.add("offBack");
        header.classList.remove("showBack");
        logoImg.src = "photo/logo-w.svg";

        upbar.classList.add("white-color");
        upbar.classList.remove("point-color");
        downbar.classList.add("white-color");
        downbar.classList.remove("point-color");
    } else {
        header.classList.add("showBack");
        header.classList.remove("offBack");
        logoImg.src = "photo/logo-blue.svg";

        upbar.classList.add("point-color");
        upbar.classList.remove("white-color");
        downbar.classList.add("point-color");
        downbar.classList.remove("white-color");
    }
});

const hamburger = document.querySelector(".hamburger");
const upBar = document.querySelector(".upbar");
const downBar = document.querySelector(".downbar");

hamburger.addEventListener("click", () => {
    logoImg.src = "photo/logo-blue.svg";
    if (upBar.classList.contains("up-basic")) {
        upBar.classList.add("up-act");
        upBar.classList.remove("up-basic");
        upBar.classList.remove("white-color");
        downBar.classList.add("down-act");
        downBar.classList.remove("down-basic");
        downBar.classList.remove("white-color");
    } else {
        upBar.classList.add("up-basic");
        upBar.classList.remove("up-act");
        upBar.classList.remove("point-color");
        downBar.classList.add("down-basic");
        downBar.classList.remove("down-act");
        downBar.classList.remove("point-color");
    }
});

/* menu */
const menu = document.querySelector(".menu");
const menuBar = document.querySelector(".menu-off");
hamburger.addEventListener("click", () => {
    if (menuBar.classList.contains("menu-off")) {
        menuBar.classList.add("menu-on");
        menuBar.classList.remove("menu-off");
    } else {
        menuBar.classList.add("menu-off");
        menuBar.classList.remove("menu-on");
    }
});

/* app-download */

// const appBox = document.querySelector(".app-box");
// const appText = document.querySelector(".app-text");
// const appAlbum = document.querySelector(".app-album");

// window.
