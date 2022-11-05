function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtnEl = document.querySelector("button[data-create]");
// console.log(createBtnEl);
const destroyBtnEl = document.querySelector("button[data-destroy]")
// console.log(destroyBtnEl);
const newList = document.querySelector("#boxes")
// console.log(newList);
const inputEl = document.querySelector('input[type = "number"]')
console.log(inputEl);

function createBoxes() {
  
  let newDivsList = [];
  let divSize = 30;

  for (let i = 0; i < inputEl.value; i +=1) {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${divSize}px`;
    newDiv.style.height = `${divSize}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    divSize += 10;
    newDivsList.push(newDiv);
}
  
  console.log(newDivsList);
  newList.append(...newDivsList);
}

const destroyBoxes = event => {
  newList.innerHTML = "";
}

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

