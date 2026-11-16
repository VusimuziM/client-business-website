const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuToggle.querySelector("i");
const header = document.getElementById("header");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-xmark", isOpen);

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

// Close navigation after selecting a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    });
});

// Header shadow when scrolling
window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
});
