// =========завдання №1=========

const categoriesEl = document.querySelectorAll('.item');
// console.log('Number of categories:', categoriesEl.length);

const amountEl = document.querySelectorAll(".item > ul");
amountEl.forEach(category => {
//   console.log(`Category:${category.previousElementSibling.textContent}`);
//  console.log(`Elements:${category.children.length}`)
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

const btns = document.querySelector("#counter");
const value = document.querySelector("#value");
const decrement = btns.firstElementChild;
const increment = btns.lastElementChild;
let number = 0;

increment.addEventListener("click",function(){
 number += 1;
  value.innerHTML = number;
      }      
);
decrement.addEventListener('click',function() {
  number -= 1;
  value.innerHTML = number;
})
  // =========завдання №5=========

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener('input', (event) =>
  outputEl.textContent = event.currentTarget.value);


  // =========завдання №6=========

const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener("blur", () => {
  console.log(validationInputEl.value.length);
  if (validationInputEl.getAttribute('data-length') >= validationInputEl.value.length) { 
    validationInputEl.classList.remove('valid');
    validationInputEl.classList.add('invalid');
  } else {
    validationInputEl.classList.remove('invalid');
    validationInputEl.classList.add('valid');
  }
});


  // =========завдання №7=========

const inputElm = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputElm.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}
  // =========завдання №8=========

const formEl = document.querySelector('.login-form');
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log(`email: ${email.value},Password: ${password.value}`);
  event.currentTarget.reset();
});

  // =========завдання №9=========

const widgetEl = document.querySelector(".widget");
const сhangeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

сhangeColorEl.addEventListener("click", onApplicationBackgraundColor);

function onApplicationBackgraundColor() {
  // document.body.style.backgroundColor = getRandomHexColor(); изменяет фон на body
  widgetEl.style.backgroundColor = getRandomHexColor();
  return colorEl.textContent = getRandomHexColor()
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


  // =========завдання №10=========