"use strict"
"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
}
let burgerButton = document.querySelector('.header-top__humburger-btn');
let menuBlock = document.querySelector('.hamburger');
if (isMobile.any()) {
    document.body.classList.add('_touch')

    if (burgerButton && menuBlock) {
        burgerButton.addEventListener("click", function (el) {
            burgerButton.classList.toggle('_open');
            menuBlock.classList.toggle('_open');
            document.body.classList.toggle("_lock");
        })
    }

} else {
    document.body.classList.add('_pc')
}

const menuLinks = document.querySelectorAll('.hamburger__link');


if (menuLinks.length > 0) {
    let onMenuClick = (e) => {
        burgerButton.classList.remove('_open');
        menuBlock.classList.remove('_open');
        document.body.classList.remove("_lock");
        e.preventDefault();
    }

    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuClick);
    });
}