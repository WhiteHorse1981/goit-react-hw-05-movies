import { NavLink, Outlet } from 'react-router-dom';
import css from './PageNotFound404.module.css';

function PageNotFound404() {
  return (
    <div className={css.BoxPageNotFound}>
      <p className={css.PageNotFound}>404</p>
      <NavLink to={'/'}>
        There is no page matching your request. Please go to the main page.
      </NavLink>
      <Outlet />
    </div>
  );
}
export default PageNotFound404;
