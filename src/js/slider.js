const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 70,
    loop: true,
    freeMode: true,
    centeredSlides: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: "bullets",
        clickable: true,
    },
});