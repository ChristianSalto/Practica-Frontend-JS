import renderHomeShows from './show.js';
import storage from './storage.js';
import { INPUT_STORAGE__ID, STORAGE_TYPE } from './navbar.js'
import rendelDetail from './details.js'

const { getItem } = storage(STORAGE_TYPE);


page('/main.html', () => {
    renderHomeShows(getItem(INPUT_STORAGE__ID));
});

page('/details/:id', (ctx) => {
    const id = parseInt(ctx.params.id);
    rendelDetail(id)
});

page();



