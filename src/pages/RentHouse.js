import React from 'react';
import { Link } from 'react-router-dom';

const RentHouse = () => {
  return (
    <div className="page page--error">
      <span role="img" className="emoji">
        🏦
      </span>
      <h1 className="heading">Rent House</h1>
      <p class="guiding">Oops, you could've told to me implement this!</p>
      <Link to="/" class="btn btn--main">
        🏡 Go Back Home
      </Link>
    </div>
  );
};

export default RentHouse;
