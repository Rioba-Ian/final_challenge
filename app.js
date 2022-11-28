const navItems = document.querySelector('.navbar')

const hamburgerMenu = document.querySelector('.nav-toggle')

hamburgerMenu.addEventListener('click', (e) => {
    navItems.classList.toggle("nav--visible")

})