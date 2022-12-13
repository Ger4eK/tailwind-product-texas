import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

const CtaSection = () => {
  return (
    <section className=' my-[75px] xl:my-[150px] border-t-2' data-aos='fade-up'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-between items-center'>
          <div className=' py-12 xl:py-24 text-center xl:text-left'>
            <h2 className='h2 mb-5' data-aos='fade-up' data-aos-delay='300'>
              Contact Us From Here
            </h2>
            <p className='lead' data-aos='fade-up'>
              Get limited 1 week free try our features!
            </p>
          </div>

          <div className='flex flex-col xl:flex-row gap-y-4 gap-x-[30px]'>
            <button
              className='btn btn-secondary'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              Learn more
            </button>
            <button
              className='btn btn-quaternary flex items-center gap-x-[20px] group'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              Request Demo
              <BsArrowRight className=' text-2xl text-accent-primary group-hover:text-white transition' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
