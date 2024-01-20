export default function PhoneIcon({ color, width, height }) {
  return (
    <svg
      className={`${color} ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
    >
      <title>{'Contact via Phone'}</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.73 12.996c-.463 1.407-2.277 2.109-3.573 1.992-1.77-.16-3.696-1.099-5.158-2.133C3.85 11.335 1.837 8.984.664 6.489-.165 4.726-.35 2.558.882.951c.456-.594.95-.911 1.69-.948C3.6-.047 3.744.541 4.097 1.457c.263.685.614 1.384.81 2.094.367 1.325-.916 1.38-1.078 2.463-.1.683.727 1.599 1.101 2.086a10.105 10.105 0 0 0 2.608 2.403c.57.359 1.488 1.006 2.14.649 1.004-.55.91-2.243 2.313-1.67.727.296 1.431.723 2.125 1.097 1.073.577 1.023 1.175.614 2.417-.306.928.306-.928 0 0"
      />
    </svg>
  );
}
