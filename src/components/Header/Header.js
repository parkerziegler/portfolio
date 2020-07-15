import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import SiteTitle from './SiteTitle';
import Link from './Link';
import MobileMenu from './MobileMenu';
import { NAV_ITEMS } from '../../utils/constants';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  return (
    <div className="flex flex-col">
      <div className="h-64 bg-gradient--primary transform skew-y-3 -translate-y-16" />
      <header className="absolute w-full flex items-center justify-between flex-auto px-16 sm:px-32 md:px-40 py-8">
        <SiteTitle />
        <motion.nav
          animate={mobileMenuOpen ? 'open' : 'closed'}
          initial={false}
        >
          <ul className="hidden sm:flex sm:items-center stack-md-h">
            {NAV_ITEMS.map(({ route, displayText }) => {
              return (
                <li key={route}>
                  <Link href={route}>{displayText}</Link>
                </li>
              );
            })}
          </ul>
          <MobileMenu
            toggle={() => {
              setMobileMenuOpen((prevOpen) => !prevOpen);
            }}
            ref={mobileMenuRef}
          />
        </motion.nav>
      </header>
    </div>
  );
};

export default Header;
