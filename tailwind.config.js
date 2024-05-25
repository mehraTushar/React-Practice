/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      zIndex: {
        60: '60',
        70: '70',
        100: '100',
      },
    },
    plugins: [],
  },
};
