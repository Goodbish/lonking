const tabSliders = document.querySelectorAll(".preview-catalog__swiper");

tabSliders.forEach((slider) => {
    new Swiper(slider, {
        slidesPerView: 3,
        spaceBetween: 20,

        pagination: {
            el: ".preview-catalog__pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".preview-catalog__navigation--next",
            prevEl: ".preview-catalog__navigation--prev",
        },

        breakpoints: {
            // when window width is >= 0px
            0: {
                slidesPerView: 1,
            },
            // when window width is >= 991px
            991: {
                slidesPerView: 3,
            },
        },
    });
});

const logosSlider = document.querySelector('.calculator__swiper');

if (logosSlider !== null) {
    new Swiper(logosSlider, {
        navigation: {
            nextEl: ".calculator__navigation--next",
            prevEl: ".calculator__navigation--prev",
        },

        breakpoints: {
            // when window width is >= 0px
            0: {
                slidesPerView: 1,
            },
            // when window width is >= 576px
            576: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    })
}
