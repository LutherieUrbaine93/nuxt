module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        carnelian: {
          lighter: '#FF7373',
          light: '#D94141',
          DEFAULT: '#B31B1B',
          dark: '#8D0000',
          darker: '#660000',
        }
      },
      boxShadow: {
        sm: '4px 4px rgba(0, 0, 0, .5)',
        DEFAULT: '4px 4px rgba(0, 0, 0, .5)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        '.container-lt': {
          width: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen sm': {
            maxWidth: '600px',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
          '@screen md': {
            maxWidth: '700px',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
          '@screen lg': {
            maxWidth: '800px',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
          '@screen xl': {
            maxWidth: '900px',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
        }
      })
    }],
}
