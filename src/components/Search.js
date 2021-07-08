import React, { useState, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

import SearchItem from './SearchItem';
import api from '../api';

const getId = text => text.replace(' ', '_').toLowerCase();

const Search = () => {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    api
      .get()
      .then(response => {
        const items = response.data.result.slice(0, 3);
        setItems(items);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!searchText) return setItems([]);
    api
      .get(`/?city_name=${searchText}`)
      .then(response => {
        const items = response.data.result;
        setItems(items);
      })
      .catch(() => {});
  }, [searchText]);

  const handleChange = e => setSearchText(e.target.value);
  const handleSubmit = e => e.preventDefault();

  return (
    <section className="search">
      <div className="content-box">
        <form className="search__form" onSubmit={handleSubmit}>
          <label htmlFor="searchText">
            <SearchIcon />
          </label>
          <input
            id="searchText"
            type="text"
            placeholder="Search for address"
            autoComplete="none"
            value={searchText}
            onChange={handleChange}
          />
          <button className="btn btn--main">Search</button>
        </form>
        <div className="search__list">
          {!items.length ? (
            <div className="search__item search__item--noResult">
              <span class="emoji" role="img">
                ❌
              </span>
              <p>No Results Found, Try something different!</p>
            </div>
          ) : (
            items.map(item => <SearchItem key={getId(item.city_name)} item={item} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
