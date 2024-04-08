const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");
// console.log(inputLength);

input.addEventListener("blur", (event) => {
  //   event.preventDefault();
  if (event.target.value.length == inputLength) {
    input.id = "validation-input.valid";
    console.log(input.id);
    console.log(input);
  } else {
    input.id = "validation-input.invalid";
    console.log(input.id);
    console.log(input);
  }
});
