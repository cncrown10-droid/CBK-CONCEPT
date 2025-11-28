// Ouverture / fermeture du menu hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    if (navMenu.style.right === "0px") {
        navMenu.style.right = "-250px";
    } else {
        navMenu.style.right = "0px";
    }
});
