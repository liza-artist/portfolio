import 'normalize.css'
import './styles/main.scss'

const price = document.querySelectorAll('.pricing-plans__price')

price.forEach((element, index) => {
  if (index % 2 !== 0) {
    element.classList.add('hidden-after');
  }});



// поворот стрелки при выборе соц сети  
const arrow = document.querySelector('.form__social-networks-arrow');
const select = document.querySelector('.form__social-networks');

let isRotated = false;

function toggleRotation() {

    isRotated = !isRotated;

    arrow.style.transform = isRotated ? 'rotate(180deg)' : 'rotate(0deg)';
}

arrow.addEventListener('click', toggleRotation);
select.addEventListener('click', toggleRotation);


// Menu
const menuButton = document.querySelector('.header-mobile__burger')
const menuClose = document.querySelector('.menu__close')

let openMenu =   function() {
  document.getElementById("menu").style.top = "0px";
}
let closeMenu =   function() {
  document.getElementById("menu").style.top = "-900px";
}

menuButton.addEventListener('click',openMenu)
menuClose.addEventListener('click',closeMenu)



//Modal
const openModalBtn = document.querySelectorAll('.pricing-plans__get-offer, .hero__get-offer')
const closeModalBtn = document.querySelector('.modal__close')

const modal = document.querySelector('.modal')
const body = document.querySelector('.body')

function openModal () {
  modal.classList.add('modal__show')
  document.documentElement.classList.add('modal-show', 'lock')
  body.style.paddingRight = '15px'
}

function closeModal () {
  modal.classList.remove('modal__show')
  document.documentElement.classList.remove('modal-show', 'lock')
  body.style.paddingRight = '0px'
}

openModalBtn.forEach((item) => {
  item.addEventListener('click', openModal)
})

closeModalBtn.addEventListener('click', closeModal)