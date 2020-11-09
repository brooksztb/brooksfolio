module.exports = {
  purge: {
    // enabled: true, //only set if you want to test in dev
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.md'
    ],
    options: {
      whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
        /svg.*/,
        /fa.*/
      ],
      extractors: [
        {
          extractor: content => {
            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

            //Capture classes specified by gridsome
            const gridsomeMatches = content.match(/[A-z0-9-:\\/]+/g)

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

            return broadMatches.concat(gridsomeMatches, innerMatches)
          },
          extensions: ['vue', 'js', 'jsx', 'md', 'html']
        }
      ]
    }
  },
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    backgroundColor: theme => ({
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
      tertiary: 'var(--color-bg-tertiary)',
      inverse: 'var(--color-bg-inverse)',
      code: 'var(--color-bg-code)',
      accent: 'var(--color-primary)'
    }),
    textColor: theme => ({
      initial: 'var(--color-primary)',
      'initial--muted': 'var(--color-primary--muted)',
      primary: 'var(--color-text-primary)',
      'primary--muted': 'var(--color-text-primary--muted)',
      secondary: 'var(--color-text-secondary)',
      tertiary: 'var(--color-text-tertiary)',
      inverse: 'var(--color-text-inverse)',
      success: 'var(--color-text-success)',
      error: 'var(--color-text-error)'
    }),
    borderColor: theme => ({
      primary: 'var(--color-border-primary)',
      'primary-muted': 'var(--color-border-primary--muted)',
      inverse: 'var(--color-border-inverse)',
      'text-primary': 'var(--color-text-primary)'
    }),
    flex: {
      '1': '1 0 auto'
    },
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Open Sans', 'sans-serif']
    },
    fontStyle: {
      italic: 'italic'
    },
    extend: {
      spacing: {
        '15': '3.75rem',
        '30': '7.5rem',
        '35': '2.1875rem',
        '75': '4.6875rem',
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
        '80': '0.80'
      },
      borderRadius: {
        '1/2': '50%'
      },
      boxShadow: {
        base: 'var(--box-shadow)',
        lg: 'var(--box-shadow--lg)'
      },
      height: {
        auto: 'auto',
        '14': '0.875rem',
        'screen-1/4': '25vh',
        'screen-1/3': '33vh',
        'screen-1/2': '50vh'
      },
      inset: {
        '-7': '-0.4375rem',
        '-15': '-0.9375rem',
        '-20': '-1.25rem',
        '-25': '-1.5625rem',
        '-85': '-5.3125rem',
        '1/2': '50%',
        full: '100%'
      },
      width: {
        auto: 'auto',
        '14': '0.875rem',
        '90': '90%'
      },
      minHeight: {
        '33': '33vh',
        '38': '38vh',
        px250: '250px',
        px275: '275px',
        px300: '300px'
      },
      minWidth: {
        '70': '70%'
      },
      maxWidth: {
        '500': '500px',
        '800': '800px',
        '900': '900px',
        '1080': '1080px',
        '1250': '1250px',
        '1/2': '50%'
      },
      maxHeight: {
        '400': '400px',
        '300': '300px',
        '600': '600px'
      },
      zIndex: {
        '1000': 1000
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'before', 'after'],
    transitionProperty: ['responsive', 'hover', 'focus'],
    transitionDuration: ['responsive', 'hover', 'focus'],
    margin: ['responsive', 'hover', 'first']
  },
  plugins: [require('tailwindcss-plugin-content')]
}
