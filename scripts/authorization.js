import { ACCESS_KEY, API_URL_AUTH, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from './const.js';
import { getToken } from './getToken.js';
import { getUserData } from './getUserData.js';

const checkLogin = async () => {
  const url = new URL(location.href);
  const code = url.searchParams.get('code');
  if (code) {
    const token = await getToken(code);
    localStorage.setItem('Bearer', token);
    const url = new URL(location);
    url.searchParams.delete('code');
    history.pushState(null, document.title, url);
    return true;
  } else if (localStorage.getItem('Bearer')) {
    return true;
  } else {
    return false;
  }
};

const login = () => {
  const url = new URL(API_URL_AUTH);
  url.searchParams.append('client_id', ACCESS_KEY);
  url.searchParams.append('redirect_uri', REDIRECT_URI);
  url.searchParams.append('response_type', RESPONSE_TYPE);
  url.searchParams.append('scope', SCOPE);

  location.href = url;
};

const logout = event => {
  const btn = event.target;
  if (confirm('Вы уверены?')) {
    localStorage.removeItem('Bearer');
    btn.textContent = '';
    btn.style.backgroundImage = '';
    btn.removeEventListener('click', logout);
    btn.addEventListener('click', login);
  }
};

export const authorization = async btn => {
  if (await checkLogin()) {
    const userData = await getUserData();
    btn.textContent = userData.name;
    btn.style.backgroundImage = `url(${userData.profile_image.small})`;
    btn.addEventListener('click', logout);
  } else {
    btn.addEventListener('click', login);
  }
};
