module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        '.container-lt': {
          maxWidth: '100%',
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
