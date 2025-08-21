/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-bg': '#0D0D0D',
        'dark-card': '#1a1a1a',
        'dark-border': '#3B3B3B',
        'dark-text-primary': '#FEFFFF',
        'dark-text-secondary': '#9E9E9E',
      },
    },
  },
  plugins: [],
};
