const BASE_URL = 'http://localhost:5000';

const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

const getCreditId = () => {
  return localStorage.getItem('creditId');
};

const putAccessToken = (accessToken) => {
  return localStorage.setItem('accessToken', accessToken);
};

const putRefreshToken = (refreshToken) => {
  return localStorage.setItem('refreshToken', refreshToken);
};

const putCreditId = (creditId) => {
  return localStorage.setItem('creditId', creditId);
};

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
    return { error: true, data: null, message: responseJson.message };
  }

  return {
    error: false,
    data: responseJson.data,
    message: responseJson.message,
  };
};

const logout = async () => {
  const refreshToken = getRefreshToken();
  const response = await fetch(`${BASE_URL}/authentications`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
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
    return { error: true, message: responseJson.message };
  }

  return { error: false, message: responseJson.message };
};

const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  const response = await fetch(`${BASE_URL}/authentications`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
};

const getUserLogged = async () => {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    let cond = false;
    responseJson.message === 'Token maximum age exceeded'
      ? (cond = true)
      : (cond = false);

    return { error: true, data: null, tokenExpired: cond };
  }

  return { error: false, data: responseJson.data };
};

const addFirstTimeCredit = async () => {
  const response = await fetchWithToken(`${BASE_URL}/credits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: null, message: response.json.message };
  }

  return {
    error: false,
    data: responseJson.data.creditId,
    message: response.json.message,
  };
};

const getCreditUser = async () => {
  const response = await fetchWithToken(`${BASE_URL}/credits`);

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null, message: responseJson.message };
  }

  return {
    error: false,
    data: responseJson.data.credit,
    message: responseJson.message,
  };
};

const shuffleWithCoin = async () => {
  const creditId = getCreditId();
  const response = await fetchWithToken(
    `${BASE_URL}/credits/coin/pokemon/shuffle`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ creditId }),
    }
  );

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null, message: responseJson.message };
  }

  return { error: false, data: responseJson.data.coinAmount.coin };
};

const pickPokeCards = async (pickPayload) => {
  // console.log(pickPayload);
  const response = await fetchWithToken(`${BASE_URL}/cards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pickPayload),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null, message: responseJson.message };
  }

  return {
    error: false,
    data: responseJson.data,
    message: responseJson.message,
  };
};

const reduceBalls = async (ballsData) => {
  const response = await fetchWithToken(`${BASE_URL}/credits/pokeball/reduce`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ballsData),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null, message: responseJson.message };
  }

  return {
    error: false,
    data: responseJson.data,
    message: responseJson.message,
  };
};

const getOwnerCards = async () => {
  const response = await fetchWithToken(`${BASE_URL}/cards`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: [], message: responseJson.message };
  }

  return {
    error: false,
    data: responseJson.data,
    message: responseJson.message,
  };
};

const verifyAccount = async (targetEmail) => {
  console.log('email', targetEmail);
  const response = await fetchWithToken(`${BASE_URL}/export/email/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(targetEmail),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null, message: responseJson.message };
  }

  return {
    error: false,
    data: responseJson.data,
    message: responseJson.message,
  };
};

export {
  getAccessToken,
  getRefreshToken,
  getCreditId,
  putAccessToken,
  putRefreshToken,
  putCreditId,
  login,
  logout,
  register,
  refreshAccessToken,
  getUserLogged,
  addFirstTimeCredit,
  getCreditUser,
  shuffleWithCoin,
  pickPokeCards,
  reduceBalls,
  getOwnerCards,
  verifyAccount,
};
