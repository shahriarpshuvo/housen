import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Search />
      </main>
      <Footer />
    </div>
  );
};

export default App;
