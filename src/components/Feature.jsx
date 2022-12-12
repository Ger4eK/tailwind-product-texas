import { BsArrowRight } from 'react-icons/bs';

import Feature1Img from '../../src/assets/img/features/feature1.png';
import Feature2Img from '../../src/assets/img/features/feature2.png';
import Feature3Img from '../../src/assets/img/features/feature3.png';
import Feature4Img from '../../src/assets/img/features/feature4.png';

import Feature1BgImg from '../../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../../src/assets/img/features/feature4_bg.png';

const Features = () => {
  return (
    <section className='my-[70px] xl:my-[150px]'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2
            className='h2 mb-6 xl:mb-12'
            data-aos='fade-down'
            data-aos-delay='100'
          >
            Some Services We Offer
          </h2>
          <p
            className=' lead max-w-[585px] mx-auto mb-16 xl:mb-24'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            With our app you can view the route of your order, from our local
            headquarters to the place where you are. Look for the app now!
          </p>
        </div>
        <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
          <div
            className='w-full  max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto'
            data-aos='zoom-in'
            data-aos-offset='100'
            data-aos-delay='400'
          >
            <div className='  xl:flex absolute top-0 right-0 -z-10'>
              <img src={Feature1BgImg} alt='feature bg' />
            </div>
            <div>
              <img
                className=' max-w-[120px] xl:mr-7 xl:max-w-[230px]'
                data-aos='zoom-in-right'
                data-aos-delay='400'
                src={Feature1Img}
                alt='feature'
              />
            </div>
            <div className='max-w-[220px]'>
              <h3 className='h3 mb-4'>Payment Done</h3>
              <p className='font-light italic gap-x-2'>
                Pay with a Visa or PayPal card and without much ado
              </p>
              <div className=' flex items-center gap-x-2 mt-2 group'>
                <a className=' text-primary font-bold' href='#'>
                  Learn more
                </a>
                <BsArrowRight className='text-xl text-accent-primary group-hover:ml-[5px] transition-all' />
              </div>
            </div>
          </div>
          <div
            className='w-full  max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto'
            data-aos='zoom-in'
            data-aos-offset='100'
            data-aos-delay='700'
          >
            <div className='  xl:flex absolute top-0 right-0 -z-10'>
              <img src={Feature2BgImg} alt='feature bg' />
            </div>
            <div>
              <img
                className=' max-w-[120px] xl:mr-7 xl:max-w-[230px]'
                data-aos='zoom-in-right'
                data-aos-delay='700'
                src={Feature2Img}
                alt='feature'
              />
            </div>
            <div className='max-w-[220px]'>
              <h3 className='h3 mb-4'>Find Your Product</h3>
              <p className='font-light italic gap-x-2'>
                We offer sale of products through the Internet..
              </p>
              <div className=' flex items-center gap-x-2 mt-2 group'>
                <a className=' text-primary font-bold' href='#'>
                  Learn more
                </a>
                <BsArrowRight />
              </div>
            </div>
          </div>
          <div
            className='w-full  max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto'
            data-aos='zoom-in'
            data-aos-offset='100'
            data-aos-delay='1000'
          >
            <div className='  xl:flex absolute top-0 right-0 -z-10'>
              <img src={Feature3BgImg} alt='feature bg' />
            </div>
            <div>
              <img
                className=' max-w-[120px] xl:mr-7 xl:max-w-[230px]'
                data-aos='zoom-in-right'
                data-aos-delay='1000'
                src={Feature3Img}
                alt='feature'
              />
            </div>
            <div className='max-w-[220px]'>
              <h3 className='h3 mb-4'>Print Out</h3>
              <p className='font-light italic gap-x-2'>
                Print out service gives you convenience if someday you need
                print data, just edit it all and just print it.
              </p>
              <div className=' flex items-center gap-x-2 mt-2 group'>
                <a className=' text-primary font-bold' href='#'>
                  Learn more
                </a>
                <BsArrowRight />
              </div>
            </div>
          </div>
          <div
            className='w-full  max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto'
            data-aos='zoom-in'
            data-aos-offset='100'
            data-aos-delay='1300'
          >
            <div className='  xl:flex absolute top-0 right-0 -z-10'>
              <img src={Feature4BgImg} alt='feature bg' />
            </div>
            <div>
              <img
                className=' max-w-[120px] xl:mr-7 xl:max-w-[230px]'
                data-aos='zoom-in-right'
                data-aos-delay='1300'
                src={Feature4Img}
                alt='feature'
              />
            </div>
            <div className='max-w-[220px]'>
              <h3 className='h3 mb-4'>Product Received</h3>
              <p className='font-light italic gap-x-2'>
                In our app you can see the delay time of your order...
              </p>
              <div className=' flex items-center gap-x-2 mt-2 group'>
                <a className=' text-primary font-bold' href='#'>
                  Learn more
                </a>
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
