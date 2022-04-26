const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const addLi = document.querySelector('#ingredients');

const addElement = ingredients.map(text => {
     
  const  addItem = document.createElement('li');
    addItem.classList.add("item");
    addItem.textContent = text; 
    return addItem;
});
console.log(addLi);
addLi.append(...addElement);