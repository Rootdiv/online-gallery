import { createElem } from './createElem.js';

export const renderPhoto = (photoWrapper, photo) => {
  const photoPicture = createElem('img', {
    className: 'photo__picture',
    src: photo.urls.small,
    alt: photo.description,
    style: 'max-height: 80vh;',
  });

  const author = createElem('a', {
    className: 'photo__author',
    href: photo.user.links.html,
  });

  const avatarAuthor = createElem('img', {
    className: 'photo__picture',
    src: photo.user.profile_image.medium,
    alt: photo.user.bio,
    title: photo.user.name,
  });

  const authorName = createElem('span', {
    textContent: photo.user.name,
  });

  author.append(avatarAuthor, authorName);

  const photoControl = createElem('div', {
    className: 'photo__control',
  });

  const photoLike = createElem('button', {
    id: photo.id,
    className: 'photo__like',
    textContent: photo.likes,
    likedByUser: photo.liked_by_user,
  });

  if (!photoLike.likedByUser) {
    photoLike.classList.add('photo__like_o');
  }

  const photoDownload = createElem('a', {
    className: 'photo__download',
    href: photo.links.download,
    download: true,
    target: '__blank',
  });

  photoControl.append(photoLike, photoDownload);
  photoWrapper.append(photoPicture, author, photoControl);

  return photoLike;
};
