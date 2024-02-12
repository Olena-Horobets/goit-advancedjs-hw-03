// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] =
//   'live_o0DjDhD9sQJ8vSBYerclRajz3qjShq8uQvqFj4h0k2iq6Aj7uknNu1uxnQrOZVNB';
import { fetchBreeds } from './cat-api';

const refs = {
  list: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

const params = new URLSearchParams({
  'Content-Type': 'application/json',
  'x-api-key':
    'live_o0DjDhD9sQJ8vSBYerclRajz3qjShq8uQvqFj4h0k2iq6Aj7uknNu1uxnQrOZVNB',
});

function createSelectMarkup(arr) {
  return arr.map(el => `<option value="${el.id}">${el.name}</option>`).join('');
}

fetchBreeds(params)
  .then(res => {
    refs.list.innerHTML = createSelectMarkup(res);
  })
  .catch(error => console.log('error', error));
