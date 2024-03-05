// NAV MENU BEHAVIOR

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// show nav menu
if (navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}

// hidden nav menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

//  remove nav menu when clicked nav link
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
    console.log("linkAction");
}

navLinks.forEach(n => n.addEventListener('click', linkAction));


