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
        primary: ["'Futura', sans-serif", ...fontFamily.sans],
        secondary: ["'Glacial Indifference', sans-serif", ...fontFamily.sans],
      },
      colors: {
        'sorella-background': 'rgb(var(--tw-color-sorella-background) / <alpha-value>)',
        'sorella-purple': 'rgb(var(--tw-color-sorella-purple) / <alpha-value>)',
        'sorella-pink': 'rgb(var(--tw-color-sorella-pink) / <alpha-value>)',
        'table-background-grey': 'rgb(var(--tw-color-table-background-grey) / <alpha-value>)',
        'gradient-pink': 'rgb(var(--tw-color-gradient-pink) / <alpha-value>)',
        'gradient-purple': 'rgb(var(--tw-color-gradient-purple) / <alpha-value>)',
        'card-background': 'rgb(var(--tw-color-card-background) / <alpha-value>)',
      },
      transitionProperty: {
        width: 'width',
      },
      fontSize: {
        '10xl': '10rem',
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
      borderRadius: {
        xl: '1.3em',
        '2xl': '2em',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  safelist: [
    {
      pattern: /z-(1|2|3|4|5|6|7|8|9)/,
    },
  ],
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin'), backfaceVisibility],
};
