import Link from 'next/link';
import Go from '../../icon/go';
export default function LinkTo({ classname, link, children }) {
  return (
    <span
      className={`${classname} font-bold text-primary transition ease-in-out items-center flex-row inline-flex`}
    >
      <Link href={link}>{children}</Link>
      <Go style={'w-10 text-primary'} />
    </span>
  );
} 
