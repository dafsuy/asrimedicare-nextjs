'use client';
import Link from 'next/link';
import CopyRight from '../copyright';
import Sosmed from '../sosmed';
import { navListData } from '@/app/lib/data';
import Hamburger from './hamburger/hamburger';
import { useState } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const [isOn, setisOn] = useState(false);
  const navList = navListData;
  const toggle = () => {
    return setisOn(!isOn);
  };

  return (
    <div className="flex items-center">
      <nav
        id="nav-menu"
        className={clsx(
          'fixed top-[69px] right-0 z-[1500] h-screen font-semibold text-slate-700 transition-all duration-300 ease-in translate-x-full lg:h-auto lg:w-full lg:translate-x-0 lg:pt-0 w-60 bg-white lg:static lg:block lg:bg-transparent lg:shadow-none lg:opacity-100 border-l lg:border-none overflow-x-hidden px-3',
          { '-translate-x-[1px]': isOn === true }
        )}
      >
        <ul id="nav-list" className="block text-md lg:flex lg:items-center">
          {navList.map((list) => (
            <Link
              key={list.id}
              href={list.link}
              className="flex py-2 ml-8 duration-300 ease-in lg:border-none text-dark hover:text-primary"
            >
              {list.name}
            </Link>
          ))}

          <Link
            href="/request"
            className="block px-3 py-2 mx-auto mt-3 text-sm text-center text-white duration-300 ease-in rounded-full lg:mt-0 bg-primary lg:flex lg:ml-8 lg:border-none text-dark group-hover:text-white bg-secondary"
          >
            Request For Quotation
          </Link>
        </ul>
        <div className="lg:hidden">
          <hr className="mt-4" />
          {/* Sosmed */}
          <Sosmed />
          <CopyRight />
        </div>

        {/* Hamburger */}
      </nav>
      <Hamburger isOn={isOn} onCLick={toggle}></Hamburger>
    </div>
  );
}
