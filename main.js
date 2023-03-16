import { data } from './getData.js'
const cards = document.querySelector('.cards')
const search = document.querySelector('input');


const drinksData = data();
const result =drinksData.forEach((card) => {

  const div = document.createElement('div');
  div.className = 'card';
  cards.appendChild(div)
  const image =document.createElement('img');
  image.src = card.strDrinkThumb 
  image.style.width = "100%";
  image.style.height = '100%';
  div.appendChild(image)
  const title = document.createElement('div');
  title.className = 'title';
  title.innerHTML = card.strDrink
  div.appendChild(title);
    
})


search.addEventListener("keyup", (event)=>{
    drinksData.forEach((item) =>{
        const value = search.value.toLowerCase();
        const compareValue = (item.strDrink).toLowerCase();
        if(compareValue.includes(value)){
            //console.log(value)
        }
    })
})
    