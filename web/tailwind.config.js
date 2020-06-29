const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js'],
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
        'primary-muted': 'var(--color-border-primary--muted)',
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
        base: 'var(--box-shadow)',
        lg: 'var(--box-shadow--lg)'
      },
      height: {
        auto: 'auto',
        logo: '220px',
        'screen-1/4': '25vh',
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
        '500': '500px',
        '1080': '1080px',
        '1250': '1250px'
      },
      maxHeight: {
        '400': '400px',
        '600': '600px'
      },
      zIndex: {
        '1000': 1000
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    transitionProperty: ['responsive', 'hover', 'focus'],
    transitionDuration: ['responsive', 'hover', 'focus'],
    margin: ['responsive', 'hover', 'first']
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
          fontSize: 'calc(1.2rem + 4vw)',
          margin: '0 0 1rem',
          fontWeight: config('theme.fontWeight.bold'),
          '@media (min-width: 1024px)': {
            fontSize: 'calc(1.2rem + 48px)'
          }
        },
        h2: {
          fontSize: 'calc(1.2rem + 2vw)',
          '@media (min-width: 1024px)': {
            fontSize: 'calc(1.2rem + 24px)'
          }
        },
        h3: {
          fontSize: 'calc(1.2rem + 1vw)',
          '@media (min-width: 1024px)': {
            fontSize: 'calc(1.2rem + 16px)'
          }
        },
        h4: {
          fontSize: 'calc(1.2rem + .5vw)',
          '@media (min-width: 1024px)': {
            fontSize: 'calc(1.2rem + 8px)'
          }
        },
        h5: {
          fontSize: 'calc(1.2rem + .25vw)',
          '@media (min-width: 1024px)': {
            fontSize: 'calc(1.2rem + 6px)'
          }
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
        },
        '::selection': {
          backgroundColor: 'var(--color-primary--muted)',
          textShadow: 'none'
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
        // '.loading': {
        //   width: '2em',
        //   height: '2em',
        //   borderColor: 'var(--color-primary) var(--color-bg-primary) var(--color-bg-primary)',
        //   borderStyle: 'solid',
        //   borderWidth: '5px',
        //   borderImage: 'none 100% / 1 / 0 stretch',
        //   boxSizing: 'border-box',
        //   borderRadius: '100%',
        //   animation: 'circle-spin 1s infinite linear',
        //   position: 'absolute',
        //   top: 0,
        //   left: 'calc(50% - 40px)'
        // },
        // '@Keyframes circle-spin': {
        //   '100%': {
        //     transform: 'rotate(1turn)'
        //   }
        // }
      }

      addUtilities(newUtilities)

      const newComponents = {
        '.form-input': {
          display: 'block',
          marginTop: '.5rem',
          position: 'relative',
          '&:not(:last-child)': {
            marginBottom: '1.5rem'
          },
          'input, textarea': {
            background: 'var(--color-bg-secondary)',
            borderRadius: config('theme.borderRadius.md'),
            border: '1px solid var(--color-primary--muted)',
            boxShadow: 'var(--box-shadow)',
            color: 'var(--color-text-primary)',
            display: 'block',
            padding: '1rem 1rem .75rem',
            resize: 'none',
            transition: 'border-color .15s cubic-bezier(.445,.05,.55,.95)',
            width: '100%',
            '&:focus': {
              borderColor: 'var(--color-primary)',
              outline: 'none',
              '~ span': {
                color: 'var(--color-primary)'
              }
            }
          },
          textarea: {
            minHeight: '9rem'
          },
          span: {
            bottom: '100%',
            color: 'var(--color-text-primary--muted)',
            left: '.5rem',
            marginBottom: '-.75rem',
            overflow: 'hidden',
            padding: '0 .5rem',
            position: 'absolute',
            zIndex: 1
          },
          'span::before, span::after': {
            content: '""',
            filter: 'blur(.125rem)',
            height: '100%',
            left: '-50%',
            position: 'absolute',
            width: '200%',
            zIndex: -1
          },
          'span::before': {
            backgroundColor: 'var(--color-bg-primary)',
            bottom: '-.5rem'
          },
          'span::after': {
            backgroundColor: 'var(--color-bg-secondary)',
            bottom: '-60%'
          }
        },
        '.form-button': {
          display: 'inline-block',
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-bg-primary)',
          transition: 'all .25s cubic-bezier(.4,.25,.3,1)',
          boxSizing: 'border-box',
          padding: '10px 20px',
          borderRadius: config('theme.borderRadius.md'),
          textTransform: 'uppercase',
          textAlign: 'center',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: '1em',
          lineHeight: 'normal',
          opacity: '.7',
          outline: 'none',
          position: 'relative',
          'backface-visibility': 'hidden',
          '&:hover, &:focus': {
            opacity: 1
          }
        },
        '.arrow-link': {
          textAlign: 'right',
          a: {
            display: 'flex',
            alignItems: 'center',
            color: 'var(--color-primary)',
            '.right': {
              marginLeft: '-1rem',
              opacity: 0,
              transition: 'margin .3s, opacity .3s'
            },
            '.left': {
              marginRight: '-1rem',
              opacity: 0,
              transition: 'margin .3s, opacity .3s'
            },

            '&:hover .right': {
              marginLeft: '.375rem',
              opacity: 1
            },
            '&:hover .left': {
              marginRight: '.375rem',
              opacity: 1
            }
          }
        }
      }

      addComponents(newComponents)
    })
  ]
}
