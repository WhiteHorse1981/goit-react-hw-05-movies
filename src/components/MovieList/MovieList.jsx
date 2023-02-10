import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import { HiVideoCamera } from 'react-icons/hi2';

function MovieList({ movies }) {
  const location = useLocation();
  return (
    <main className={css.BoxList}>
      <h2 className={css.Title}>Trending today</h2>
      <ul className={css.ListStyle}>
        {movies.map(movie => (
          <li className={css.ListItem} key={movie.id}>
            <Link
              className={css.ListItemLink}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <HiVideoCamera />
              {movie.name ? movie.name : movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
