import React from 'react';

const Error404 = ({ error, resetErrorBoundary }) => {
  return (
    <div className="page page--error">
      <span role="img" className="emoji">
        💔
      </span>
      <h1 className="heading">404 - Not Found</h1>
      <pre class="heading--sub">Hmm, Looks like you lost!</pre>
      <a href="/" class="btn btn--main">
        🏡 Go Back Home
      </a>
    </div>
  );
};

export default Error404;
