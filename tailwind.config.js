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
      fontSize: {
        '6xl': [
          '5rem',
          {
            lineHeight: '7.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        '7xl': [
          '10rem',
          {
            lineHeight: '10.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        '8xl': [
          '15rem',
          {
            lineHeight: '12.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        '9xl': [
          '20rem',
          {
            lineHeight: '15.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
      },
    },
  },
  plugins: [],
}
