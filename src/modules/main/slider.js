new Swiper(".screen__swiper", {
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper("#main-swiper", {
    slidesPerView: 2,
    spaceBetween: 23,

    breakpoints: {
    // when window width is >= 0px
        0: {
            slidesPerView: 1,
            navigation: false,
            pagination: {
                el: ".videos__pagination",
            },
        },
        // when window width is >= 991px
        991: {
            slidesPerView: 2,
            spaceBetween: 23,
            navigation: {
                nextEl: ".videos__navigation--next",
                prevEl: ".videos__navigation--prev",
            },
        },
  },
});

new Swiper(".news__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination",
    },
});
