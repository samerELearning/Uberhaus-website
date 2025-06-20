import About from './About';
import Clients from './Clients';
import Footer from './Footer';
import Hero from './Hero';
import Listings from './Listings';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Listings />
      <About />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
