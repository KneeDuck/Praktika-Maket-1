function ToggleMenu() {
    document.querySelector('header nav ul').classList.toggle('show');
    document.querySelector('.borgar').classList.toggle('show');
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        1078:{
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
})