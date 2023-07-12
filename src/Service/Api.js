import axios from 'axios';

const API_KEY = 'c4c5b8027f2691a5d68bddee68a8cb70';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchTrending = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchSearchMovies = async searchQuery => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchDetails = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCast = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

const fetchReviews = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchTrending,
  fetchSearchMovies,
  fetchDetails,
  fetchCast,
  fetchReviews,
};
