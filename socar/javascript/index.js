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
const cell = document.querySelector(".cell-off");

hamburger.addEventListener("click", () => {
    if (upBar.classList.contains("up-basic")) {
        logoImg.src = "photo/logo-blue.svg";
        upBar.classList.add("up-act");
        upBar.classList.remove("up-basic");
        upBar.classList.remove("white-color");
        cell.classList.add("cell-on");
        cell.classList.remove("cell-off");
        downBar.classList.add("down-act");
        downBar.classList.remove("down-basic");
        downBar.classList.remove("white-color");
    } else {
        logoImg.src = "photo/logo-w.svg";
        upBar.classList.add("up-basic");
        upBar.classList.remove("up-act");
        upBar.classList.remove("point-color");
        cell.classList.add("cell-off");
        cell.classList.remove("cell-on");
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

// const ob = new IntersectionObserver((x) => {
//     x.forEach((x) => {
//         if (x.isIntersecting) {
//             if(x.target.contains(''))
//         }
//     });
// });
