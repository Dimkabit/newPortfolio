(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle"), navClose = document.getElementById("nav-close");
    if (navToggle) navToggle.addEventListener("click", (() => {
        navMenu.classList.add("show-menu");
    }));
    if (navClose) navClose.addEventListener("click", (() => {
        navMenu.classList.remove("show-menu");
    }));
    const navLink = document.querySelectorAll(".nav__link");
    const linkActtion = () => {
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("show-menu");
    };
    navLink.forEach((n => n.addEventListener("click", linkActtion)));



    isWebp();
})();

