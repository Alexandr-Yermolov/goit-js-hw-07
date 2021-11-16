//import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const makeGallery = ({preview, original, description}) => {

    const linkEl = document.createElement('a');
    linkEl.classList.add('gallery__item');
    linkEl.href = original;

    const imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = preview;
    imgEl.alt = description;
    imgEl.dataset.source = original;

    linkEl.append(imgEl);
        
    return linkEl;
}
const cards = galleryItems.map(makeGallery)

galleryContainer.append(...cards);

galleryContainer.addEventListener('click', onGalleryContainerClick);


function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
        
    let gallery = new SimpleLightbox('.gallery a');
gallery.on('captionsData', function () {

});
}
