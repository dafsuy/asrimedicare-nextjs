/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        logo: '#006837',
        primary: '#08be6a',
        accent: '#f37221'
      },
      fontFamily: {
        inter: ['Inter']
      },
      backgroundImage: {
        'footer-pattern': "url('/src/img/logo.png')"
      }
    }
  },
  plugins: []
};
