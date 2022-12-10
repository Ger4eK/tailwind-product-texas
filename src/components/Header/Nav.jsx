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

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-x-8'>
        {navigationData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
