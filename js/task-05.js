const input = document.querySelector("#name-input");
console.log(input);

const span = document.querySelector("#name-output");
console.log(span.textContent);

input.addEventListener("change", (event) => {
  if (event.target.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = event.target.value;
  }
});
