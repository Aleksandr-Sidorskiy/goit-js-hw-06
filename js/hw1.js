// =========завдання №1=========

const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);

const amountEl = document.querySelectorAll(".item > ul");
amountEl.forEach(category => {
  console.log(`Category:${category.previousElementSibling.textContent}`);
 console.log(`Elements:${category.children.length}`)
})


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


// console.log(addLi);
addLi.append(...addElement);


// =========завдання №3=========
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const galleryEl = document.querySelector(".gallery");
galleryEl.style.display = "flex";
galleryEl.style.justifyContent = "space-around";
// console.log(galleryEl);

const imagesEl = images.map((image )=> `<li> <img src = ${image.url}  alt = ${image.alt} width = 360px ></li>`)
  .join("");
// console.log(imagesEl);
galleryEl.insertAdjacentHTML("afterbegin", imagesEl);
  
// =========завдання №4=========


const counterValue = function () {
  document.querySelector("#value")
};
// console.log( counterValue)
const incrementEl = function (value) { 
  value += 1;
  document.querySelector('[increment]');
};
// console.log( incrementEl)
const decrementEl = function (value) {
  value -= 1;
  document.querySelector('[decrement]');
 };  
// console.log( decrementEl)
