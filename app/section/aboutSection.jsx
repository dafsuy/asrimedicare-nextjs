import LinkTo from '../ui/components/linkTo';

export default function AboutSection() {
  return (
    <section id="welcome" className="pt-20 lg:pt-28">
      <div className="container flex flex-col gap-10 px-4 mx-auto sm:flex-row md:items-center md:justify-evenly animete-up">
        <div
          className="w-full bg-center bg-cover rounded-bl-[50%] h-52 sm:max-w-md"
          style={{
            backgroundImage: 'url("/decoration/welcome-home.jpg")'
          }}
        ></div>
        <div
          className="max-w-xl text-dark"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          <h2 className="text-2xl font-bold md:text-3xl text-darkColor">
            Since 2011,
          </h2>
          <p className="mt-5 text-slate-600">
            PT Adi Saka Mandiri have been working with BUMN holding company and
            supplying hospital equiptment, medical equiptment, medical
            disposable laboratory products to hospitals and medical centres.
          </p>
          {/* To about */}
          <LinkTo classname={'mt-5'} link={'/about'}>
            About Company
          </LinkTo>
        </div>
      </div>
    </section>
  );
}
