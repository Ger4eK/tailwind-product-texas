import React, { useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Top = () => {
  const topFunction = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={topFunction}
      className='fixed z-50 flex justify-center items-center bottom-5 right-5 h-16 w-16 rounded-full  bg-accent-primary hover:bg-accent-primary/50 transition-all duration-300 cursor-pointer group'
      data-aos='fade-up'
    >
      <AiOutlineArrowUp className='h-6 w-6 text-white group-hover:text-black transition-all duration-300 ' />
    </div>
  );
};

export default Top;
