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
import Footer from './components/Footer/Footer';
import Top from './components/Top';
import { useEffect, useState } from 'react';

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  const [top, setTop] = useState(false);

  useEffect(() => {
    const topActive = () => {
      if (window.scrollY > 150) {
        setTop(true);
      } else {
        setTop(false);
      }
    };
    window.addEventListener('scroll', topActive);

    return () => {
      window.removeEventListener('scroll', topActive);
    };
  }, []);

  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
      <Footer />
      {top ? <Top /> : ''}
    </div>
  );
}

export default App;
