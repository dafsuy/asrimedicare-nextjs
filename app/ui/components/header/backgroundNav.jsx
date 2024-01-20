'use client';
import clsx from 'clsx';
export default function BackgroundNav({ isOn, onClick }) {
  const klik = () => console.log('Clicked');
  return (
    <div
      onClick={onClick}
      className={clsx(
        'fixed left-0 w-full h-screen transition ease-out duration-500 z-[100] lg:hidden  bg-black/60 backdrop-blur-sm top-[54px]',
        { hidden: isOn === false },
        { visible: isOn === true }
      )}
    ></div>
  );
}
