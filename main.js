import { data } from './getData.js'
const cards = document.querySelector('.cards')
const search = document.querySelector('input');
const drinksData = data();

//Display every card
function showDrinksOnUI(datas){
  datas.forEach((card) => {


    const div  = document.createElement('div');
    div.className = `card`;
    cards.appendChild(div)
    const image =document.createElement('img');
    image.src = card.strDrinkThumb 
    div.appendChild(image)
    const title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = card.strDrink
    div.appendChild(title);
   
  
  })

}
function searchFilter(inputVal) {
  const filteredDrinks = [];
  drinksData.forEach((item) =>{
      let nameOfDrinks = item.strDrink.toLowerCase()
      if (nameOfDrinks.includes(inputVal.toLowerCase())) {
          filteredDrinks.push(item)
      }
  })
  return filteredDrinks;
}

function clear() {
  while (cards.firstChild) {
      cards.removeChild(cards.firstChild)
  }
}

function clickEvent() {
  if (search.value === '') {
      // console.log('input value is empty')
      clear()
      showDrinksOnUI(drinksData)
  } else {
      const inputValue = search.value
      const drinks = searchFilter(inputValue)
      //console.log(drinks, '<<<drinks')
      clear()
      showDrinksOnUI(drinks)
  }
}
showDrinksOnUI(drinksData);

// input field get triggered
search.addEventListener('keyup', clickEvent)

//-----------------------------------------------------------//
//--------------------------------------------------------------//
//filter search event listerner added

/*let cardList =(document.querySelectorAll('.title'));
let arrayTitles = Array.from(cardList) 
 search.addEventListener('keyup',()=>{
    let value = search.value.toUpperCase();
    
    arrayTitles.forEach((item)=>{
        let itemName = (item.innerHTML).toUpperCase()
        if(itemName.includes(value)){
            item.parentElement.style.display = 'block';
            
        } else {
            item.parentElement.style.display = 'none'
        } 
      
    })
    
 })*/
 //------------------------------------------------//
 //----------------------------------------------------//
 //Event listener to every cards
 
  
    
   
    



    