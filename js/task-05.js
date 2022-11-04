const inputEl = document.querySelector('#name-input');
console.log(inputEl);
let spanEl = document.querySelector('#name-output');
console.log(spanEl);

const onInputElInput = event => {
    console.log(event);
    
    // if (event.currentTarget.value === '') {
    //     spanEl.textContent = "Anonymous";
        
    // } else {
    //     spanEl.textContent = event.currentTarget.value;
    // }
    const spanText = event.currentTarget.value === '' ? spanEl.textContent = "Anonymous": spanEl.textContent = event.currentTarget.value;
    return spanText
}
inputEl.addEventListener("input", onInputElInput)