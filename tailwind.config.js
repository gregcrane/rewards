/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: 'Green',
        'primary-hover': '#990000',
        'background-dark': '#282828',
        'background-light': '#F5F5F5',
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { left: '-250px' },
          '45%': { left: 'calc(50%)', transform: 'translateX(-50%)' },
          '50%': { left: 'calc(50%)', transform: 'translateX(-50%)' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
};
