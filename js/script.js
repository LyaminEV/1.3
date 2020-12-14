if (screen.width < 768) {
    let mySwiper = new Swiper('.brands__container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 16,
        loop: true,
        slidesPerView: 'auto',
    });
}
let brandList = document.querySelector('.brands__list');
let button = document.querySelector('.brands__button');
let buttonText = button.textContent = 'Показать все';
button.addEventListener('click', function () {
    if (buttonText  === 'Показать все') {
        brandList.classList.add('brands__list--open');
        button.textContent = 'Скрыть';
    } else {
        brandList.classList.remove('brands__list--open');
        button.textContent = 'Показать все';
    }
});

