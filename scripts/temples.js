document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        if (navMenu.classList.contains("open")) {
            hamburger.textContent = "✖";
        } else {
            hamburger.textContent = "☰";
        }
    });
});
