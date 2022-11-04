const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')
// console.log(ingridEl);

const makeCard = (elem => {
  const liEl = document.createElement('li')
  liEl.textContent = elem
  liEl.classList.add('item')
  return liEl;
  
})

const listElLi = ingredients.map(el => {
  return makeCard(el); }
)
console.log(listElLi);

ingredientsEl.append(...listElLi)
  
