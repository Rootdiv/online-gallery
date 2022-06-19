import { API_URL } from './const.js';
export const getUserData = () =>
  fetch(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('Bearer')}`,
    },
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Произошла ошибка: ', error);
      return null;
    });
