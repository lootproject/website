module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
      fontFamily: {
      display: ['EB Garamond', 'serif'],
      body: ['Inconsolata', 'monospace'],
    },
    colors: {
      gray: {
        100: '#edece9',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#161619',
        1000: '#0e0e0e',
      },
    },
    minHeight: {
      0: '0',
      45: '45px',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      full: '100vh',
    },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
