
const widgetEl = document.querySelector(".widget");
const сhangeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

сhangeColorEl.addEventListener("click", onApplicationBackgraundColor);

function onApplicationBackgraundColor() {
  const colorRandom = getRandomHexColor();
  widgetEl.style.backgroundColor = colorRandom;
  return colorEl.textContent = colorRandom;
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}