import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

const Search = () => {
  return (
    <section class="search">
      <div className="content-box">
        <form class="search__form">
          <label htmlFor="searchText">
            <SearchIcon />
          </label>
          <input type="text" id="searchText" placeholder="Search for address" />
          <button class="btn btn--main">Search</button>
        </form>
      </div>
    </section>
  );
};

export default Search;
