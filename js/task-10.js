function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtnEl = document.querySelector("button[data-create]");
console.log(createBtnEl);
const destroyBtnEl = document.querySelector("button[data-destroy]")
console.log(destroyBtnEl);

function createBoxes(amount) {
  
}