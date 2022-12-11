const BASE_URL = 'http://localhost:5000/';

const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

const putAccessToken = (accessToken) => {};

const fetchWithToken = async (url, option = {}) => {
  return fetch(url, {
    ...option,
    headers: {
      ...option.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
};

const login = async ({ username, password }) => {
  const response = await fetch(`${BASE_URL}/authentications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
};

const register = async ({ username, password, trainer_name, email }) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, trainer_name, email }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
};

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

export { getAccessToken, putAccessToken, login, register, getUserLogged };
