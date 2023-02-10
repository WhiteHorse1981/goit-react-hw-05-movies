import { useState, useEffect } from 'react';
import * as movieAPI from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';

function HomePage() {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesApi = async () => {
      setIsLoading(true);
      try {
        const data = await movieAPI.getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesApi();
  }, []);
  return (
    <>
      {error && <p>Server request failed. Try again.</p>}
      {movies && <MovieList movies={movies} />}
      {isLoading && <Loader />}
    </>
  );
}
export default HomePage;
