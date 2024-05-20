
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    if (window.pageYOffset > window.innerHeight / 2) {
        nav.style.backgroundColor = "#1953c7";
    } else {
        nav.style.backgroundColor = "transparent";
    }
});
