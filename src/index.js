import './styles/main.scss'

const price = document.querySelectorAll('.pricing-plans__price')

price.forEach((element, index) => {
  if (index % 2 !== 0) {
    element.classList.add('hidden-after');
  }});