let menuBtn = document.querySelector('.menu-btn');
let navMenu = document.querySelector('nav');
let yellowLine = document.querySelector('.yellow-line');
let navLink = document.querySelectorAll('nav ul li a');
let header = document.querySelector('header');
let body = document.querySelector('body');
let seeWorkBtn = document.querySelector('#seeWorkBtn');
let portfolio = document.querySelector('.portfolio')
let splash = document.querySelector('.splash');
let toggleBtn = document.querySelector('.dark-mode-toggle');
let toggleHandle = document.querySelector('.toggler');
let animationClass = document.querySelectorAll('.animate')
let logo = document.querySelectorAll('.logo');
let menuBtnDualLines = document.querySelector('.menu-btn-wrapper .menu-btn .dual-lines')

window.addEventListener('load', ()=> {
    console.log('done');
    splash.style.display = 'none';
    animationClass.forEach(element => {
        element.classList.add('animation-start');
    });
    
});

menuBtn.addEventListener('click', menuOpen);

function menuOpen() {
    navMenu.classList.toggle('nav-open');
    yellowLine.classList.toggle('yellow-line-shift');
    body.classList.toggle('overflow-hidden');
    toggleBtn.classList.toggle('toggle-display')
}
navLink.forEach(element => {
    element.addEventListener('click', ()=> {
        navMenu.classList.remove('nav-open');
        yellowLine.classList.remove('yellow-line-shift');
        body.classList.remove('overflow-hidden');
    })
});

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

seeWorkBtn.addEventListener('click', ()=> {
    portfolio.scrollIntoView();
})

window.addEventListener('scroll', (e)=> {
    if (e.path[1].pageYOffset > 400) {
        header.classList.add('position-fixed');
    }else {
        header.classList.remove('position-fixed');
    }
})

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         console.log('observed')
//     });
//   })

// observer.observe(document.querySelector('.animate'))





let gallery = new SimpleLightbox('.gallery a', {
    loop: false,
    disableRightClick: true,
    maxZoom: 3
});
