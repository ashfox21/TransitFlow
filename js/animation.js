"use strict"

const animItems = document.querySelectorAll(".animation__fade-in--up");

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        animItems.forEach(el => {
            const elHeight = el.offsetHeight,
                elOffset = offset(el).top,
                animstart = 4;


            let animItemPoint = window.innerHeight - elHeight / animstart;
            if (elHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animstart;
            }

            if ((scrollY > elOffset - animItemPoint) && scrollY < (elOffset + elHeight)) {
                el.classList.add('animation__start');
            } else {
                el.classList.remove('animation__start');
            }
        })
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}


