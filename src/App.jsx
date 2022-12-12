//! animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Features from './components/Feature';
import Header from './components/Header/Header';

//! Components
import Hero from './components/Hero';

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
    </div>
  );
}

export default App;
