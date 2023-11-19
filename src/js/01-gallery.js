// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

function createGalleryItem(item) {
    const li = document.createElement('li');
    li.classList.add('gallery__item');
  
    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.href = item.original;
  
    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = item.preview;
    img.alt = item.description;
  
    a.appendChild(img);
    li.appendChild(a);
  
    return li;
  }
  
  const gallery = document.querySelector('.gallery');
  
  gallery.style.listStyle = 'none';

  galleryItems.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    gallery.appendChild(galleryItem);
  });
  
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

console.log(galleryItems);