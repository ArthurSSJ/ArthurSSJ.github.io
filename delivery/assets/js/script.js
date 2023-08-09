// NAVBAR
let button = document.querySelector('[data-mobile-menu]');
let mobileMenu = document.getElementById('mobile-menu');

button.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})

// SLIDE DAS CATEGORIAS
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#menu', {

        autoWidth: true,
        focus: 0,
        type: 'slide',
        pagination: false,
        omitEnd: true,
        arrows: false

    });

    splide.on('overflow', function (isOverflow) {
        splide.options = {
            drag: isOverflow,
        };
    });

    splide.mount();
});

// SLIDE DAS CATEGORIAS
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#categories', {

        autoWidth: true,
        height: '4rem',
        padding: '.5rem',
        focus: 0,
        type: 'slide',
        pagination: false,
        omitEnd: true,
        gap: '.5rem',
        arrows: false

    });

    splide.on('overflow', function (isOverflow) {
        splide.options = {
            drag: isOverflow,
        };
    });

    splide.mount();
});

// SLIDE DOS RECENTES NO MIO DELIVERY
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#recents', {

        autoWidth: true,
        autoHeight: true,
        padding: '1rem',
        focus: 0,
        type: 'slide',
        pagination: false,
        omitEnd: true,
        gap: '1.5rem',
        arrows: false

    });

    splide.on('overflow', function (isOverflow) {
        splide.options = {
            drag: isOverflow,
        };
    });

    splide.mount();
});

// SLIDE DAS CATEGORIAS EMBAIXO DOS RECENTES
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#slide', {

        autoWidth: true,
        autoHeight: true,
        padding: '1rem',
        focus: 0,
        type: 'slide',
        pagination: false,
        omitEnd: true,
        gap: '1.5rem',
        arrows: false

    });

    splide.on('overflow', function (isOverflow) {
        splide.options = {
            drag: isOverflow,
        };
    });

    splide.mount();
});

// SLIDE DOS FILTROS DAS LOJAS
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#filters', {

        autoWidth: true,
        height: '4rem',
        padding: '.5rem',
        focus: 0,
        type: 'slide',
        pagination: false,
        omitEnd: true,
        gap: '.4rem',
        arrows: false

    });

    splide.on('overflow', function (isOverflow) {
        splide.options = {
            drag: isOverflow,
        };
    });

    splide.mount();
});



