//! header img
import HeroImage from '../assets/img/hero-img.png';

const Hero = () => {
  return (
    <section className='lg:h-[900px] pb-12 '>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col xl:flex-row items-center h-full'>
          <div className=' text-center xl:text-left xl:absolute'>
            <h1
              className='h1 xl:max-w-[700px] mb-6 lg:mb-12 '
              data-aos='fade-down'
              data-aos-delay='400'
            >
              Order Products Faster Easier
            </h1>
            <p
              className='lead xl:max-w-[380px] mb-6 lg:mb-12'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Order your favorite foods at any time and we will deliver them
              right to where you are.
            </p>
            <button
              className='btn font-medium btn-primary mb-8 xl:mb-0'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              Get Started
            </button>
          </div>
          <img
            className=' xl:absolute xl:-right-12 xl:bottom-16'
            data-aos='fade-up'
            data-aos-delay='700'
            src={HeroImage}
            alt='header'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
