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

const addDiv = [];
let size = [];
let dim = 30;

const alertContainer = `<p class="alert"></p>
`;
controls.insertAdjacentHTML("beforeend", alertContainer);
const alertMessage = controls.querySelector(".alert");
alertMessage.style.color = "red";

createBtn.addEventListener("click", () => {
  if (!input.value) {
    alertMessage.textContent = "";
    return;
  }
  if (input.value < 1 || input.value > 100) {
    alertMessage.textContent = `Amount must be between 1 and 100...!`;
    input.value = "";
    divContainer.innerHTML = "";
    return;
  }

  if (input.value >= 1 || input.value <= 100) {
    alertMessage.textContent = "";
    create(input.value);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", destroy);

function create(value) {
  for (let index = 0; index < value; index++) {
    dim += 10;
    size.push(dim);
    console.log(size);

    colors.push(getRandomHexColor(index));
    console.log(colors);

    addDiv.push(
      `<div style="background-color:${colors[index]}; width:${size[index]}px; height:${size[index]}px"></div>`
    );
    console.log(addDiv);

    divContainer.insertAdjacentHTML("beforeend", addDiv[index]);
  }

  // console.log(addDiv.length);
  // console.log(colors.length);
  // console.log(divContainer);
}

function destroy() {
  alertMessage.textContent = "";
  divContainer.innerHTML = "";
  input.value = "";
}
