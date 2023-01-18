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
    <div>
      <form className={css.SearchForm} onSubmit={handlerFormSubmit}>
        <input type="text" value={query} onChange={hendleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
