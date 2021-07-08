import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page page--error">
      <span role="img" className="emoji">
        🙌
      </span>
      <h1 className="heading">About Us</h1>
      <p class="guiding">
        A real estate listings website, built with React. This is an assessment for "Frontend Developer" position at
        GoZayaan.
      </p>
      <Link to="/" class="btn btn--main">
        🏡 Go Back Home
      </Link>
    </div>
  );
};

export default About;
