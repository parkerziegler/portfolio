const plugin = require('tailwindcss/plugin');

function justifySelfPlugin({ addUtilities }) {
  const utilities = {
    '.justify-self-start': {
      'justify-self': 'start'
    },
    '.justify-self-center': {
      'justify-self': 'center'
    },
    '.justify-self-end': {
      'justify-self': 'end'
    }
  };

  addUtilities(utilities);
}

module.exports = {
  purge: ['./src/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        purple: '#7b16ff',
        orange: '#ff9c0d',
        'deep-blue': '#011627',
        pink: '#fa709a',
        yellow: '#fee140',
        black: '#222222',
        'purple-100': '#faf5ff',
        'electric-teal': '#09cbcb'
      },
      fontFamily: {
        serif: "'Zilla Slab', serif",
        sans: "'Inter', sans-serif",
        mono: "'DM Mono', monospace"
      },
      maxWidth: {
        view: '128rem',
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
  plugins: [plugin(justifySelfPlugin)]
};
