import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { pixabay } from 'pixabay-api';
import { Pixabay } from './js/pixabay';

const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('input[name="searchQuery"]');
const galleryEl = document.querySelector('.gallery');

const pixabay = new Pixabay();

const renderGalleryCard = (
) => {
  return `
  <div class="photo-card">
  <img src='' alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>`
}

const handleSearchPhotos = event => {
  event.preventDefault();

  const searchQuery = inputEl.value.trim();
  pixabay.q = searchQuery;

  pixabay.page += 1;

  pixabay.fetchPhotos().then(data => {
    console.log(data.hits)
    galleryEl.insertAdjacentHTML('beforeend', renderGalleryCard(data))
  })
}

formEl.addEventListener('submit', handleSearchPhotos)