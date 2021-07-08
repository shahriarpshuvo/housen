import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

import SearchItem from './SearchItem';
import api from '../api';

const Search = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    api
      .get()
      .then(response => {
        setItems(response.data.result);
      })
      .catch(() => {});
  }, []);

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
          {items.slice(0, 3).map(item => (
            <SearchItem key={item.city_name.replace(' ', '_').toLowerCase()} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
