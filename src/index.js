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

let openModal =   function() {
  document.getElementById("modal").style.top = "0px";
}
let closeModal =   function() {
  document.getElementById("modal").style.top = "-900px";
}

