import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="page page--error">
      <span role="img" className="emoji">
        📝
      </span>
      <h1 className="heading">Terms &amp; Conditions</h1>
      <p class="guiding">A long lists of terms and conditions that no one reads but accept anyways.</p>
      <Link to="/" class="btn btn--main">
        🏡 Go Back Home
      </Link>
    </div>
  );
};

export default Terms;
