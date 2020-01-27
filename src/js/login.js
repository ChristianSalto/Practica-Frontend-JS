/* eslint-disable */
import api from './api.js';
import storage from './storage.js';

const { setItem, getItem } = storage();

const email = document.getElementById('email');
const submit = document.getElementById('form-login');
const usu = document.getElementById('usu');

submit.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const newUser = await api().createLogin('christian@keepcoding.com');
  setItem('api-key', newUser.user.apiKey);
  if (email.value === 'christian@keepcoding.com' && usu.value === getItem('api-key')) {
    submit.submit();
  } else {
    alert(`Usuario o email son incorrectos, por favor pruebe con : usuario ->( ${getItem('api-key')} )
        email -> christian@keepcoding.com`);
  }
});


/*  christian@keepcoding.com  -----  CS08H6C-4JHMYPF-NXW3HF3-MV9F4NM  */
