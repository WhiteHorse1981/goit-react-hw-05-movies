import { useSearchParams } from 'react-router-dom';
import css from './SearchBar.module.css';
import React, { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('query');
  const [query, setQuery] = useState(params ?? '');
  const hendleChange = e => {
    setQuery(e.target.value);
  };
  const handlerFormSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };
  return (
    <section>
      <form className={css.SearchForm} onSubmit={handlerFormSubmit}>
        <input
          className={css.InputSearchBar}
          type="text"
          value={query}
          onChange={hendleChange}
        />
        <button className={css.BtnForm} type="submit">
          Search
        </button>
      </form>
    </section>
  );
};
