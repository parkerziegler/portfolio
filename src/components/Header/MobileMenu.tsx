import * as React from 'react';
import { motion } from 'framer-motion';

import { NAV_ITEMS } from '../../utils/constants';
import { appearChildVariants } from '../../utils/animation';

import Link from './Link';

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
  visible: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  hidden: {
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
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

interface Props {
  toggle: () => void;
}

const MobileMenu = React.forwardRef<HTMLButtonElement, Props>(
  ({ toggle }, ref) => (
    <>
      <button
        className="sm:hidden relative z-20"
        onClick={toggle}
        ref={ref}
        aria-label="Open Mobile Menu"
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              hidden: { d: 'M 2 2.5 L 20 2.5' },
              visible: { d: 'M 3 16.5 L 17 2.5' }
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              hidden: { d: 'M 2 16.346 L 20 16.346' },
              visible: { d: 'M 3 2.5 L 17 16.346' }
            }}
          />
        </svg>
      </button>
      <motion.div
        className="sm:hidden absolute h-screen top-0 left-0 right-0 bottom-0 bg-primary opacity-90 z-10"
        variants={sidebarVariants}
      >
        <motion.ul variants={listVariants} className="pt-40 pl-8 stack-md">
          {NAV_ITEMS.map(({ route, displayText }) => {
            return (
              <motion.li key={route} variants={appearChildVariants}>
                <Link href={route} onClick={toggle} isMobile>
                  {displayText}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </>
  )
);

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;
