//! logo img
import Logo from '../../assets/img/logo.png';

//! icons
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { useState } from 'react';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header
      className='pt-12 mb-12 lg:mb-0 z-20 relative px-4 lg:px-0'
      data-aos='fade-down'
      data-aos-delay='1200'
      data-aos-duration='1000'
    >
      
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-[120px]'>
            <a href='#'>
              <img src={Logo} alt='logo' />
            </a>

            {/* nav initially hidden - Only show on large screen */}

            <nav className='hidden lg:flex'>
              <Nav />
            </nav>
          </div>

          {/* Mobile nav - Initially is showing / hidden on large screen */}
          <div
            className={`${
              navMobile ? ' max-h-52' : 'max-h-0'
            } lg:hidden bg-accent-tertiary absolute top-32 w-[720px] mx-auto left-0 right-0 font-bold rounded transition-all duration-[650ms] overflow-hidden`}
          >
            <NavMobile />
          </div>

          <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
            Request Demo
            <BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition' />
          </button>

          {/* Nav Trigger Btn / Only shows on mobile views */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className='lg:hidden text-2xl text-primary cursor-pointer'
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
