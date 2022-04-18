let galleryThumbs = new Swiper(".product__bottom", {
    spaceBetween: 24,
    slidesPerView: 3,
    watchSlidesProgress: true,    
    allowTouchMove: false,
    
    breakpoints: {
        // when window width is >= 0px
        0: {
            slidesPerView: 2,
        },
        // when window width is >= 991px
        991: {
            slidesPerView: 3,
        },
    },
});

let galleryTop = new Swiper(".product__top", {
    allowTouchMove: false,
    thumbs: {
        swiper: galleryThumbs,
    },

    navigation: {
        nextEl: ".product__navigation--next",
        prevEl: ".product__navigation--prev",
    },
});

new Swiper('.other__swiper', {
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
})
