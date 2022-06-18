import { API_URL_PHOTOS, ACCESS_KEY } from './const.js';

export const getData = ({ count, idPhoto, page = 1 }) => {
  const url = new URL(API_URL_PHOTOS);
  url.searchParams.set('client_id', ACCESS_KEY);
  if (count && page) {
    url.searchParams.append('per_page', count);
    url.searchParams.append('page', page);
  }

  if (idPhoto) {
    url.pathname += `/${idPhoto}`;
  }

  return fetch(url).then(response => response.json());
};
