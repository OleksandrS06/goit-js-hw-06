const listItem = document.querySelectorAll(".item");
console.log("Number of categories:", listItem.length);

const firstHeading = document.querySelectorAll("h2");
const listEl = document.querySelectorAll('.item ul')
// console.log(listEl);


for (let i = 0; i < listEl.length; i += 1){
    console.log("Category:", firstHeading[i].textContent);
    console.log('Elements:', listEl[i].children.length);
}
    
    









