import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

import SearchItem from './SearchItem';

import data from '../mock-data.json';

const Search = () => {
  const items = data.result.slice(0, 3);
  return (
    <section class="search">
      <div className="content-box">
        <form class="search__form">
          <label htmlFor="searchText">
            <SearchIcon />
          </label>
          <input type="text" id="searchText" placeholder="Search for address" autoComplete="none" />
          <button class="btn btn--main">Search</button>
        </form>
        <div className="search__list">
          {items.map(item => (
            <SearchItem key={item.city_name.replace(' ', '_').toLowerCase()} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
