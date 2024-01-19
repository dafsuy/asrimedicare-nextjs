export default function LocationIcon({ color, width, height }) {
  return (
    <svg
      className={`${color} ${width} ${height}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <title>{'See location'}</title>
      <path d="M12 1C7.58 1 4 4.58 4 9c0 7.08 8 14 8 14s8-6.92 8-14c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </svg>
  );
}
