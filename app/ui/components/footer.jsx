import CopyRight from './copyright';
import Sosmed from './sosmed';

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
        <div>
          <h2 className="footer-title-list">Pages</h2>
          <ul className="footer-list">
            <li className="footer-list">
              <a href="index.html">Home</a>
            </li>
            <li className="footer-list">
              <a href="product.html">Our Product</a>
            </li>
            <li className="footer-list">
              <a href="about.html">About</a>
            </li>
            <li className="footer-list">
              <a href="index.html#contact">Contact</a>
            </li>
            <li className="footer-list">
              <a href="request.html">Request For Quotation</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title-list">Product</h2>
          <ul className="footer-list">
            <li className="footer-list">
              <a href="product.html#electromedic">Electromedic</a>
            </li>
            <li className="footer-list">
              <a href="product.html#hvac">HVAC</a>
            </li>
            <li className="footer-list">
              <a href="product.html#vehicle">Vehicle</a>
            </li>
            <li className="footer-list">
              <a href="product.html#hospital-furniture">Hospital Furniture</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title-list">Company</h2>
          <ul className="footer-list">
            <li className="footer-list">
              <a href="about.html#preface">Preface</a>
            </li>
            <li className="footer-list">
              <a href="about.html#background">Background</a>
            </li>
            <li className="footer-list">
              <a href="about.html#vision-mission">Vision & Mission</a>
            </li>
            <li className="footer-list">
              <a href="about.html#structure">Structure</a>
            </li>
            <li className="footer-list">
              <a href="about.html#legality">Legality</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Sosmed */}
      <div className="mt-10">
        <hr />
        <Sosmed />
        <CopyRight/>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute m-auto w-[500px] bg-cover blur-sm opacity-20 aspect-square bg-footer-pattern -right-60 bottom-40 sm:bottom-0"></div>
      </div>
    </div>
  );
}
