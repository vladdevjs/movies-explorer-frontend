import { NOT_FOUND_ERROR, SERVER_ERROR, MOVIE_API_BASE_URL } from './constants';

class MoviesApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else if (res.status === 404) {
      return Promise.reject(NOT_FOUND_ERROR);
    } else if (res.status === 500) {
      return Promise.reject(SERVER_ERROR);
    } else {
      return res.json().then((err) => Promise.reject(err.message));
    }
  }

  async getMovies() {
    const res = await fetch(`${this.baseUrl}/beatfilm-movies`, {
      headers: this.headers,
    });
    return this._checkResponse(res);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: `${MOVIE_API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
