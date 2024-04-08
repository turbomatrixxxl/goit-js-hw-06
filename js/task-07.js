const input = document.querySelector("#font-size-control");

const span = document.querySelector("#text");

// console.log(input.value);

input.addEventListener("input", (event) => {
  span.style.fontSize = `${input.value}px`;
  //   console.log(input.value);
});
