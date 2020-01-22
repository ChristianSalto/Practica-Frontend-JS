import api from './api.js';

const detailsTemplate = ({ name, description, firstBrewed, brewersTips, price, image, ingredients } = {}) => `
<div class="main-section" id="div-section">
 <div class="details-section">
   <header>
    <h2 class="title-section">${name}</h2>
   </header>
  <div class="description-section">
    <h3>Description:</h3>
    <p>${description}</p>
  </div>
  <h3 class="h3-ingre">Ingredientes: </h3>
  <div class="div-ingredient" id="show-ingredient">
    <dl>
      <dt>Malt: </dt>
      <dd>${ingredients.malt.map(function (show) { return show.name; }).join(', ')}</dd>
    </dl>
    <dl>
      <dt>Hops: </dt>
      <dd>${ingredients.hops.map(function (show) { return show.name; }).join(', ')}</dd>
    </dl>
  </div>
    <div class="extra-content">
     <dl>
        <dt>FirstBrewed: </dt>
        <dd>${firstBrewed}</dd>
        <dt>BrewersTips: </dt>
        <dd>${brewersTips}</dd>
        <dt>Price: </dt>
        <dd>${price} $</dd>
     </dl>
     <textarea class="text-comments" name="comments" rows="10"
        placeholder="Deja aqui tu comentario: "></textarea>
    </div>
 </div>
</div>
<div class="img-section">
<img src="${image}" alt="beer">
</div>
`;

const rendelDetail = async id => {
  try {
    const detail = await api().getShowDetails(id);
    const template = detailsTemplate(detail.beer);
    const divSection = document.querySelector('main');
    divSection.innerHTML = template;
  } catch (err) {
    console.error(err);
  }
}

export default rendelDetail;