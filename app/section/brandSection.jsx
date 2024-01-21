import BrandCard from '../ui/components/home/brand/brandCard';
import InnovativeIcon from '../ui/icon/innovative';
import PriceIcon from '../ui/icon/price';
import QualityIcon from '../ui/icon/quality';
import SecureIcon from '../ui/icon/secure';

export default function BrandSection() {
  return (
    <section className="pt-14 lg:pt-28">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center text-center">
          <h2
            className="max-w-md text-2xl font-bold md:text-3xl text-darkColor"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            With a professional team we present real solutions
          </h2>
        </div>

        <div className="grid max-w-sm grid-cols-1 gap-5 mx-auto overflow-hidden mt-14 md:gap-10 sm:max-w-3xl lg:mt-20 sm:grid-cols-2">
          <BrandCard icon={<InnovativeIcon />} title={'Innovative'}>
            Our products are supported by innovative designs that enable more
            efficient and effective medical solutions.
          </BrandCard>

          <BrandCard icon={<QualityIcon />} title={'High Quality'}>
            We uphold the highest quality standards in all our products and
            services.
          </BrandCard>
          <BrandCard icon={<PriceIcon />} title={'Competitive Prices'}>
            We offer high quality products at competitive prices, ensuring the
            best value for our customers.
          </BrandCard>
          <BrandCard icon={<SecureIcon />} title={'Guaranteed Security'}>
            We prioritize safety in every aspect of our products.
          </BrandCard>
        </div>
      </div>
    </section>
  );
}
