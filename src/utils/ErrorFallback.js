import React from 'react';

const ErrorFallback = ({ error }) => {
  return (
    <div className="page page--error">
      <span role="img" className="emoji">
        😣
      </span>
      <h1 className="heading">500 - Internal Error</h1>
      <pre class="heading--sub">{error.message}</pre>
      <a href="/" class="btn btn--main">
        🏡 Go Back Home
      </a>
    </div>
  );
};

export default ErrorFallback;
