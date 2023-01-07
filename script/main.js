let menuBtn = document.querySelector('.menu-btn');
let navMenu = document.querySelector('nav');
let yellowLine = document.querySelector('.yellow-line');

menuBtn.addEventListener('click', menuOpen);

function menuOpen() {
    navMenu.classList.toggle('nav-open');
    yellowLine.classList.toggle('yellow-line-shift')
}

