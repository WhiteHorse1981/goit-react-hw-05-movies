import { Link, useLocation } from 'react-router-dom';
import css from './GoBack.module.css';
function GoBack() {
  const location = useLocation();
  return (
    <Link className={css.BtnGoBack} to={location.state?.from ?? '/'}>
      GoBack
    </Link>
  );
}

export default GoBack;
