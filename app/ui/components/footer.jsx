import CopyRight from './copyright';
import Sosmed from './sosmed';
import { footLinkList } from '@/app/lib/data';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="container relative z-10 items-center justify-center p-4 pt-10 mx-auto bg-white">
      <div>
        <img src="/logo.png" className="w-14" alt="PT. Adi Saka Mandiri" />
        <h2 className="mt-4 text-xl font-bold">
          Navigate Your Healthcare With Our Innovative Solutions.
        </h2>
      </div>
      <div className="flex flex-col flex-wrap w-full gap-5 mt-10 sm:flex-row justify-evenly">
        {footLinkList.map((listTitle) => (
          <div key={listTitle.id}>
            <h2 className="font-semibold text-slate-800">{listTitle.name}</h2>
            <ul>
              {listTitle.list.map((link) => (
                <li
                  key={link.id}
                  className="my-3 font-semibold transition ease-in text-slate-500 hover:text-secondary"
                >
                  <Link href={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Sosmed */}
      <div className="mt-10">
        <hr />
        <Sosmed />
        <CopyRight />
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute m-auto w-[500px] bg-cover blur-sm opacity-20 aspect-square bg-footer-pattern -right-60 bottom-40 sm:bottom-0"></div>
      </div>
    </div>
  );
}
