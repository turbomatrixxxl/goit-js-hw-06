const form = document.querySelector(".login-form");

const emailInput = form.querySelector(`input[name="email"]`);
// console.log(emailInput);

const passwordInput = form.querySelector(`input[type="password"]`);
// console.log(passwordInput);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("All fields must be completed");
  }
  const formElements = event.target.elements;
  const email = formElements.email.value;
  //   console.log(email);

  const password = formElements.password.value;
  //   console.log(password);

  const formValues = {
    email: `${email}`,
    password: `${password}`,
  };
  console.log(formValues);
  event.target.reset();
});
