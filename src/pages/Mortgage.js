import React from 'react';
import { Link } from 'react-router-dom';

const Mortgage = () => {
  return (
    <div className="page page--error">
      <span role="img" className="emoji">
        💸
      </span>
      <h1 className="heading">Mortgage</h1>
      <p class="guiding">
        Hmm, Mortgage? Rising sea levels have lowered the value of my home. Now my mortgage is underwater.
      </p>
      <Link to="/" class="btn btn--main">
        🏡 Go Back Home
      </Link>
    </div>
  );
};

export default Mortgage;
