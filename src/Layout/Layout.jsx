import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css.App}>
      <header className={css.Header}>
        <nav className={css.Nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.NavLinkActive : css.NavLink
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.NavLinkActive : css.NavLink
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      {children}
    </div>
  );
};
