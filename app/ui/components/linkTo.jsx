import Link from 'next/link';
import Go from '../icon/go';
export default function LinkTo({ classname, link, children }) {
  return (
    <Link
      className={`${classname} font-bold text-primary  inline-flex flex-row items-center group cursor-pointer`}
      href={link}
    >
      {children}
      <Go
        style={
          'ml-5 group-hover:ml-1 w-8 transition-all ease-out duration-500 text-primary'
        }
      />
    </Link>
  );
}
