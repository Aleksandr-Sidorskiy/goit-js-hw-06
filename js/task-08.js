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
