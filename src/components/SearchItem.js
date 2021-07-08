import React from 'react';
import PropTypes from 'prop-types';
import millify from 'millify';

import { ReactComponent as FilterIcon } from '../assets/icons/filter.svg';
import { ReactComponent as ChevronRightIcon } from '../assets/icons/chevron-right.svg';

const SearchItem = ({ item }) => {
  const { city_name, short_code, rate, apartment_bed, find_more } = item;
  const convertedRate = millify(rate, { lowercase: true, precision: 2 });
  return (
    <div className="search__item">
      <h3 className="search__itemCity">
        {city_name}, {short_code}
      </h3>
      <div className="search__itemInfo meta">
        <FilterIcon />
        <span>
          ${convertedRate}+ / {apartment_bed} Beds / Appt. {find_more ? `... ${find_more} more` : ''}
        </span>
        <ChevronRightIcon />
      </div>
    </div>
  );
};
export default SearchItem;

SearchItem.defaultProps = {
  item: {
    city_name: 'Dhaka',
    short_code: 'BD',
    rate: 1500,
    apartment_bed: 2,
    find_more: 1
  }
};

SearchItem.propTypes = {
  item: PropTypes.shape({
    city_name: PropTypes.string.isRequired,
    short_code: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    apartment_bed: PropTypes.number.isRequired,
    find_more: PropTypes.number
  })
};
