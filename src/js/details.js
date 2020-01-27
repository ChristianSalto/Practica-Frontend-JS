/* eslint-disable */
import api from './api.js';

const detailsTemplate = ({
  name, description, firstBrewed, brewersTips, price, image, ingredients, comments, likes,
} = {}) => `
<div class="main-section" id="div-section">
   <div class="details-section">
       <header>
        <h2 class="title-section">${name}</h2>
       </header>
       <div class="description-section">
        <h3>Description:</h3>
        <p>${description}</p>
       </div>
       <h3 class="h3-ingre">Ingredients: </h3>
     <div class="div-ingredient" id="show-ingredient">
        <dl>
           <dt>Malt: </dt>
           <dd>${ingredients.malt.map((show) => show.name).join(', ')}</dd>
        </dl>
       <dl>
           <dt>Hops: </dt>
           <dd>${ingredients.hops.map((show) => show.name).join(', ')}</dd>
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
       <form id="comment-form" novalidate>
        <textarea type="text" class="text-comments" required name="comment" rows="10"
          placeholder="Deja aqui tu comentario: "></textarea>
         <input class="input-submit" type="submit" value="Add comments">
         <button id="id-like" class="button-like"></button><span class="s-likes">${likes}</span>
       </form>
     </div>
     <blockquote class="p-comment"><i>${comments.map((show) => `${show.comment.replace('', '<br>')} ** ${show.dateComment}`).join('')}<i></blockquote>
   </div>
</div>
<div class="img-section">
<img src="${image}" alt="beer">
</div>
`;

const rendelDetail = async (id) => {
  try {
    const detail = await api().getShowDetails(id);
    const template = detailsTemplate(detail.beer);
    const divSection = document.querySelector('main');
    divSection.innerHTML = template;
    const commentForm = document.getElementById('comment-form');
    const textCommment = document.getElementsByClassName('text-comments');
    const buttonLike = document.getElementById('id-like');
    commentForm.addEventListener('submit', async (evt) => {
      evt.preventDefault();
      if (textCommment[0].value === '') {
        evt.preventDefault();
      } else {
        const beerComment = await api().createComment(id, textCommment[0].value);
        rendelDetail(beerComment.beer.beerId);
      }
    });
    buttonLike.addEventListener('click', async (evt) => {
      evt.preventDefault();
      const beerlike = await api().createLike(id);
      rendelDetail(beerlike.beer.beerId);
    });
  } catch (err) {
    console.error(err);
  }
};

export default rendelDetail;
