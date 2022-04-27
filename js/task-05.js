
const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener('input', (event) => {
  if ('input' === "") {
    console.log(outputEl);
   return  outputEl.textContent;
  } else {
    console.log(inputEl);
      outputEl.textContent = event.currentTarget.value;
  }
});
