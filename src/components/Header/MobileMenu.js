import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import Link from './Link';
import { NAV_ITEMS } from '../../utils/constants';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#ffffff"
    strokeLinecap="round"
    {...props}
  />
);

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const listItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const MobileMenu = React.forwardRef(({ toggle }, ref) => {
  return (
    <>
      <button className="sm:hidden relative z-20" onClick={toggle} ref={ref}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' }
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' }
            }}
          />
        </svg>
      </button>
      <motion.div
        className="sm:hidden absolute h-screen top-0 left-0 right-0 bottom-0 bg-purple opacity-90 z-10"
        variants={sidebarVariants}
      >
        <motion.ul variants={listVariants} className="pt-40 pl-8 stack-md">
          {NAV_ITEMS.map(({ route, displayText }) => {
            return (
              <motion.li key={route} variants={listItemVariants}>
                <Link href={route} onClick={toggle}>
                  {displayText}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </>
  );
});

MobileMenu.displayName = 'MobileMenu';

MobileMenu.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default MobileMenu;
