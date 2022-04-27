const inputElm = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputElm.addEventListener("input", event => 
  textEl.style.fontSize = event.currentTarget.value + "px"
);
