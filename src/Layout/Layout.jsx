import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';
import { AiFillCaretRight } from 'react-icons/ai';
import { HiHome } from 'react-icons/hi2';

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
            <HiHome />
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? css.NavLinkActive : css.NavLink
            }
            to="/movies"
          >
            <AiFillCaretRight />
            Movies
          </NavLink>
        </nav>
      </header>
      {children}
    </div>
  );
};
