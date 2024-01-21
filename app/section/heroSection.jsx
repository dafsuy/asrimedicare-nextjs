import 'aos/dist/aos.css';
export default function HeroSection() {
  return (
    <section>
      <div
        id="hero"
        className="flex items-center w-full bg-left-top bg-cover filter"
        style={{ backgroundImage: 'url("/hero.jpg")' }}
      >
        <div className="flex items-center w-full h-full pt-60 lg:pt-40 pb-36 backdrop-brightness-50">
          <div className="container flex flex-col items-center justify-center px-4 mx-auto">
            <div className="max-w-xl">
              <h2
                className="text-4xl font-semibold text-white lg:text-5xl"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="3000"
                data-aos-easing="ease-out-back"
              >
                Navigate <span className="text-accent">Your</span> Healthcare
                With
                <span className="text-primary">Our</span> Innovative Solutions
              </h2>
              <div
                className="flex flex-col gap-5 mt-10"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="3000"
                data-aos-easing="ease-out-back"
              >
                <a
                  href="request.html"
                  className="w-full px-5 py-2 text-xs font-bold text-center text-white transition duration-75 ease-in border border-white rounded-full lg:text-sm hover:bg-white/50 hover:text-white active:scale-95 lg:hidden"
                >
                  Request For Quotation
                </a>
                <a
                  href="#contact"
                  className="w-full px-5 py-2 text-xs font-bold text-center text-white transition duration-75 ease-in border border-white rounded-full lg:text-sm hover:bg-white/50 hover:text-white active:scale-95"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
