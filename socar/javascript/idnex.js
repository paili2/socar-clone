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
