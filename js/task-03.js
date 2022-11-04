const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

const createGalleryCard = ({ url, alt } = {}) => {
  return `
 <li>
  <img src = "${url}" alt = "${alt}">
  </li>
  `
}

const galleryCardsEl = images.map(el => {
  return createGalleryCard(el)
})
// console.log(galleryCardsEl);

// galleryEl.innerHTML = galleryCardsEl.join('')

galleryEl.insertAdjacentHTML("afterbegin", galleryCardsEl.join(''))

galleryEl.style.display = 'flex';
galleryEl.style.gap = '30px'
galleryEl.style.listStyle = 'none'
galleryEl.style.alignItems = 'center'

const galleryLiEl = document.querySelectorAll('img');
console.log(galleryLiEl);

const imageWidth = [...galleryLiEl].map(el =>
  el.style.width = '250px')
  






