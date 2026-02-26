import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Transformation from './components/Transformation';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-terracotta selection:text-white">
      <Navbar />
      <Hero />
      <PainPoints />
      <Transformation />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
