import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './HomePage.module.css';
import * as movieAPI from '../../services/api';
import { Loader } from 'components/Loader/Loader';

function HomePage() {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
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
      <h2 className={css.Title}>Trending today</h2>
      {movies && (
        <ul className={css.ListMovies}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.name ? movie.name : movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
    </>
  );
}
export default HomePage;
