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
        sans: "'Open Sans', sans-serif",
        serif: "'Zilla Slab', serif",
        mono: "'Fira Mono', monospace"
      },
      maxWidth: {
        '3/4': '75%'
      },
      scale: {
        '70': '0.7'
      }
    }
  },
  variants: {
    textColor: ['hover'],
    borderColor: ['hover'],
    maxWidth: ['responsive']
  },
  plugins: []
};
