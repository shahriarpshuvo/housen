import { useState, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';
import { ReactComponent as CrossIcon } from '../assets/icons/cross.svg';

import SearchItem from './SearchItem';
import { getSearchResult, getTopRealEstate } from '../api';
import Loading from './Loading';

const getId = text => text.replace(' ', '_').toLowerCase();

const Search = () => {
  const [items, setItems] = useState({});
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTopRealEstate()
      .then(items => {
        setItems(items);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!searchText) return setItems([]);
    setLoading(true);
    getSearchResult(searchText)
      .then(items => {
        setItems(items);
        setLoading(false);
      })
      .catch(() => setLoading(false));
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
          {loading ? (
            <div className="search__item search__item--noResult">
              <Loading />
            </div>
          ) : !items.length ? (
            <div className="search__item search__item--noResult">
              <CrossIcon width="48" height="48" />
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
