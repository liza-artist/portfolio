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

