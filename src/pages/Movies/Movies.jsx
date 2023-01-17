import { useSearchParams, Link } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import * as movieAPI from '../../services/api';
import { Loader } from 'components/Loader/Loader';

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const params = searchParams.get('query');

  const onSubmit = movies => {
    setSearchParams({ query: movies });
  };

  useEffect(() => {
    if (params === null) return;

    const fetchSearchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await movieAPI.getSearchMovies(params);
        setSearchedMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchMovies();
  }, [params]);
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {searchedMovies && (
        <ul>
          {searchedMovies.map(movie => (
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
export default Movies;
