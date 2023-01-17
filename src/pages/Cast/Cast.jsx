import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import css from './Cast.module.css';

function CastPage() {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    if (!movieId) return;

    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const data = await movieAPI.getCastMovies(movieId);
        setCast(data.cast);
        console.log(data.cast);
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
      {cast && (
        <ul>
          {cast && (
            <ul>
              {cast.map(role => {
                const photo = role.profile_path
                  ? `https://image.tmdb.org/t/p/w500${role.profile_path}`
                  : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';

                return (
                  <li key={role.id} className={css.CastItem}>
                    <img src={photo} alt={role.name} className={css.CastImg} />
                    <p className={css.CastName}>- {role.name}</p>
                    <p>- {role.character}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </ul>
      )}
      {isLoading && <Loader />}
    </>
  );
}
export default CastPage;
