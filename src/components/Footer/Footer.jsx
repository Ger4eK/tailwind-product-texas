import React from 'react';
import LogoV2 from '../../assets/img/logo-v2.png';
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';

import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer data-aos='fade-up'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row text-center xl:text-left gap-y-12'>
          <div className=' w-[45%] mx-auto flex flex-col items-center xl:items-start'>
            <a href='#'>
              <img className=' mb-[65px]' src={LogoV2} alt='logo' />
            </a>
            <div className=' max-w-[260px] mb-5 text-primary font-bold'>
              Product Texas, 234 Bokki Avenue Street BMW 99388
            </div>
            <div className='font-light italic'>info@producttexas.project</div>
            <div className='font-light italic'>1-232-7788 (Main)</div>
          </div>

          <div className='flex flex-1 flex-col gap-y-14 xl:flex-row justify-between'>
            <div>
              <div className=' font-extrabold text-primary mb-8'>About</div>
              <ul className='flex flex-col gap-y-4'>
                <li>
                  <a className=' text-primary' href='#'>
                    Profile
                  </a>
                </li>
                <li>
                  <a className=' text-primary' href='#'>
                    Features
                  </a>
                </li>
                <li>
                  <a className=' text-primary' href='#'>
                    Careers
                  </a>
                </li>
                <li>
                  <a className=' text-primary' href='#'>
                    DW News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className=' font-extrabold text-primary mb-8'>Help</div>
              <ul className='flex flex-col gap-y-4'>
                <li>
                  <a className='text-primary' href='#'>
                    Support
                  </a>
                </li>
                <li>
                  <a className='text-primary' href='#'>
                    Sign Up
                  </a>
                </li>
                <li>
                  <a className='text-primary' href='#'>
                    Guide
                  </a>
                </li>
                <li>
                  <a className='text-primary' href='#'>
                    Reports
                  </a>
                </li>
                <li>
                  <a className='text-primary' href='#'>
                    Q & A
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className='font-extrabold text-primary mb-8'>
                Social Media
              </div>
              <ul className='flex gap-y-4 gap-x-4 justify-center'>
                <li className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all'>
                  <a className='text-white text-xl hover:text-white' href='#'>
                    <FaYoutube />
                  </a>
                </li>
                <li className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all'>
                  <a className='text-white text-xl hover:text-white' href='#'>
                    <FaInstagram />
                  </a>
                </li>
                <li className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all'>
                  <a className='text-white text-xl hover:text-white' href='#'>
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
