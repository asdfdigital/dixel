const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav');
const yellowLine = document.querySelector('.yellow-line');
const navLink = document.querySelectorAll('nav ul li a');

const body = document.querySelector('body');

let toggleBtn = document.querySelector('.dark-mode-toggle');
let toggleHandle = document.querySelector('.toggler');
let logo = document.querySelectorAll('.logo');
let menuBtnDualLines = document.querySelector('.menu-btn-wrapper .menu-btn .dual-lines');

// navbar fixed

window.addEventListener('scroll', ()=> {
    if (window.scrollY > 220) {
        document.querySelector('header').classList.add('header-fixed')  
    } else {
        document.querySelector('header').classList.remove('header-fixed') 
    }
})

// menu

menuBtn.addEventListener('click', menuOpen);

function menuOpen() {
    navMenu.classList.toggle('nav-open');
    yellowLine.classList.toggle('yellow-line-shift');
}
navLink.forEach(element => {
    element.addEventListener('click', ()=> {
        navMenu.classList.remove('nav-open');
        yellowLine.classList.remove('yellow-line-shift');
    })
})

// dark mode

if (localStorage.getItem('dark-mode', true)) {
    darkModeFunc();
}

toggleBtn.addEventListener('click', ()=> {
    darkModeFunc();
})

function darkModeFunc () {
    console.log('true');
    toggleHandle.classList.toggle('toggle-on');
    document.documentElement.toggleAttribute("data-theme-dark");
    if (document.documentElement.hasAttribute('data-theme-dark')) {
        logo.forEach(element => {
            element.setAttribute('src', 'images/assets/dixel_logo_white.svg');
        });
        menuBtnDualLines.setAttribute('src', 'images/assets/dual-lines-white.svg');
        localStorage.setItem('dark-mode', true);
    }else {
        logo.forEach(element => {
            element.setAttribute('src', 'images/assets/dixel_logo.svg');
        });
        menuBtnDualLines.setAttribute('src', 'images/assets/dual-lines.svg');
        localStorage.removeItem('dark-mode', true);
    };
}

// primary button

document.querySelector('.primary-button').addEventListener('click', ()=> {
    document.querySelector('#portfolio').scrollIntoView();
})

// gallery

let gallery = new SimpleLightbox('.gallery a', {
    loop: false,
    disableRightClick: true,
    maxZoom: 3
});