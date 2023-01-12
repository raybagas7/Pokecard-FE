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
    return { error: true, data: null, message: responseJson.message };
  }

  return {
    error: false,
    data: responseJson.data.creditId,
    message: responseJson.message,
  };
};

const addFirstTimeCreditWithRefresh = async () => {
  const result = await addFirstTimeCredit().then(({ error, data, message }) => {
    if (message === 'Token maximum age exceeded') {
      const afterRefresh = refreshAccessToken().then(async ({ data }) => {
        putAccessToken(data.accessToken);
        const result = await addFirstTimeCredit().then(
          ({ error, data, message }) => {
            // console.log('refres shuffle', error, data, message);
            return { error, data, message };
          }
        );
        return result;
      });

      return afterRefresh;
    }
    return { error, data, message };
  });
  // console.log('hasil shuffle', result);
  return result;
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

const getCreditUserWithRefresh = async () => {
  const result = await getCreditUser().then(({ error, data, message }) => {
    if (message === 'Token maximum age exceeded') {
      const afterRefresh = refreshAccessToken().then(async ({ data }) => {
        putAccessToken(data.accessToken);
        const result = await getCreditUser().then(
          ({ error, data, message }) => {
            // console.log('refres shuffle', error, data, message);
            return { error, data, message };
          }
        );
        return result;
      });

      return afterRefresh;
    }
    return { error, data, message };
  });
  // console.log('hasil shuffle', result);
  return result;
};

const getCreditAndTotalCards = async () => {
  const response = await fetchWithToken(`${BASE_URL}/credits/totalcards`);

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

const getCreditAndTotalCardsWithRefresh = async () => {
  const result = await getCreditAndTotalCards().then(
    ({ error, data, message }) => {
      if (message === 'Token maximum age exceeded') {
        const afterRefresh = refreshAccessToken().then(async ({ data }) => {
          putAccessToken(data.accessToken);
          const result = await getCreditAndTotalCards().then(
            ({ error, data, message }) => {
              // console.log('refres shuffle', error, data, message);
              return { error, data, message };
            }
          );
          return result;
        });

        return afterRefresh;
      }
      return { error, data, message };
    }
  );
  // console.log('hasil shuffle', result);
  return result;
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

  return {
    error: false,
    data: responseJson.data.coinAmount.coin,
    message: responseJson.message,
  };
};

const shuffleWithCoinRefresh = async () => {
  const result = await shuffleWithCoin().then(({ error, data, message }) => {
    if (message === 'Token maximum age exceeded') {
      const afterRefresh = refreshAccessToken().then(async ({ data }) => {
        putAccessToken(data.accessToken);
        const result = await shuffleWithCoin().then(
          ({ error, data, message }) => {
            // console.log('refres shuffle', error, data, message);
            return { error, data, message };
          }
        );
        return result;
      });

      return afterRefresh;
    }
    return { error, data, message };
  });
  // console.log('hasil shuffle', result);
  return result;
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
  // console.log('pertama', responseJson.data, responseJson.message);
  return {
    error: false,
    data: responseJson.data,
    message: responseJson.message,
  };
};

const pickPokeCardsWithRefresh = async (pickPayload) => {
  const result = await pickPokeCards(pickPayload).then(
    ({ error, data, message }) => {
      if (message === 'Token maximum age exceeded') {
        const afterRefresh = refreshAccessToken().then(async ({ data }) => {
          putAccessToken(data.accessToken);
          const result = await pickPokeCards(pickPayload).then(
            ({ error, data, message }) => {
              // console.log('refres', error, data, message);
              return { error, data, message };
            }
          );
          return result;
        });

        return afterRefresh;
      }
      return { error, data, message };
    }
  );
  // console.log('hasil', result);
  return result;
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

const getOwnerCardsRefresh = async (pickPayload) => {
  const result = await getOwnerCards(pickPayload).then(
    ({ error, data, message }) => {
      if (message === 'Token maximum age exceeded') {
        // console.log('refres ownedcard');
        const afterRefresh = refreshAccessToken().then(async ({ data }) => {
          putAccessToken(data.accessToken);
          const result = await getOwnerCards(pickPayload).then(
            ({ error, data, message }) => {
              // console.log('refres ownedcard', error, data, message);
              return { error, data, message };
            }
          );
          return result;
        });

        return afterRefresh;
      }
      return { error, data, message };
    }
  );
  // console.log('hasil ownedcard', result);
  return result;
};

const updateShuffledCard = async (payload) => {
  const response = await fetchWithToken(`${BASE_URL}/shuffle/card`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
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

const updateShuffledCardRefresh = async (payload) => {
  const result = await updateShuffledCard(payload).then(
    ({ error, data, message }) => {
      if (message === 'Token maximum age exceeded') {
        const afterRefresh = refreshAccessToken().then(async ({ data }) => {
          putAccessToken(data.accessToken);
          const result = await updateShuffledCard(payload).then(
            ({ error, data, message }) => {
              return { error, data, message };
            }
          );
          return result;
        });

        return afterRefresh;
      }
      return { error, data, message };
    }
  );
  // console.log('hasil ownedcard', result);
  return result;
};

const getShuffledCard = async () => {
  const response = await fetchWithToken(`${BASE_URL}/shuffle/card`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
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

const getShuffledCardRefresh = async () => {
  const result = await getShuffledCard().then(({ error, data, message }) => {
    if (message === 'Token maximum age exceeded') {
      const afterRefresh = refreshAccessToken().then(async ({ data }) => {
        putAccessToken(data.accessToken);
        const result = await getShuffledCard().then(
          ({ error, data, message }) => {
            return { error, data, message };
          }
        );
        return result;
      });

      return afterRefresh;
    }
    return { error, data, message };
  });
  // console.log('hasil ownedcard', result);
  return result;
};

const updateCardToCase = async (payload) => {
  const response = await fetchWithToken(`${BASE_URL}/showcases`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
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

const updateCardToCaseRefresh = async (payload) => {
  const result = await updateCardToCase(payload).then(
    ({ error, data, message }) => {
      if (message === 'Token maximum age exceeded') {
        const afterRefresh = refreshAccessToken().then(async ({ data }) => {
          putAccessToken(data.accessToken);
          const result = await updateCardToCase(payload).then(
            ({ error, data, message }) => {
              return { error, data, message };
            }
          );
          return result;
        });

        return afterRefresh;
      }
      return { error, data, message };
    }
  );
  // console.log('hasil ownedcard', result);
  return result;
};

const updateCardToWindow = async (payload) => {
  const response = await fetchWithToken(`${BASE_URL}/trades`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
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

const updateCardToWindowRefresh = async (payload) => {
  const result = await updateCardToWindow(payload).then(
    ({ error, data, message }) => {
      if (message === 'Token maximum age exceeded') {
        const afterRefresh = refreshAccessToken().then(async ({ data }) => {
          putAccessToken(data.accessToken);
          const result = await updateCardToWindow(payload).then(
            ({ error, data, message }) => {
              return { error, data, message };
            }
          );
          return result;
        });

        return afterRefresh;
      }
      return { error, data, message };
    }
  );
  // console.log('hasil ownedcard', result);
  return result;
};

const getTraderOfferList = async (cardId) => {
  const response = await fetchWithToken(`${BASE_URL}/offers/trader/${cardId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
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

const getTraderOfferListRefresh = async (cardId) => {
  const result = await getTraderOfferList(cardId).then(
    ({ error, data, message }) => {
      if (message === 'Token maximum age exceeded') {
        const afterRefresh = refreshAccessToken().then(async ({ data }) => {
          putAccessToken(data.accessToken);
          const result = await getTraderOfferList(cardId).then(
            ({ error, data, message }) => {
              return { error, data, message };
            }
          );
          return result;
        });

        return afterRefresh;
      }
      return { error, data, message };
    }
  );
  // console.log('hasil ownedcard', result);
  return result;
};

const getUserShowcases = async () => {
  const response = await fetchWithToken(`${BASE_URL}/showcases`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
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

const getUserShowcasesRefresh = async () => {
  const result = await getUserShowcases().then(({ error, data, message }) => {
    if (message === 'Token maximum age exceeded') {
      const afterRefresh = refreshAccessToken().then(async ({ data }) => {
        putAccessToken(data.accessToken);
        const result = await getUserShowcases().then(
          ({ error, data, message }) => {
            return { error, data, message };
          }
        );
        return result;
      });

      return afterRefresh;
    }
    return { error, data, message };
  });
  // console.log('hasil ownedcard', result);
  return result;
};

const getUserTrades = async () => {
  const response = await fetchWithToken(`${BASE_URL}/trades`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
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

const getUserTradesRefresh = async () => {
  const result = await getUserTrades().then(({ error, data, message }) => {
    if (message === 'Token maximum age exceeded') {
      const afterRefresh = refreshAccessToken().then(async ({ data }) => {
        putAccessToken(data.accessToken);
        const result = await getUserTrades().then(
          ({ error, data, message }) => {
            return { error, data, message };
          }
        );
        return result;
      });

      return afterRefresh;
    }
    return { error, data, message };
  });
  // console.log('hasil ownedcard', result);
  return result;
};

const getRandomUsers = async () => {
  const response = await fetchWithToken(`${BASE_URL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
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

const getRandomUsersRefresh = async () => {
  const result = await getRandomUsers().then(({ error, data, message }) => {
    if (message === 'Token maximum age exceeded') {
      const afterRefresh = refreshAccessToken().then(async ({ data }) => {
        putAccessToken(data.accessToken);
        const result = await getRandomUsers().then(
          ({ error, data, message }) => {
            return { error, data, message };
          }
        );
        return result;
      });

      return afterRefresh;
    }
    return { error, data, message };
  });
  // console.log('hasil ownedcard', result);
  return result;
};

const getUserDetailBySearchId = async (searchId) => {
  const response = await fetchWithToken(`${BASE_URL}/users/${searchId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
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

const getUserDetailBySearchIdRefresh = async (searchId) => {
  const result = await getUserDetailBySearchId(searchId).then(
    ({ error, data, message }) => {
      if (message === 'Token maximum age exceeded') {
        const afterRefresh = refreshAccessToken().then(async ({ data }) => {
          putAccessToken(data.accessToken);
          const result = await getUserDetailBySearchId(searchId).then(
            ({ error, data, message }) => {
              return { error, data, message };
            }
          );
          return result;
        });

        return afterRefresh;
      }
      return { error, data, message };
    }
  );
  // console.log('hasil ownedcard', result);
  return result;
};

const postOfferToTradeCard = async (payload) => {
  const response = await fetchWithToken(`${BASE_URL}/offers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
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

const postOfferToTradeCardRefresh = async (searchId) => {
  const result = await postOfferToTradeCard(searchId).then(
    ({ error, data, message }) => {
      if (message === 'Token maximum age exceeded') {
        const afterRefresh = refreshAccessToken().then(async ({ data }) => {
          putAccessToken(data.accessToken);
          const result = await postOfferToTradeCard(searchId).then(
            ({ error, data, message }) => {
              return { error, data, message };
            }
          );
          return result;
        });

        return afterRefresh;
      }
      return { error, data, message };
    }
  );
  // console.log('hasil ownedcard', result);
  return result;
};

const claimUserDailyGift = async () => {
  const response = await fetchWithToken(`${BASE_URL}/credits/claim/daily`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
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

const claimUserDailyGiftRefresh = async () => {
  const result = await claimUserDailyGift().then(({ error, data, message }) => {
    if (message === 'Token maximum age exceeded') {
      const afterRefresh = refreshAccessToken().then(async ({ data }) => {
        putAccessToken(data.accessToken);
        const result = await claimUserDailyGift().then(
          ({ error, data, message }) => {
            return { error, data, message };
          }
        );
        return result;
      });

      return afterRefresh;
    }
    return { error, data, message };
  });
  // console.log('hasil ownedcard', result);
  return result;
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
  addFirstTimeCreditWithRefresh,
  getCreditUser,
  getCreditUserWithRefresh,
  shuffleWithCoin,
  shuffleWithCoinRefresh,
  pickPokeCards,
  reduceBalls,
  getOwnerCards,
  getOwnerCardsRefresh,
  updateShuffledCard,
  updateShuffledCardRefresh,
  getShuffledCard,
  getShuffledCardRefresh,
  updateCardToCaseRefresh,
  updateCardToWindowRefresh,
  getUserShowcases,
  getUserShowcasesRefresh,
  postOfferToTradeCardRefresh,
  getUserTradesRefresh,
  getRandomUsersRefresh,
  getCreditAndTotalCardsWithRefresh,
  getTraderOfferListRefresh,
  getUserDetailBySearchIdRefresh,
  claimUserDailyGiftRefresh,
  verifyAccount,
  pickPokeCardsWithRefresh,
};
