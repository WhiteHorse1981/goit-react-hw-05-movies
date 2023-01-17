import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import * as movieAPI from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import OneMovie from '../OneMovie/OneMovie';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const data = await movieAPI.getDetailsMovies(movieId);
        setMovie(data);
        // console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);
  return (
    <>
      {(movie !== null && <OneMovie movie={movie} />) || (
        <p>Unfortunately there is no information about this film.</p>
      )}
      {isLoading && <Loader />}
    </>
  );
}
export default MovieDetails;
