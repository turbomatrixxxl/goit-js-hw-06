function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");

const input = controls.querySelector(`input[type="number"]`);

const buttons = controls.querySelectorAll(`button`);
// console.log(buttons);

const createBtn = buttons[0];
// console.log(createBtn);

const destroyBtn = buttons[1];
// console.log(destroyBtn);

const divContainer = document.querySelector("#boxes");

const color = getRandomHexColor();
const colors = [];

colors.push(color);
// console.log(color);

const addDiv = [];
let size = [];
let dim = 30;

size.push(dim);
// console.log(size);

createBtn.addEventListener("click", () => {
  for (let index = 0; index <= input.value - 2; index++) {
    dim += 10;
    size.push(dim);
    // console.log(size);
  }

  for (let index = 0; index <= input.value - 2; index++) {
    colors.push(getRandomHexColor(index));
    // console.log(colors);
  }

  for (let index = 0; index <= input.value - 1; index++) {
    addDiv.push(`<div style="background-color:${colors[index]}; width:${size[index]}px; height:${size[index]}px" class="div${index}">b${index}</div>
`);
    divContainer.insertAdjacentHTML("beforeend", addDiv[index]);
  }

  // console.log(addDiv.length);
  // console.log(colors.length);
  // console.log(divContainer);
});

destroyBtn.addEventListener("click", (event) => {
  divContainer.innerHTML = "";
  input.value = "";
});
