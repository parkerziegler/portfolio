import { theme } from '../../tailwind.config';

// Variants for appear animations.
export const appearParentVariants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  hidden: {}
};

export const appearChildVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

// Configurations for common animation states.
export const translateUpRight = {
  translateX: '5px',
  translateY: '-5px'
};

export const translateDownLeft = {
  translateX: '-5px',
  translateY: '5px'
};

export const boxShadow = {
  boxShadow: `-1rem 1rem ${theme.extend.colors.primary}`
};

// Configurations for common transitions.
export const transitionDirect = {
  type: 'spring',
  stiffness: 260,
  damping: 20
};

export const transitionRelaxed = {
  type: 'spring',
  stiffness: 300,
  damping: 12
};
