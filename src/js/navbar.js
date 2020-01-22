import renderHomeShows from './show.js';
import storage from './storage.js';

export const INPUT_STORAGE__ID = 'navbar-input';
export const STORAGE_TYPE = 'lStorage';


const { setItem, getItem } = storage(STORAGE_TYPE)

const filterForm = document.querySelector('#form-filter');
const filterInput = document.querySelector('#input-nav');

filterInput.value = getItem(INPUT_STORAGE__ID);

filterForm.addEventListener('submit', async evt => {
    evt.preventDefault();
    renderHomeShows(filterInput.value);
    setItem(INPUT_STORAGE__ID, filterInput.value);
    const noImg = document.querySelector('.img-section');
    noImg.innerHTML = `<div class="img-section"></div>`;
});


/*details.addEventListener()*/