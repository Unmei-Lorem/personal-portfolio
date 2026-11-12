
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const themeToggle = document.getElementById("theme-toggle");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");
    const icon = themeToggle.querySelector("img");

    icon.src = isDarkMode ? "image/sun.png" : "image/moon.png";

    themeToggle.setAttribute(
        "aria-label",
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
    );
});
