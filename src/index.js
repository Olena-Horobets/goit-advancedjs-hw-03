import { fetchBreeds, fetchCatByBreed } from './cat-api';

const refs = {
  select: document.querySelector('.breed-select'),
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

function createMainMarkup({
  name,
  weight: { imperial },
  intelligence,
  description,
  url,
}) {
  return `<div class="card">
            <h2>Name: ${name}</h2>
            <p>Weight: ${imperial} kg</p>
            <p>Intelligence: ${intelligence}</p>
            <p>${description}</p>
            <img src="${url}" width=400 />
        </div>`;
}

function onSelectChange(e) {
  const value = e.currentTarget.value;

  refs.loader.classList.remove('hidden');
  refs.catInfo.classList.add('hidden');
  refs.error.classList.add('hidden');

  fetchCatByBreed(value, params)
    .then(res => {
      const cat = JSON.parse(localStorage.getItem('breeds')).find(
        el => el.id === value
      );

      refs.catInfo.innerHTML = createMainMarkup({
        ...cat,
        url: res[0].url,
      });

      refs.catInfo.classList.remove('hidden');
    })
    .catch(error => {
      refs.error.classList.remove('hidden');
      console.log('error', error);
    })
    .finally(refs.loader.classList.add('hidden'));
}

fetchBreeds(params)
  .then(res => {
    localStorage.setItem('breeds', JSON.stringify(res));
    refs.select.innerHTML = createSelectMarkup(res);
    refs.select.classList.remove('hidden');
  })
  .catch(error => {
    console.log('error', error);
    refs.error.classList.remove('hidden');
  })
  .finally(refs.loader.classList.add('hidden'));

refs.select.addEventListener('change', onSelectChange);
