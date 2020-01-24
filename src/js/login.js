import api from './api.js';
import storage from './storage.js';

const { setItem, getItem } = storage();

const email = document.getElementById('email');
const submit = document.getElementById('form-login');

submit.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const newUser = await api().createLogin(email.value);
    setItem("api-key",newUser[1])
    console.log(storage())
    debugger
})

