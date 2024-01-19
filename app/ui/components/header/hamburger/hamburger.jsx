'use client';
import { useState } from 'react';
import './hamburger.css';
import clsx from 'clsx';

export default function Hamburger({isOn, onCLick}) {
  return (
    <button
      id="hamburger"
      name="hamburger"
      type="button"
      className={clsx('absolute block right-7 lg:hidden z-[2000]', {
        'hamburger-active': isOn === true
      })}
      onClick={onCLick}
    >
      <span className="transition duration-300 origin-top-left hamburger-line"></span>
      <span className="transition duration-300 hamburger-line"></span>
      <span className="transition duration-300 origin-bottom-left hamburger-line"></span>
    </button>
  );
}
