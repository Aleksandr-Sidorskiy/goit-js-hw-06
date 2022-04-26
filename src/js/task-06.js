 const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener("blur", () => {
  console.log(validationInputEl.value.length);
  if (validationInputEl.value.length == validationInputEl.dataset.length) { 
    validationInputEl.classList.remove('invalid');
    validationInputEl.classList.add('valid');
  } else {
    validationInputEl.classList.add('invalid');
    validationInputEl.classList.remove('valid');
  }
});
