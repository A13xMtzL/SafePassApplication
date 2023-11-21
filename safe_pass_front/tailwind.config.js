// (c) URJC - Safe Pass 2023, rights reserved.

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'dark-mode': '#080c17',
        'light-mode': '#f5f3f5',
      },
      borderColor: {
        'light-mode': '#db9c5560',
        'dark-mode': '#47bcd128',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
