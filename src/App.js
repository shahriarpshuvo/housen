import { ErrorBoundary } from 'react-error-boundary';

import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';
import ErrorFallback from './utils/ErrorFallback';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Search />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
