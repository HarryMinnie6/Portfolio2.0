console.log("ggg");

const hamburgerButton = document.querySelector('.hamburger-button')
const navbarLinks = document.querySelector('.nav-links')
//what happens when you click on the hamburger menu (mobile view)
hamburgerButton.addEventListener('click' , function (e) {
    navbarLinks.classList.toggle('active')
})


//Navigation bar disappears and re-appears on scroll//
let navigationBar = document.querySelector('.navigation-bar')
let lastScrollTop = 0

window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(scrollTop > lastScrollTop) {
        navigationBar.style.top = '-70px'
    } else {
        navigationBar.style.top = '0'
    }
    lastScrollTop = scrollTop
})