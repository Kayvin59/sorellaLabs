/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    },
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Nunito', sans-serif", ...fontFamily.sans],
        secondary: ["'Glacial Indifference', sans-serif", ...fontFamily.sans],
      },
      colors: {
        'sorella-background': 'rgb(var(--tw-color-sorella-background) / <alpha-value>)',
        'sorella-purple': 'rgb(var(--tw-color-sorella-purple) / <alpha-value>)',
        'sorella-pink': 'rgb(var(--tw-color-sorella-pink) / <alpha-value>)',
      },
      transitionProperty: {
        width: 'width',
      },
      rotate: {
        270: '270deg',
      },
      dropShadow: {
        '3xl': '0 25px 25px rgb(0 0 0)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin'), backfaceVisibility],
};
