import axios from 'axios';

const API_KEY = 'aca3a80d7ad77ed9a43b3a4a106c9d1c';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day');
    return data.results;
  } catch (error) {
    console.log(error)
  }
}

export const getMoviesByQuery = async (query: string) => {
  try {
    const { data } = await axios.get(`/search/movie?query=${query}`);
    return data.results;
  } catch (error) {
    console.log(error)
  }
}

export const getMovieById = async (id: number) => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const getCastById = async (id: number) => {
  try {
    const { data } = await axios.get(`/movie/${id}/credits`);
    return data.cast;
  } catch (error) {
    console.log(error)
  }
}

export const getReviewsById = async (id: number) => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`);
    return data.results;
  } catch (error) {
    console.log(error)
  }
}
