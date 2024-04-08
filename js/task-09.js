function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// console.log(getRandomHexColor());

const body = document.querySelector("body");

const changeColorBtn = document.querySelector(".change-color");

const span = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
});
