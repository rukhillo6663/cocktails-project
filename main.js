import { data } from './getData.js'
const cards = document.querySelector('.cards')
const search = document.querySelector('input');
const drinksData = data();

const clearBtn = document.getElementById('clear')
const alcoholicBtn = document.getElementById('alcoholic');
const nonAlcoholicBtn = document.getElementById('nonAlcoholic')

//*****************************************//
//Display every card
function showDrinksOnUI(datas){
  datas.forEach((card) => {


    const div  = document.createElement('div');
    div.className = `card ${card.strDrink}`;
    cards.appendChild(div)
    const image =document.createElement('img');
    image.src = card.strDrinkThumb 
    image.className = 'image';
    div.appendChild(image);
    const title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = card.strDrink
    div.appendChild(title);
   
  
  })

}
//*********************************************//
//Search array filter 
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

function searchEvent() {
  if (search.value === '') {
      // input empty
      clear()
      showDrinksOnUI(drinksData)
  } else {
    //input is not empty case
      const inputValue = search.value
      const drinks = searchFilter(inputValue)
      
      clear()
      showDrinksOnUI(drinks)
  }
}
////////////////////////////////////////////////////

//Alcoholic drinks filter
function alcoholicFilter(drinkList){
  const filteredDrinks =[];
  drinksData.forEach((drink)=>{
     if(drink.strAlcoholic === 'Alcoholic'){
      filteredDrinks.push(drink)
     }
  } )
  return filteredDrinks
}
function alcoholClick(){
  const list = alcoholicFilter(drinksData);
     clear();
     showDrinksOnUI(list)

}

/////////////////////////////////////////////////
function nonAlcoholicFilter(drinkList){
  const filteredDrinks =[];
  drinkList.forEach((drink)=>{
     if(drink.strAlcoholic === 'Non alcoholic'){
      filteredDrinks.push(drink)
     }
  } )
  return filteredDrinks
}
function clear() {
  while (cards.firstChild) {
      cards.removeChild(cards.firstChild)
  }
}


function nonAlcoholClick(){
  const list = nonAlcoholicFilter(drinksData);
     clear();
     showDrinksOnUI(list)

}

//**************************************** *****/
//Select option Event Listener
const select = document.getElementById('category');

select.addEventListener('input',(event)=>{
  const filteredDrinks = []
  const selectedValue = event.target.value;
  drinksData.forEach((drink)=>{
    if(drink.strCategory === selectedValue){
      filteredDrinks.push(drink);
    }
  })
  console.log(filteredDrinks);
  clear();
  showDrinksOnUI(filteredDrinks);
  
  
})

/*********************************************/
//Clear All function 
function clearIt(){
  clear();
  showDrinksOnUI(drinksData)
}

showDrinksOnUI(drinksData);

// input field event listener
search.addEventListener('keyup', searchEvent)
alcoholicBtn.addEventListener('click', alcoholClick);
nonAlcoholicBtn.addEventListener('click', nonAlcoholClick);
clearBtn.addEventListener('click',clearIt);



//Modal Window test
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.createElement('span');
const cardList2 = document.querySelectorAll('.card');
const cardList = Array.from(cardList2);
function clearModal() {
  while (modalContainer.firstChild) {
      modalContainer.removeChild(modalContainer.firstChild)
  }
}

cardList.forEach((tab, index)=>{
  tab.addEventListener('click',(event)=>{
    
    let clonedObject = { ...drinksData[index] }
    clearModal()
    
  
    const modalItem = document.createElement('div');
    modalItem.className = 'modal-item ';
    const leftBox = document.createElement('div');
    leftBox.className = 'left-box'
    const image =document.createElement('img');
    
    image.src = clonedObject.strDrinkThumb;
    image.className = 'modal-image';
    leftBox.appendChild(image)
    const rightBox = document.createElement('div');
    rightBox.className = 'right-box';
    rightBox.appendChild(document.createTextNode(`1)Instruction: ${clonedObject.strInstructions}`));
    
    modalItem.appendChild(leftBox);
    modalItem.appendChild(rightBox);
    
    modalContainer.style.display = 'block';
    modalContainer.appendChild(modalItem)
    
    /*modalItem.appendChild(image)*/
      
      console.log( modalContainer, clonedObject);
  })
  
})
window.addEventListener('click', (event)=>{
  if(event.target === modalContainer){
    modalContainer.style.display = 'none'
  }
})
  
    
   
    



    