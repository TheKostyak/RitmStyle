const burger = document.getElementById("burger");
const navLinks = document.getElementsByClassName("nav__links");
const burgerItem = document.querySelectorAll(".nav__item");
burger.addEventListener("click", () => {
    navLinks[0].classList.toggle("nav__active");
    burger.classList.toggle("burger__active");
});
burgerItem.forEach(item => {
    item.addEventListener("click", () => {
        burger.classList.toggle("burger__active");
        navLinks[0].classList.toggle("nav__active");
    });
});