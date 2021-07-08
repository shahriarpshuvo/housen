import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

const Home = React.lazy(() => import('./pages/Home'));
const BuyHouse = React.lazy(() => import('./pages/BuyHouse'));
const RentHouse = React.lazy(() => import('./pages/RentHouse'));
const Mortgage = React.lazy(() => import('./pages/Mortgage'));
const Signup = React.lazy(() => import('./pages/Signup'));
const About = React.lazy(() => import('./pages/About'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Terms = React.lazy(() => import('./pages/Terms'));
const ErrorFallback = React.lazy(() => import('./utils/ErrorFallback'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Error404 = React.lazy(() => import('./utils/Error404'));

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="app">
        <Header />
        <Suspense fallback={Loading}>
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/buy">
                <BuyHouse />
              </Route>
              <Route path="/rent">
                <RentHouse />
              </Route>
              <Route path="/mortgage">
                <Mortgage />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/faq">
                <FAQ />
              </Route>
              <Route path="/terms">
                <Terms />
              </Route>
              <Route path="/privacy">
                <Privacy />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="*">
                <Error404 />
              </Route>
            </Switch>
          </main>
        </Suspense>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
