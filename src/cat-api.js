export function fetchBreeds(params) {
  return fetch('https://api.thecatapi.com/v1/breeds', params).then(res => {
    if (!res.ok) throw new Error(response.statusText);

    return res.json();
  });
}
