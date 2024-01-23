import Maps from '../ui/components/maps';
import EmailIcon from '../ui/icon/email';
import LocationIcon from '../ui/icon/location';
import PhoneIcon from '../ui/icon/phone';
import WaIcon from '../ui/icon/wa';
export default function ContactSection() {
  return (
    <section id="contact" className="py-14 lg:py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-center text-darkColor lg:text-3xl">
            Contact Us
          </h2>
          <p className="max-w-sm m-auto mt-5 text-center text-slate-600">
            We look forward to the opportunity to talk with you and provide the
            best solution
          </p>
        </div>

        <div className="flex flex-col max-w-sm gap-10 mx-auto mt-10 sm:mt-20 md:flex-row-reverse md:max-w-full md:justify-center">
          <div className="p-5 bg-white border-t-4 shadow-lg md:w-1/2 border-accent rounded-xl">
            <form id="form-wa" action="">
              <div>
                <label
                  htmlFor="name-form-wa"
                  className="block mb-2 text-sm font-semibold text-slate-700"
                >
                  Name
                </label>
                <input
                  id="name-form-wa"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="block w-full px-4 py-3 text-sm transition border-gray-300 rounded-md shadow-md peer-invalid:text-pink-600 peer text-slate-500 focus:border-green-500 focus:ring-green-500 invalid:text-pink-500"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="text-form-wa"
                  className="block mb-2 text-sm font-semibold text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="text-form-wa"
                  className="block w-full h-40 px-4 py-3 text-sm transition border-gray-300 rounded-md shadow-md peer-invalid:text-pink-600 peer text-slate-500 focus:border-green-500 focus:ring-green-500 invalid:text-pink-500"
                  placeholder="Type Message"
                  name="text"
                ></textarea>
              </div>
            </form>

            <div className="mt-5">
              <a href="https://wa.me/6281770584158" className='inline'>
                <button
                  id="submit-form-wa"
                  className="inline-flex flex-row items-center gap-2 px-4 py-2 font-bold text-white transition ease-in-out rounded-full bg-primary hover:bg-primary active:scale-95"
                  title="Send Message via Whatsapp"
                  type="button"
                >
                  <WaIcon color={'text-white'} width={'w-8'} height={'w-8'} />
                  Send Whatsapp
                </button>
              </a>
            </div>
          </div>
          {/* Contacts */}
          <address className="p-5 not-italic bg-white border-t-4 shadow-xl md:w-1/2 border-accent text-slate-600 rounded-xl">
            {/* Email */}
            <div className="flex">
              <EmailIcon color={'text-primary'} width={'w-8'} height={'w-8'} />
              <div className="ml-5">
                <h3 className="font-bold">Email :</h3>

                <a
                  href="mailto:info@asrimedicare.com"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  title="Contact Via Email"
                >
                  info@asrimedicare.com
                </a>
              </div>
            </div>
            {/* Phone */}
            <div className="flex mt-5">
              <PhoneIcon color={'text-primary'} width={'w-8'} height={'w-8'} />
              <div className="ml-5">
                <h3 className="font-bold">Call :</h3>
                <ul>
                  <li>
                    <a
                      href="tel:02189097445"
                      className="text-blue-700 hover:underline"
                      target="_blank"
                      title="Contact Via Phone"
                    >
                      021-8909-7445
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:6281770584158"
                      className="text-blue-700 hover:underline"
                      target="_blank"
                      title="Contact Via Phone"
                    >
                      0817-7058-4158
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Location start */}
            <div className="flex flex-row items-start mt-5">
              <LocationIcon
                color={'text-primary'}
                width={'w-8'}
                height={'w-8'}
              />
              <div className="w-4/5 ml-5">
                <h3 className="font-bold">Office :</h3>
                <p>
                  Ruko Feia Segera City Blok RSC 15/21 Segerajaya Kec.
                  Tarumajaya Kab. Bekasi Jawa Barat Indonesia 17281
                </p>
              </div>
            </div>
            {/* Location End */}
            {/* Maps */}
            <div>
              <Maps classname={'w-full mt-10 rounded-lg h-60'} />
            </div>
            {/* Maps End */}
          </address>
        </div>
      </div>
    </section>
  );
}
