import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import EstimateForm from './components/EstimateForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <NavBar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <EstimateForm />
      <Footer />
    </div>
  );
}

export default App;
