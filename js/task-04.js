let counterValue = 0;

const deleteBtnEl = document.querySelector('button[data-action="decrement"]')
// console.log(deleteBtnEl);

const addBtnEl = document.querySelector('button[data-action="increment"]')
// console.log(addBtnEl);
const counterEl = document.querySelector('#value')


const onDeleteBtnElClick = event => {
// counterEl.textContent = Number(counterEl.textContent - 1)
counterEl.textContent = counterValue -= 1
}

const onAddBtnElClick = event => {
// counterEl.textContent = Number(counterEl.textContent) + 1
    counterEl.textContent = counterValue += 1 
}

addBtnEl.addEventListener('click', onAddBtnElClick);

deleteBtnEl.addEventListener('click', onDeleteBtnElClick)