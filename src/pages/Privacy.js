import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="page page--error">
      <span role="img" className="emoji">
        🔐
      </span>
      <h1 className="heading">Privacy</h1>
      <p class="guiding">Shhhh... 🤫 It's between me and GoZayaan.</p>
      <Link to="/" class="btn btn--main">
        🏡 Go Back Home
      </Link>
    </div>
  );
};

export default Privacy;
