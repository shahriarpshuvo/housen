import React from 'react';
import { Link } from 'react-router-dom';

const BuyHouse = () => {
  return (
    <div className="page page--error">
      <span role="img" className="emoji">
        💒
      </span>
      <h1 className="heading">Buy House</h1>
      <p class="guiding">Hmm, you are looking for something? You've not told me to implement this.</p>
      <Link to="/" class="btn btn--main">
        🏡 Go Back Home
      </Link>
    </div>
  );
};

export default BuyHouse;
