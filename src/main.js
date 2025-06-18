import { fetchImages } from './js/pixabay-api.js';
import {
  renderGallery,
  clearGallery,
  appendToGallery,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showLoader() {
  loader.innerHTML =
    '<span class="lds-ring"><span></span><span></span><span></span><span></span></span>';
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
  loader.innerHTML = '';
}

function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}

function showInfo(message) {
  iziToast.info({
    title: 'Info',
    message: message,
    position: 'topRight',
  });
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const query = formData.get('searchQuery').trim();

  if (!query) {
    showError('Please enter a search query!');
    return;
  }

  clearGallery(gallery);
  showLoader();

  fetchImages(query)
    .then(data => {
      hideLoader();

      if (data.hits.length === 0) {
        showInfo(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      const markup = renderGallery(data.hits);
      appendToGallery(gallery, markup);
      lightbox.refresh();
    })
    .catch(error => {
      hideLoader();
      showError('Something went wrong. Please try again!');
      console.error('Error:', error);
    });
}
