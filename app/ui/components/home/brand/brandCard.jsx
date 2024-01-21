export default function BrandCard({ icon, title, children }) {
  return (
    <div
      className="px-5 text-center text-white border rounded-sm bg-primary py-7 rounded-bl-[20%]"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
    >
      <div>
        <div className="relative flex items-center w-24 p-1 mx-auto bg-white rounded-full aspect-square">
          {icon}
        </div>
      </div>
      <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-white">{children}</p>
    </div>
  );
}
