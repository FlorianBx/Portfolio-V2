/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00897b',
        secondary: '#f06292',
        danger: '#e3342f',
        card: '#20605960',
        background: '#181818',
        darktitle: '#1d1d1d',
      },
      borderColor: {
        primary: '#00897b',
        secondary: '#f06292',
        danger: '#e3342f',
      },
      fontFamily: {
        roboto: ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
