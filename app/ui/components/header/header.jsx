import Brand from './brand';
import Hamburger from './hamburger/hamburger';
import Navbar from './navbar';
export default function Header() {
  return (
    <div
      id="home"
      className="container top-0 left-0 flex items-center justify-between w-full px-4 py-3 mx-auto duration-500 bg-transparent linear"
    >
      {/* Brand */}
      <Brand />
      {/* Navbar */}
      <Navbar />
    </div>
  );
}
