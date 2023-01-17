import { NavLink, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './OneMovie.module.css';
import { nanoid } from 'nanoid';

const OneMovie = ({ movie }) => {
  const {
    poster_path,
    title,
    overview,
    genres,
    release_date,
    first_air_date,
    name,
    vote_average,
  } = movie;
  const date = new Date(release_date ? release_date : first_air_date);
  const rating = Math.round(vote_average * 10);
  const year = date.getFullYear();
  const titleMovie = title ? title : name;
  const photo = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';

  return (
    <>
      <div className={css.BoxMovie}>
        <div>
          <img src={photo} alt={titleMovie} className={css.MovieImg} />
        </div>
        <div>
          <ul className={css.ListInformationMovie}>
            <li className={css.NameMovie}>
              <h2>{titleMovie}</h2>
              <p>( {year} )</p>
            </li>
            <li className={css.VoteMovie}>
              <h3>User Score: </h3>
              <p>{rating}%</p>
            </li>
            <li className={css.OverviewMovie}>
              <h3>Overview</h3>
              <p>{overview}</p>
            </li>
            <li className={css.GenresMovie}>
              <h3>Genres</h3>
              <p>
                {genres.map(genre => {
                  return <span key={nanoid()}>{genre?.name}</span>;
                })}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <p className={css.Information}> Additional information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

OneMovie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default OneMovie;
