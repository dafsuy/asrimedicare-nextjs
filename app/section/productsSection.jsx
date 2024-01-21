import { productsCategoryHome } from '../lib/data';
import ProductCategoryCard from '../ui/components/home/productCategoryCard/productCardCategory';
export default function ProductsSection() {
  return (
    <section id="product" className="pt-14 lg:pt-20">
      <div className="container px-4 mx-auto">
        <div className="mx-auto">
          <h2
            className="text-2xl font-bold text-center text-darkColor md:text-3xl"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            Our Product
          </h2>
          <p
            className="max-w-md mx-auto mt-5 overflow-hidden text-center text-slate-600"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-easing="ease-out"
          >
            Discover innovative, high-quality medical products. We are committed
            to providing the best service and international standard products in
            the medical industry.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 place-items-center sm:grid-cols-2 mt-14 lg:mt-20">
          {productsCategoryHome.map((category) => (
            <ProductCategoryCard
              key={category.id}
              image={category.image}
              title={category.name}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
