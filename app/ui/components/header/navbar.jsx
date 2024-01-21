'use client';
import Link from 'next/link';
import CopyRight from '../copyright';
import Sosmed from '../sosmed';
import { navListData } from '@/app/lib/data';
import Hamburger from './hamburger/hamburger';
import { useState } from 'react';
import clsx from 'clsx';
import BackgroundNav from './backgroundNav';

export default function Navbar() {
  const [isOn, setisOn] = useState(false);
  const navList = navListData;
  const classToRemove = 'translate-w-full';
  const toggle = () => {
    return setisOn(!isOn);
  };

  return (
    <div className="flex items-center">
      <nav
        id="nav-menu"
        className={clsx(
          'fixed top-[54px] right-0 z-[1500] h-screen font-semibold text-slate-700 transition-all duration-500 ease-out lg:h-auto lg:w-full lg:translate-x-0 lg:pt-0 w-2/3 sm:w-1/3 bg-white lg:static lg:block lg:bg-transparent lg:shadow-none lg:opacity-100 border-l lg:border-none px-3',
          { 'translate-x-full': isOn === false },
          { 'translate-x-0': isOn === true }
        )}
      >
        <ul id="nav-list" className="block text-md lg:flex lg:items-center">
          {navList.map((list) => (
            <Link
              key={list.id}
              href={list.link}
              className="flex py-2 ml-8 duration-300 ease-in lg:border-none text-dark hover:text-primary"
              onClick={() => toggle()}
            >
              {list.name}
            </Link>
          ))}

          <Link
            href="/request"
            className="block px-3 py-2 mx-auto mt-3 text-sm text-center text-white duration-300 ease-in rounded-full lg:mt-0 bg-primary lg:flex lg:ml-8 lg:border-none text-dark group-hover:text-white bg-secondary"
            onClick={() => toggle()}
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
      <BackgroundNav onCLick={toggle} isOn={isOn}></BackgroundNav>
    </div>
  );
}
