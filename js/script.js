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
let button = document.querySelector('.more-button');

button.addEventListener('click', function () {
    let buttonText = button.textContent;
    if (buttonText  === 'Показать все') {
        brandList.classList.add('brands__list--open');
        button.textContent = 'Скрыть';
        button.classList.add('rotate');
    } else {
        brandList.classList.remove('brands__list--open');
        button.textContent = 'Показать все';
        button.classList.remove('rotate');
    }
});

