export default class AviaSalesAPI {
  constructor() {
    this.searchId = null;
  }

  BASE_API_URL = 'https://aviasales-test-api.kata.academy';

  callApi = async (url) => {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('APIError');
    }

    response = await response.json();
    return response;
  };

  getSearchId = async () => {
    const url = new URL(`${this.BASE_API_URL}/search`);

    return this.callApi(url);
  };

  getTickets = async () => {
    if (!this.searchId) throw new Error('No searchId provided');

    const url = new URL(`${this.BASE_API_URL}/tickets`);
    url.searchParams.set('searchId', this.searchId.searchId);
    return this.callApi(url);
  };
}
//
// const q = new AviaSalesAPI();
//
// try {
//   q.searchId = await q.getSearchId();
// } catch (e) {
//   console.error(e.message);
// }
