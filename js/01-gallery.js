//const basicLightbox = require('basiclightbox')
//import * as basicLightbox from 'basiclightbox'
import { galleryItems } from './gallery-items.js';


const galleryContainer = document.querySelector('.gallery');

const makeGallery = ({preview, original, description}) => {
    const createContainerEl = document.createElement('div');
    createContainerEl.classList.add('gallery__item');

    const linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    linkEl.href = original;

    const imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = preview;
    imgEl.alt = description;
    imgEl.dataset.source = original;

    linkEl.append(imgEl);
    createContainerEl.append(linkEl);
    
    return createContainerEl;
}
const cards = galleryItems.map(makeGallery)

galleryContainer.append(...cards)

;
galleryContainer.addEventListener('click', onGalleryContainerClick)
    ;


function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
        
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

    instance.show()
}
