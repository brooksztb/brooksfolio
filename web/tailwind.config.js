module.exports = {
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    flex: {
      '1': '1 0 auto'
    },
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'logo-red': '#84161b',
        'logo-gray': '#292f35',
        'content-bg': '#222831'
      },
      spacing: {
        px10: '10px',
        px64: '64px',
        px300: '300px',
        px320: '320px',
        px340: '340px',
        px900: '900px'
      },
      opacity: {
        inherit: 'inherit',
        '80': '.80'
      },
      height: {
        logo: '220px',
        'screen-1/3': '33vh'
      },
      width: {
        auto: 'auto'
      },
      minHeight: {
        '38': '38vh',
        px250: '250px'
      },
      minWidth: {
        '70': '70%'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    transitionProperty: ['responsive', 'hover', 'focus']
  },
  plugins: []
}
