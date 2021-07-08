import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import { ReactComponent as FilterIcon } from '../assets/icons/filter.svg';
import { ReactComponent as ChevronRightIcon } from '../assets/icons/chevron-right.svg';

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
        <div className="search__list">
          <div className="search__item">
            <h3 className="search__itemCity">Calabasas, CA</h3>
            <div className="search__itemInfo meta">
              <FilterIcon />
              <span>$1.5k+ / 2 Beds / Appt. ... 3 more</span>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="search__item">
            <h3 className="search__itemCity">Calabasas, CA</h3>
            <div className="search__itemInfo meta">
              <FilterIcon />
              <span>$1.5k+ / 2 Beds / Appt. ... 3 more</span>
              <ChevronRightIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
