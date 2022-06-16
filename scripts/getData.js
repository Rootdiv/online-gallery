export const getData = () => fetch('data.json').then(response => response.json());
