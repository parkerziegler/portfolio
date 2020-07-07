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
        black: '#222222',
        'purple-100': '#faf5ff'
      },
      fontFamily: {
        serif: "'Zilla Slab', serif",
        mono: "'Space Mono', monospace"
      },
      maxWidth: {
        '5/6': '83.333%',
        '3/4': '75%',
        '2/3': '66.666%',
        '1/2': '50%',
        '1/8': '12.5%'
      },
      minWidth: {
        'half-screen': '50vw'
      },
      scale: {
        '70': '0.7'
      },
      height: {
        'half-screen': '50vh',
        '80': '20rem',
        '160': '40rem'
      },
      minHeight: {
        'half-screen': '50vh'
      },
      opacity: {
        '90': 0.9
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
    textColor: ['hover', 'responsive'],
    borderColor: ['hover'],
    maxWidth: ['responsive']
  },
  plugins: []
};
