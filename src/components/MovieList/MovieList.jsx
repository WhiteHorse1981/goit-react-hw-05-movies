import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.name ? movie.name : movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;