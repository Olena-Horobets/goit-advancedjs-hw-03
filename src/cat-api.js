const params = new URLSearchParams({
  'Content-Type': 'application/json',
  'x-api-key':
    'live_o0DjDhD9sQJ8vSBYerclRajz3qjShq8uQvqFj4h0k2iq6Aj7uknNu1uxnQrOZVNB',
});

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', params).then(res => {
    if (!res.ok) throw new Error(response.statusText);

    return res.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    params
  ).then(res => {
    if (!res.ok) throw new Error(response.statusText);

    return res.json();
  });
}
