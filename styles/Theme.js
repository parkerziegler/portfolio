/* eslint-disable no-magic-numbers */
const theme = {
  colors: {
    white: '#fff',
    purple: '#7b16ff',
    orange: '#ff9c0d',
    blue: '#42a8de',
    teal: '#57b4ad',
    pink: '#fa709a',
    yellow: '#fee140',
    black: '#222'
  },
  fonts: {
    sans: "'Open Sans', sans-serif",
    serif: "'Zilla Slab', serif",
    mono: "'Fira Mono', monospace"
  },
  breakpoints: [500, 700, 900]
};

export const mq = theme.breakpoints.map(
  (bp) => `@media only screen and (max-width: ${bp}px)`
);

export default theme;
