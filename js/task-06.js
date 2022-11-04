const inputEl = document.querySelector('#validation-input');
// console.log(inputEl);

const onInputElBlur = event => {
    

    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        console.log(5);
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid")
    }

    else if (inputEl.classList.contains("valid")) {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    }
    
}

inputEl.addEventListener("blur", onInputElBlur)