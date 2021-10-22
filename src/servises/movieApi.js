import axios from 'axios';
const axMovieClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'e35848fafa127b7b9bbd6f529608387b',
  },
});

const fetchWithErrorHandling = async (url = '') => {
  try {
    const { data } = await axMovieClient.get(url);
    return data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const fetchMovie = {
  dayTrending: () => fetchWithErrorHandling('/trending/movie/day'),
  byId: movieId => fetchWithErrorHandling(`/movie/${movieId}`),
  cast: movieId => fetchWithErrorHandling(`/movie/${movieId}/credits`),
  reviews: movieId => fetchWithErrorHandling(`/movie/${movieId}/reviews`),
  search: movieQuery =>
    fetchWithErrorHandling(`/search/movie?query=${movieQuery}`),
};
