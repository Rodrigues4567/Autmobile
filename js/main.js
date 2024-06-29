
const button = document.querySelector('.responsive-btn');
let header = document.querySelector('.header');
let logoHeader = document.querySelector('.logo-header');

button.addEventListener('click', menuShow = () => {
    let responsiveList = document.querySelector('.responsive-menu-list');

    if (responsiveList.classList.contains('open')) {
        responsiveList.classList.remove('open')
        header.classList.remove('menu-change')
        logoHeader.src = '../img/logo.png'
    }
    else {
        responsiveList.classList.add('open')
        header.classList.add('menu-change')
        logoHeader.src = '../img/logo2.png'
    }
})

window.addEventListener('scroll', menuScroll = () => {
    
    if (window.scrollY > 0) {
        header.classList.add('roll')
        logoHeader.src = '../img/logo2.png'
    }
    else {
        header.classList.remove('roll')
        header.classList.remove('menu-change')
        logoHeader.src = '../img/logo.png'
    }
})