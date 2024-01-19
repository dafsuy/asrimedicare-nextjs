import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Brand() {
  return (
    <div className="flex items-center">
      <img
        src="/logo.png"
        alt="PT. Adi Saka Mandiri"
        className="w-8 mr-3 lg:w-10"
      />
      <h1
        id="author"
        className={`text-xl font-bold transition duration-500 ease-in-out text-logo lg:text-xl ${inter.className}`}
      >
        PT. ADI <span className={` text-accent`}>SAKA</span>{' '}
        MANDIRI
      </h1>
    </div>
  );
}
