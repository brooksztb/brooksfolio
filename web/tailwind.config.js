const plugin = require('tailwindcss/plugin')

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
        initial: 'var(--color-primary)',
        'initial--muted': 'var(--color-primary--muted)',
        primary: 'var(--color-text-primary)',
        'primary--muted': 'var(--color-text-primary--muted)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        inverse: 'var(--color-text-inverse)'
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        'tertiary--light': 'var(--color-bg-tertiary--light)',
        inverse: 'var(--color-bg-inverse)'
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
        secondary: 'var(--color-border-secondary)',
        inverse: 'var(--color-border-inverse)'
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
      boxShadow: {
        shadow: 'var(--box-shadow)'
      },
      height: {
        auto: 'auto',
        logo: '220px',
        'screen-1/3': '33vh'
      },
      inset: {
        '1/2': '50%'
      },
      width: {
        auto: 'auto',
        '90': '90%'
      },
      minHeight: {
        '38': '38vh',
        px250: '250px'
      },
      minWidth: {
        '70': '70%'
      },
      maxWidth: {
        '1080': '1080px',
        '1250': '1250px'
      },
      maxHeight: {
        '400': '400px'
      },
      zIndex: {
        '1000': 1000
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    transitionProperty: ['responsive', 'hover', 'focus']
  },
  plugins: [
    plugin(function({ addBase, addComponents, addUtilities, config }) {
      addBase({
        '*': {
          boxSizing: 'border-box',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale'
        },
        p: {
          marginBottom: '1.25em'
        },
        'h1, h2, h3, h4, h5': {
          transition: 'color .6s',
          margin: '2.75rem 0 1rem',
          fontWeight: config('theme.fontWeight.semibold')
        },
        h1: {
          fontSize: config('theme.fontSize.4xl'),
          margin: '0 0 1rem',
          fontWeight: config('theme.fontWeight.bold')
        },
        h2: {
          fontSize: config('theme.fontSize.3xl')
        },
        h3: {
          fontSize: config('theme.fontSize.2xl')
        },
        h4: {
          fontSize: config('theme.fontSize.xl')
        },
        h5: {
          fontSize: config('theme.fontSize.lg')
        },
        small: { fontSize: config('theme.fontSize.sm') },
        strong: { fontWeight: config('theme.fontWeight.semibold') },
        blockquote: {
          borderLeft: '4px solid var(--color-border-primary)',
          paddingLeft: 'calc(var(--space) / 2)',
          color: 'var(--color-text-primary)'
        },
        em: {
          fontStyle: config('theme.fontStyle.italic')
        },
        ul: {
          listStyleType: 'disc',
          marginLeft: '1.25em',
          marginBottom: '1.25em',
          li: {
            marginBottom: '.6em'
          }
        },
        ol: {
          listStyleType: 'decimal',
          marginLeft: '1.25em',
          marginBottom: '1.25em',
          li: {
            marginBottom: '.6em'
          }
        }
      })

      const newUtilities = {
        '.theme-transition': {
          transition: 'color 0.2s ease-out, background 0.2s ease-out'
        },
        'a.nav-link': {
          position: 'relative',
          opacity: '.75',
          cursor: 'pointer',
          transition: 'opacity .25s cubic-bezier(.4,.25,.3,1)',
          color: 'var(--color-primary)'
        },
        'a.nav-link:hover, a.nav-link.active, a.nav-link.active--exact': {
          opacity: 1
        },
        'a.nav-link:hover::after, a.nav-link.active::after, a.nav-link.active--exact::after': {
          opacity: 1,
          transform: 'translateZ(0)'
        },
        'a.nav-link::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: 'var(--color-primary)',
          opacity: 0,
          transform: 'translate3d(0,.5rem,0)',
          transition:
            'opacity .25s cubic-bezier(.4,.25,.3,1),transform 325ms cubic-bezier(.4,.25,.3,1),-webkit-transform 325ms cubic-bezier(.4,.25,.3,1)'
        },
        'a:not(.nav-link):not(.no-highlight-anchor)': {
          transition: 'all .3s',
          color: 'var(--color-primary)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--color-primary)'
        },
        'a:not(.nav-link):not(.no-highlight-anchor):hover': {
          color: 'var(--color-bg-primary)',
          textDecoration: 'none',
          borderBottomColor: 'transparent',
          backgroundColor: 'var(--color-primary)'
        }
      }

      addUtilities(newUtilities)
    })
  ]
}
