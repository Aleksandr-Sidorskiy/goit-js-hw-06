
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