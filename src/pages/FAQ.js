import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className="page page--error">
      <span role="img" className="emoji">
        ❓
      </span>
      <h1 className="heading">FAQ</h1>
      <p class="guiding">Sorry, no question will be answered here!</p>
      <Link to="/" class="btn btn--main">
        🏡 Go Back Home
      </Link>
    </div>
  );
};

export default FAQ;
