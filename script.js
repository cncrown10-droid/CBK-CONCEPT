const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");

function openMenu() {
    navMenu.style.right = "0px";
    hamburger.classList.add("active");
    overlay.classList.add("active");
}

function closeMenu() {
    navMenu.style.right = "-250px";
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
}

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (navMenu.style.right === "0px") {
        closeMenu();
    } else {
        openMenu();
    }
});
