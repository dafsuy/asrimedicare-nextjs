import clsx from 'clsx';
export default function BackgroundNav({ isOn }) {
  return (
    <div
      className={clsx(
        'fixed left-0 w-full h-screen transition ease-out duration-500 z-[100] lg:hidden filter-nav bg-black/50 backdrop-blur-md top-[52px]',
        { 'hidden': isOn === false },
        { 'visible': isOn === true }
      )}
    ></div>
  );
}
