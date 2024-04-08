const counter = document.querySelector("#counter");

const button = counter.querySelectorAll("button");

console.log(button);

const decrementButton = counter.querySelector("[data-action=decrement]");
decrementButton.id = "decrement";

console.log(decrementButton);

const incrementButton = counter.querySelector("[data-action=increment]");
incrementButton.id = "increment";

console.log(incrementButton);

const spanCounter = counter.querySelector("#value");
console.log(spanCounter);

let counterValue = 0;

const clickHandlerD = () => {
  counterValue -= 1;
  spanCounter.textContent = counterValue;
};

const clickHandlerI = () => {
  counterValue += 1;
  spanCounter.textContent = counterValue;
};

decrementButton.addEventListener("click", clickHandlerD);

incrementButton.addEventListener("click", clickHandlerI);
