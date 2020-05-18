module.exports = {
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        purple: '#7b16ff',
        orange: '#ff9c0d',
        blue: '#42a8de',
        teal: '#57b4ad',
        pink: '#fa709a',
        yellow: '#fee140',
        black: '#222222'
      },
      fontFamily: {
        serif: "'Zilla Slab', serif",
        mono: "'Fira Mono', monospace"
      },
      maxWidth: {
        '5/6': '83.333%',
        '3/4': '75%',
        '2/3': '66.666%',
        '1/2': '50%'
      },
      minWidth: {
        'half-screen': '50vw'
      },
      scale: {
        '70': '0.7'
      },
      height: {
        'half-screen': '50vh'
      },
      minHeight: {
        'half-screen': '50vh'
      }
    },
    fill: (theme) => {
      return {
        transparent: 'transparent',
        purple: theme('colors.purple'),
        white: theme('colors.white')
      };
    },
    stroke: (theme) => {
      return {
        black: theme('colors.black'),
        purple: theme('colors.purple')
      };
    }
  },
  variants: {
    textColor: ['hover'],
    borderColor: ['hover'],
    maxWidth: ['responsive']
  },
  plugins: []
};