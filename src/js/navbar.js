import renderHomeShows from './show.js';


const filterForm = document.querySelector('#form-filter');
const filterInput = document.querySelector('#input-nav');

page('/details/:id', () => {
    console.log('Route /');
});
page();

filterForm.addEventListener('submit', async evt => {
    evt.preventDefault();
    renderHomeShows(filterInput.value);
});


/*details.addEventListener()*/