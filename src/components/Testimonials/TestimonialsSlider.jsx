import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';

import { Pagination } from 'swiper';

import Avatar1Img from '../../assets/img/testimonials/avatar1.png';
import Avatar2Img from '../../assets/img/testimonials/avatar2.png';
import Avatar3Img from '../../assets/img/testimonials/avatar3.png';

const TestimonialsSlider = () => {
  return (
    <Swiper
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      //className='mySwiper'
    >
      <SwiperSlide className='bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'>
        <img src={Avatar1Img} alt='avatar' />
        <div>
          <div className='text-lg text-primary font-bold'>Serena</div>
          <div className=' mb-4 font-semibold text-accent-primary'>
            rena.com
          </div>
          <p className='max-w-[240px]'>
            Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
            enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
            laoreet nulla.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'>
        <img src={Avatar2Img} alt='avatar' />
        <div>
          <div className='text-lg text-primary font-bold'>Natalia</div>
          <div className=' mb-4 font-semibold text-accent-primary'>
            nataliya.com
          </div>
          <p className='max-w-[240px]'>
            Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
            enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
            laoreet nulla.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'>
        <img src={Avatar3Img} alt='avatar' />
        <div>
          <div className='text-lg text-primary font-bold'>Vebin</div>
          <div className=' mb-4 font-semibold text-accent-primary'>
            vebin.com
          </div>
          <p className='max-w-[240px]'>
            Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
            enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
            laoreet nulla.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'>
        <img src={Avatar1Img} alt='avatar' />
        <div>
          <div className='text-lg text-primary font-bold'>Serena</div>
          <div className=' mb-4 font-semibold text-accent-primary'>
            rena.com
          </div>
          <p className='max-w-[240px]'>
            Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
            enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
            laoreet nulla.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'>
        <img src={Avatar2Img} alt='avatar' />
        <div>
          <div className='text-lg text-primary font-bold'>Natalia</div>
          <div className=' mb-4 font-semibold text-accent-primary'>
            nataliya.com
          </div>
          <p className='max-w-[240px]'>
            Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
            enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
            laoreet nulla.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'>
        <img src={Avatar3Img} alt='avatar' />
        <div>
          <div className='text-lg text-primary font-bold'>Vebin</div>
          <div className=' mb-4 font-semibold text-accent-primary'>
            vebin.com
          </div>
          <p className='max-w-[240px]'>
            Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra
            enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam
            laoreet nulla.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialsSlider;
