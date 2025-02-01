const hamburgerIcon = document.querySelector("#hamburger-icon");
const nav = document.querySelector("nav");
const main = document.querySelector("main");


hamburgerIcon.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    main.classList.toggle("nav-open-main");
    hamburgerIcon.classList.toggle("nav-open-icon");
});
function myFunction(x) {
    x.classList.toggle("change");
};