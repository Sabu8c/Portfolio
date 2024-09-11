'use client';
import React, { useState } from 'react';

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flexBetween max-container padding-container relative py-5 lg:py-10 ${isOpen ? 'flex-wrap gap-5' : ''}`}
    >
      <Link className="z-50" href="/">
        <Image src="/logo.webp" alt="logo" width={40} height={29} />
      </Link>
      <ul
        className={`lg:flexCenter z-50 h-full gap-6 ${isOpen ? 'container-glass order-5 w-full scale-y-100 flex-col py-4' : 'hidden'}`}
      >
        {NAV_LINKS.map((link) => (
          <li className={`rounded-lg ${isOpen ? 'mx-4 items-start p-2 hover:bg-gray-40' : ''}`}>
            <Link
              href={link.href}
              key={link.key}
              className={`regular-16 text-grey-50 cursor-pointer pb-1.5 capitalize tracking-tight transition-all lg:hover:text-primary-50`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flexCenter z-50 gap-3">
        <div className="flexCenter flex-shrink-0">
          <button className="regular-12 xl:regular-16 flexCenter lg:rounded:xl rounded-lg bg-primary-70 p-2 transition-colors hover:bg-primary-90 lg:p-3">
            Commander un PC
          </button>
        </div>

        <button className="lg:hidden h-full p-2" onClick={toggleMenu}>
          <div className='flexCenter flex-col gap-[8px]'>
            <div className={`h-[2px] w-[30px] rounded-full bg-white origin-center transition-transform ${isOpen ? 'translate-y-[5px] rotate-45' : ''}`}></div>
            <div className={`h-[2px] w-[30px] rounded-full bg-white ${isOpen ? 'hidden' : ''}`}></div>
            <div className={`h-[2px] w-[30px] rounded-full bg-white origin-center transition-transform ${isOpen ? 'translate-y-[-4px] -rotate-45' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* <div
          className={`fixed inset-0 z-30 bg-gray-80 transition-all lg:hidden ${isOpen ? 'bg-opacity-70 pointer-events-all' : 'bg-opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        ></div> */}
    </nav>
  );
};

export default Navbar;
