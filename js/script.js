let mySwiper = new Swiper('.brands__container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 16,
    loop: true,
    slidesPerView: 'auto',
    breakpoints: {
        768: {
            
            // mySwiper.destroy(
            //     deleteInstance: false,
            // );
        }
    }
});
