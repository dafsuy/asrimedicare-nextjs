export default function ProductCategoryCard({ image, title, link }) {
  return (
    <div
      className="relative w-full bg-center bg-cover border-l-4 rounded-lg lg:w-4/5 aspect-video border-primary"
      style={{ backgroundImage: `url(${image})` }}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
    >
      <div className="absolute flex flex-col items-center w-full h-full justify-evenly">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <a
          href={link}
          className="px-5 py-2 text-white transition ease-in-out border-2 border-white rounded-full btext-lg hover:bg-white/30 active:scale-95"
        >
          View Product
        </a>
      </div>
      <div className="w-full h-full rounded-lg bg-black/50"></div>
    </div>
  );
}
