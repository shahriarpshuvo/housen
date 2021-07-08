import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="page page--error">
      <span role="img" className="emoji">
        🦄
      </span>
      <h1 className="heading">Signup</h1>
      <p class="guiding">A nice sign form could be added here, if I were told.</p>
      <Link to="/" class="btn btn--main">
        🏡 Go Back Home
      </Link>
    </div>
  );
};

export default Signup;
