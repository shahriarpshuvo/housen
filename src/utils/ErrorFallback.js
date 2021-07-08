const ErrorFallback = ({ error }) => {
  return (
    <div className="page page--error">
      <span role="img" className="emoji">
        😣
      </span>
      <h1 className="heading">500 - Internal Error</h1>
      <p class="guiding">{error.message}</p>
      <a href="/" class="btn btn--main">
        🏡 Go Back Home
      </a>
    </div>
  );
};

export default ErrorFallback;
