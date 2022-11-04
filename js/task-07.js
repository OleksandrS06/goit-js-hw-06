const inputEl = document.querySelector("#font-size-control");
// console.log(inputEl);
const spanEl = document.querySelector("#text");
// console.log(spanEl);

const onInputElInput = event => {
    spanEl.style.fontSize = inputEl.value + "px"
}

inputEl.addEventListener("input", onInputElInput)
    