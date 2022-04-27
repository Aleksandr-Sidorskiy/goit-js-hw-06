
const widgetEl = document.querySelector(".widget");
const сhangeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

сhangeColorEl.addEventListener("click", onApplicationBackgraundColor);

function onApplicationBackgraundColor() {
  const color = getRandomHexColor();
  widgetEl.style.backgroundColor = color;
  return colorEl.textContent = color;
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}