/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  darkMode: 'class',

  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#0ec6d5',
        secondary: '#1e1d85',
        success: '#28a745',
        info: '#17a2b8',
        warning: '#f6b500',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#252525',
        // gray: '#696969',

        blue: '#2175F5',
        red: '#F84848',
        green: '#29B864',
        orange: '#FF5521',
        black: '#444444',
      },
      transitionDuration: {
        2000: '2000ms',
      },
      transitionProperty: {
        width: 'width',
      },
    },
    fontFamily: {
      satisfy: 'Satisfy, sans-serif',
      acme: 'Acme, cursive',
      poppins: 'Poppins ,sans-serif',
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
