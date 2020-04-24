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
      display: ['Montserrat', 'sans-serif'],
      body: ['Open Sans', 'sans-serif']
    },
    extend: {
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        ternary: 'var(--color-text-ternary)',
        inverse: 'var(--color-text-inverse)'
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        ternary: 'var(--color-bg-ternary)',
        inverse: 'var(--color-bg-inverse)'
      },
      borderColor: {
        primary: 'var(--color-border-primary)'
      },
      colors: {
        'logo-red': '#84161b',
        'logo-gray': '#292f35',
        'content-bg': '#222831'
      },
      spacing: {
        px10: '10px',
        px64: '64px',
        px82: '82px',
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
