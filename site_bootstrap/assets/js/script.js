// navbar sticky
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 114);
})


// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// modal do navbar (gambiarra)
var popup = document.getElementById('nav__popup');
var display = 1;

function hideShow() {
    if (display == 1) {
        popup.style.visibility = 'visible';
        display = 0;
    } else {
        popup.style.visibility = 'hidden';
        display = 1;
    }
}