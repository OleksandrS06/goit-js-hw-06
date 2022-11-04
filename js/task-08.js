const formEl = document.querySelector('.login-form');
console.log(formEl);
// const inputEmailEl = document.querySelector('input[type="email"]');
// console.log(inputEmailEl);
// const inputPasswordEl = document.querySelector('input[type="password"]');
// console.log(inputPasswordEl);
// const btnSubmEl = document.querySelector('button[type="submit"]');
// console.log(btnSubmEl);

const onFormSubmit = event => {
    event.preventDefault();
    const {
    elements: { email, password }
  } = event.currentTarget;

    if (email.value === "" || password.value === "") {
      return alert("Please fill in all the fields!");
    }
    const formdata = {
        email: email.value,
        password: password.value
    
    }
    
     event.currentTarget.reset();
    return console.log(formdata);
  }


// const onInputEmailInput = event => {
//     if (event.currentTarget.value === "") {
//         return alert("Please fill in all the fields!");
//     }
// }
// inputEmailEl.addEventListener("blur", onInputEmailInput)


formEl.addEventListener("submit", onFormSubmit)