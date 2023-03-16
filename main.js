import { data } from './getData.js'
const cards = document.querySelector('.cards')
const search = document.querySelector('input');


const drinksData = data();
const result =drinksData.forEach((card, index) => {

  const div  = document.createElement('div');
  div.className = `card card${index}`;
  cards.appendChild(div)
  const image =document.createElement('img');
  image.src = card.strDrinkThumb 
  div.appendChild(image)
  const title = document.createElement('div');
  title.className = 'title';
  title.innerHTML = card.strDrink
  div.appendChild(title);
 

})
//filter search event listerner added

let cardList =(document.querySelectorAll('.title'));
let arrayTitles = Array.from(cardList) 
 search.addEventListener('keyup',()=>{
    let value = search.value.toUpperCase();
    
    arrayTitles.forEach((item)=>{
        let itemName = (item.innerHTML).toUpperCase()
        if(itemName.includes(value)){
            item.parentElement.style.display = 'block'
        } else {
            item.parentElement.style.display = 'none'
        }
    })
    item.parentElement.style.display = 'block'
 })
    
    
   
    



    