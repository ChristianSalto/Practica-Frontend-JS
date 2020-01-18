import api from './api.js';
import dateFilter from './filterDate.js'

const { getShows, getShowsByDate } = api();

const templateShow = show => {
    return `
  <ul>
    <li>${show.name}<a href="/details/${show.beerId}" id="details">detalles</a></li>
 </ul>
    `;

    /* `
 <main>
    <div class="show-section">
    <header class="name-beer">
        <h2>${show.name}</h2>
    </header>
    <div class="description-beer">
        <h3>Descripcion: </h3>
        <p>${show.description}
        </p>
    </div>
    <a href="">Mas detalles</a>
   </div>
 </main>
    `;*/
}

const renderShows = (element, items) => {
    const htmlShows = items.map(function (show) {
        return templateShow(show);
    }).join('');
    element.innerHTML = htmlShows;
    const details = document.getElementById('#details');
    console.log(details);
};

const renderHomeShows = async text => {
    try {
        const shows = await getShowsByDate();
        let showsFilter = await dateFilter(shows, text);
        if (showsFilter.length === 0) {
            showsFilter = await getShows(text);
        }
        const showSection = document.querySelector('#div-section');
        renderShows(showSection, showsFilter);
    } catch (err) {
        console.log(err);
    }
};


export default renderHomeShows;