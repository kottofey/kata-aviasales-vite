export default class AviaSalesAPI {
  constructor() {
    this.searchId = null;
    this.response = null;
  }

  BASE_API_URL = 'https://aviasales-test-api.kata.academy';

  callApi = async (url) => {
    this.response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });

    if (!this.response.ok) {
      throw new Error('APIError');
    }

    this.response = await this.response.json();
    return this.response;
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
