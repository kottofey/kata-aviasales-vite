const BASE_API_URL = 'https://aviasales-test-api.kata.academy';

const callApi = async (url) => {
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  });

  if (!resp.ok) {
    throw new Error('Promise Error!', { cause: resp });
  }

  return resp.json();
};

export const getSearchId = async () => {
  const url = new URL(`${BASE_API_URL}/search`);
  const resp = await callApi(url);
  return resp.searchId;
};

export const getTickets = async (searchId) => {
  const url = new URL(`${BASE_API_URL}/tickets`);
  url.searchParams.set('searchId', searchId);
  return callApi(url);
};
