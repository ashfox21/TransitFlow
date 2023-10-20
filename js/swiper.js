const windowWidth = window.innerWidth;
const contactSwiperConfig = {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        loop: true,
    }
};

const testimonialSwiperConfig = {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    navigation: {
        nextEl: '.testimonial__btn-next',
        prevEl: '.testimonial__btn-prev',
    }
};

if (windowWidth > 1230) {
    contactSwiperConfig.slidesPerView = 4;
} else if (windowWidth > 950) {
    contactSwiperConfig.slidesPerView = 3;
} else if (windowWidth > 650) {
    contactSwiperConfig.slidesPerView = 2;
} else {
    contactSwiperConfig.slidesPerView = 1;
    contactSwiperConfig.slidesPerGroup = 1;
    contactSwiperConfig.autoplay.delay = 1200;
}

const contactSwiper = new Swiper('.contact__swiper', contactSwiperConfig);

if (windowWidth < 840) {
    testimonialSwiperConfig.slidesPerView = 1;
    testimonialSwiperConfig.slidesPerGroup = 1;
}

const testimonialSwiper = new Swiper('.testimonial__swiper', testimonialSwiperConfig);