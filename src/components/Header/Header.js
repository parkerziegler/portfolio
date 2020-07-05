import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import SiteTitle from './SiteTitle';
import Link from './Link';
import Extension from './Extension';
import MobileMenu from './MobileMenu';
import { NAV_ITEMS } from '../../utils/constants';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between flex-auto px-16 sm:px-32 md:px-40 py-8 shadow-lg bg-gradient--primary">
        <SiteTitle />
        <motion.nav
          animate={mobileMenuOpen ? 'open' : 'closed'}
          initial={false}
        >
          <ul className="hidden sm:flex sm:items-center stack-md-h">
            {NAV_ITEMS.map(({ route, displayText }) => {
              return (
                <Link key={route} href={route}>
                  {displayText}
                </Link>
              );
            })}
          </ul>
          <MobileMenu
            toggle={() => setMobileMenuOpen((prevOpen) => !prevOpen)}
            ref={mobileMenuRef}
          />
        </motion.nav>
      </header>
      <Extension />
    </div>
  );
};

export default Header;
