import React from 'react';

const navigationData = [
  {
    name: 'Deliver',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Signup',
    href: '#',
  },
];

const NavMobile = () => {
  return (
    <nav>
      <ul className='flex flex-col px-6 py-8 gap-y-4'>
        {navigationData.map((item, index) => {
          return (
            <li key={index}>
              <a className='text-white' href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
