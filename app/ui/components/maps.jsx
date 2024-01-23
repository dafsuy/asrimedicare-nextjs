export default function Maps({ classname }) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0701294127443!2d107.00480617396904!3d-6.1212633600217625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67410b2dafac9515%3A0xaf57cb601e5c48d!2sPT.%20Adi%20Saka%20Mandiri!5e0!3m2!1sid!2sid!4v1694326043552!5m2!1sid!2sid"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={classname}
    ></iframe>
  );
}
