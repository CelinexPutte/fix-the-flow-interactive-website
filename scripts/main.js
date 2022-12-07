console.log('hoi')

let menu = document.querySelector('body > header > button')
let closeButton = document.querySelector('.close-menu')
let nav = document.querySelector('nav')

menu.addEventListener('click', menuToggle)
closeButton.addEventListener('click', menuToggle)

function menuToggle() {
    nav.classList.toggle('visible')
}