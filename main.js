import { data } from './getData.js'
const cards = document.querySelector('.cards')

const drinksData = data();
drinksData.forEach((card) => {

  const div = document.createElement('div');
  div.className = 'card';
  cards.appendChild(div)
  const image =document.createElement('img');
  image.src = card.strDrinkThumb 
  image.style.width = "250px"
  div.appendChild(image)
  const title = document.createElement('div');
  title.className = 'title';
  title.innerHTML = card.strDrink
  div.appendChild(title)
    
    
});