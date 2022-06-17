import { createElem } from './createElem.js';

export const renderPhoto = (photoWrapper, photo) => {
  const photoPicture = new Image();
  photoPicture.className = 'photo__picture';
  photoPicture.src = photo.urls.small;
  photoPicture.alt = photo.description;

  const author = createElem('a', {
    className: 'photo__author',
    href: photo.user.links.html,
  });

  const avatarAuthor = new Image();
  avatarAuthor.src = photo.user.profile_image.medium;
  avatarAuthor.alt = photo.user.bio;
  avatarAuthor.title = photo.user.name;

  const authorName = createElem('span', {
    textContent: photo.user.name,
  });
  author.append(avatarAuthor, authorName);

  const photoControl = createElem('div', {
    className: 'photo__control',
  });

  const likeBtn = createElem('button', {
    id: photo.id,
    className: 'photo__like',
    textContent: photo.likes,
  });

  const downloadLink = createElem('a', {
    className: 'photo__download',
    href: photo.links.download,
    download: true,
    target: '__blank',
  });

  photoControl.append(likeBtn, downloadLink);
  photoWrapper.append(photoPicture, author, photoControl);

  return photoWrapper;
};
