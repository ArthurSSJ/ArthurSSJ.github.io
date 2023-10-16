// filtro de projetos
const containerEl = document.querySelector('.projects-container');
var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});

mixer.filter('*');


// toggle navmenu
const navMenu = document.querySelector('.nav-menu')
const navOpenBtn = document.querySelector('.nav-toggle-open')
const navCloseBtn = document.querySelector('.nav-toggle-close')

const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}

const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click', openNavHandler)
navCloseBtn.addEventListener('click', closeNavHandler)


// fecha o navmenu se clicar em qualquer link
const navItems = navMenu.querySelectorAll('a');
if (window.innerWidth < 768) {
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler)
    })
}



// theme toggle
const themeBtn = document.querySelector('.nav-theme-btn');
themeBtn.addEventListener('click', () => {
    let bodyClass = document.body.className;
    if(!bodyClass) {
        bodyClass = 'dark';
        document.body.className = bodyClass;
        // muda o ícone do toggle
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>"

        // salva o tema no local storage do usuário
        window.localStorage.setItem('theme', bodyClass);
    } else {
        bodyClass = '';
        document.body.className = bodyClass;
        // muda o ícone do toggle
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>"

        // salva o tema no local storage do usuário
        window.localStorage.setItem('theme', bodyClass);
    }
}) 

// carrega o tema que usuário escolheu
window.addEventListener('load', () => {
    document.body.className = window.localStorage.getItem('theme');
})


// ================================

var btnAbout = document.getElementById('btnAbout');
var btnTech = document.getElementById('btnTech');
var btnSkills = document.getElementById('btnSkills');

var divAbout = document.getElementById('divAbout');
var divTech = document.getElementById('divTech');
var divSkills = document.getElementById('divSkills');

btnAbout.addEventListener('click', () =>{
    divAbout.style.display='block';
    divTech.style.display='none';
    divSkills.style.display='none';
})
btnTech.addEventListener('click', () =>{
    divAbout.style.display='none';
    divTech.style.display='flex';
    divSkills.style.display='none';
})
btnSkills.addEventListener('click', () =>{
    divAbout.style.display='none';
    divTech.style.display='none';
    divSkills.style.display='block';
})
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os elementos <article> com a classe "about-card"
    var articles = document.querySelectorAll(".about-card");

    // Itera sobre cada elemento <article>"
    articles.forEach(function(article) {
        // Adiciona um ouvinte de evento de clique a cada elemento <article>
        article.addEventListener("click", function() {
            // Remove a classe "active" de todos os elementos <article>
            articles.forEach(function(article) {
                article.classList.remove("ca-active");
            });

            // Adiciona a classe "active" apenas ao elemento clicado
            article.classList.add("ca-active");
        });
    });
});