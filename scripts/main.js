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


var modal = document.querySelector('#modal');
let closeModal = document.querySelector('.close-popup')
let openModal = document.querySelector('.pop-up-test')

openModal.addEventListener('click', showPopupClick)
closeModal.addEventListener('click', closePopupClick)

function showPopupClick() {
    modal.showModal()
    modal.classList.add('show-dialog')
}

function closePopupClick() {
    modal.close()
    modal.classList.remove('show-dialog')
}
