// Opens hamburger menu
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}

// Closes Hamburger Menu when clicking the navLink
const navLink = document.querySelectorAll("navigation-list__item");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}