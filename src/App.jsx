//! animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

//! Components
import Header from './components/Header/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Feature';
import Testimonials from './components/Testimonials/Testimonials';
import CtaSection from './components/CtaSection';

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
    </div>
  );
}

export default App;
