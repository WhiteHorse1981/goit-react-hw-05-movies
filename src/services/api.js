import axios from 'axios';

const themoviedbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'a3d945b8f328c6538b57f110a6218b6e',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await themoviedbApi.get('trending/all/day');
  return data;
};

export const getSearchMovies = async query => {
  const { data } = await themoviedbApi.get('search/movie', {
    params: {
      query: query,
      language: 'en-US',
      page: 1,
      include_adult: false,
    },
    //`search/movie${query}&language=en-US&page=1&include_adult=false`
  });
  return data;
};

export const getDetailsMovies = async movieId => {
  const { data } = await themoviedbApi.get(`movie/${movieId}`, {
    params: {
      language: 'en-US',
    },
    //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  });
  return data;
};

export const getCastMovies = async movieId => {
  const { data } = await themoviedbApi.get(`movie/${movieId}/credits`, {
    params: {
      language: 'en-US',
    },
    //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
  });
  return data;
};

export const getReviewsMovies = async movieId => {
  const { data } = await themoviedbApi.get(`movie/${movieId}/reviews`, {
    params: {
      language: 'en-US',
      page: 1,
    },
    //https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
  });
  return data;
};

export const getVideoMovies = async movieId => {
  const { data } = await themoviedbApi.get(`movie/${movieId}/videos`, {
    params: {
      language: 'en-US',
      page: 1,
    },
    //https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
  });
  return data;
};
