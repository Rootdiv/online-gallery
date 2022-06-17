import { getData } from './getData.js';
import { createCardPhoto } from './createCardPhoto.js';

export const scrollLoad = (gallery, grid, endElement) => {
  const observer = new IntersectionObserver(
    async entries => {
      if (entries[0].isIntersecting) {
        const photos = await getData('data.json');
        const cards = photos.map(createCardPhoto);
        Promise.all(cards).then(cards => {
          gallery.append(...cards);
          grid.appended(cards);
        });
      }
    },
    { rootMargin: '150px' },
  );
  observer.observe(endElement);
};
