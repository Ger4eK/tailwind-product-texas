import AboutImg from '../../src/assets/img/about.png';

const About = () => {
  return (
    <section
      className='my-[30px] xl:mt-[100px]'
      data-aos='fade-up'
      data-aos-offset='350'
    >
      <div className='container mx-auto'>
        <div className=' bg-accent-secondary/[15%] rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl: items-center xl:text-left xl:gap-x-[60px] xl:pb-0'>
          <div className='flex-1'>
            <img src={AboutImg} alt='about' />
          </div>
          <div className='flex-1 xl:pr-12'>
            <h2 className='h2 mb-10' data-aos='fade-up' data-aos-delay='300'>
              Find Out A Little More About Us
            </h2>
            <p
              className='max-w-[474px] mx-auto xl:mx-0'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              We are a company dedicated to the distribution of products by
              delivery to your home or to the place where you are, with the best
              quality of delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
