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
        h1: {
          fontSize: config('theme.fontSize.4xl'),
          transition: 'color .6s',
          margin: '0 0 1rem',
          fontWeight: config('theme.fontWeight.semibold')
        },
        h2: {
          fontSize: config('theme.fontSize.3xl'),
          transition: 'color .6s',
          margin: '2.75rem 0 1rem',
          fontWeight: config('theme.fontWeight.semibold')
        },
        h3: {
          fontSize: config('theme.fontSize.2xl'),
          transition: 'color .6s',
          margin: '2.75rem 0 1rem',
          fontWeight: config('theme.fontWeight.semibold')
        },
        h4: {
          fontSize: config('theme.fontSize.xl'),
          transition: 'color .6s',
          margin: '2.75rem 0 1rem',
          fontWeight: config('theme.fontWeight.semibold')
        },
        h5: {
          fontSize: config('theme.fontSize.lg'),
          transition: 'color .6s',
          margin: '2.75rem 0 1rem',
          fontWeight: config('theme.fontWeight.semibold')
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
        'a:not(.no-highlight-anchor)': {
          textDecoration: 'none',
          backgroundImage:
            'linear-gradient(var(--color-primary--muted), var(--color-primary--muted)), linear-gradient(var(--color-primary), var(--color-primary))',
          backgroundSize: '100% 0.25vmin, 0 0.25vmin',
          backgroundRepeat: 'no-repeat',
          color: 'var(--color-primary)',
          transition: 'background-size 0.3s cubic-bezier(0.77, 0, 0.175, 1)',
          backgroundPosition: '0 100%'
        },
        'a:not(.no-highlight-anchor):hover': {
          backgroundSize: '100% 0.25vmin'
        },
        'a:not(.no-highlight-anchor).active': {
          backgroundSize: '100% 0.25vmin'
        },
        'a:not(.no-highlight-anchor).active--exact': {
          backgroundSize: '100% 0.25vmin'
        }
      }

      addUtilities(newUtilities)
    })
  ]
}
