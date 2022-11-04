function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor());
const btnEl = document.querySelector(".change-color");
// console.log(btnEl);
const bodyEl = document.querySelector("body");
console.log(bodyEl);
const spanEl = document.querySelector(".color");
// console.log(spanEl);

const onBtnElClick = event => {
    bodyEl.style.backgroundColor = getRandomHexColor()
    spanEl.textContent = bodyEl.style.backgroundColor
    
  // console.log(getRandomHexColor());
  }
 

btnEl.addEventListener('click', onBtnElClick)
// console.log(getRandomHexColor());