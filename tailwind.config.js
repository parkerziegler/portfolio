module.exports = {
  content: [
    './src/components/**/*.js',
    './pages/**/*.js',
    './src/components/**/*.tsx',
    './pages/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        primary: '#7b16ff',
        secondary: '#ff9c0d',
        terminal: '#011627',
        'terminal-secondary': '#09cbcb'
      },
      fontFamily: {
        serif: "'Source Serif Pro', serif",
        mono: "'DM Mono', monospace"
      },
      fontSize: {
        '3xl': ['1.85rem', { lineHeight: '2.25rem' }]
      },
      maxWidth: {
        view: '128rem',
        '5/6': '83.333%',
        '3/4': '75%',
        '2/3': '66.666%',
        '1/2': '50%',
        '1/8': '12.5%',
        prose: '100ch'
      },
      minWidth: {
        'half-screen': '50vw'
      },
      scale: {
        70: '0.7'
      },
      height: {
        'half-screen': '50vh',
        80: '20rem',
        160: '40rem'
      },
      minHeight: {
        'half-screen': '50vh'
      },
      opacity: {
        90: 0.9
      },
      gridTemplateRows: {
        'auto-2': 'auto 1fr'
      },
      boxShadow: {
        '2xl-dark': '0 25px 50px -12px rgba(0, 0, 0, 1)',
        minimap: '0 0 0 3px rgba(165, 180, 252, 1)'
      }
    },
    fill: (theme) => {
      return {
        transparent: 'transparent',
        primary: theme('colors.primary'),
        white: theme('colors.white')
      };
    },
    stroke: (theme) => {
      return {
        black: theme('colors.black'),
        primary: theme('colors.primary'),
        white: theme('colors.white')
      };
    }
  },
  variants: {
    textColor: ['hover', 'responsive'],
    borderColor: ['hover'],
    maxWidth: ['responsive']
  }
};
