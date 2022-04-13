// =========завдання №1=========

// const navEl = document.querySelectorAll('.item');
// console.log('Number of categories:', navEl.length);

// const navElAnimal = document.querySelector('.animals');
// const navElAnimalLength = navElAnimal.children.length;
// console.log(`Category: Animals
// Elements:${navElAnimalLength}`);

// const navElProducts = document.querySelector('.products');
// const navElProductsLength = navElProducts.children.length;
// console.log(`Category: Products
// Elements:${navElProductsLength}`);

// const navElTechnologies = document.querySelector('.technologies');
// const navElTechnologiesLength = navElTechnologies.children.length;
// console.log(`Category: Technologies
// Elements:${navElTechnologiesLength}`);

// =========завдання №2=========

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
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
