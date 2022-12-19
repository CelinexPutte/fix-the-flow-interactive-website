console.log('hoi')

let menu = document.querySelector('body > header > button')
let closeButton = document.querySelector('.close-menu')
let nav = document.querySelector('nav')

menu.addEventListener('click', menuToggle)
closeButton.addEventListener('click', menuToggle)

function menuToggle() {
    nav.classList.toggle('visible')
}

// Foutmelding in input veld
// Werkt nog niet
// let invalid = document.querySelector('form')

// invalid.addEventListener('invalid', errorColor)

// function errorColor() {
//     invalid.classList.add('input-invalid')
// }


// Zoom voor button
let submit = document.querySelector('.submit-button')

submit.addEventListener('mouseover', zoomToggle)
submit.addEventListener('mouseout', zoomToggle)
// menu.addEventListener('mouseover', zoomToggle)
// menu.addEventListener('mouseout', zoomToggle)
// closeButton.addEventListener('mouseover', zoomToggle)
// closeButton.addEventListener('mouseout', zoomToggle)

function zoomToggle() {
    submit.classList.toggle('zoom-on-hover')
    // menu.classList.toggle('zoom-on-hover')
    // closeButton.classList.toggle('zoom-on-hover')
}