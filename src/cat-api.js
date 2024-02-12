export function fetchBreeds(params) {
  return fetch('https://api.thecatapi.com/v1/breeds', params).then(res => {
    if (!res.ok) throw new Error(response.statusText);

    return res.json();
  });
}

export function fetchCatByBreed(breedId, params) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    params
  ).then(res => {
    if (!res.ok) throw new Error(response.statusText);

    return res.json();
  });
}
