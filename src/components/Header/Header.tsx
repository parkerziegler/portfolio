import * as React from 'react';
import { motion } from 'framer-motion';

import { NAV_ITEMS } from '../../utils/constants';

import SiteTitle from './SiteTitle';
import Link from './Link';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const mobileMenuRef = React.useRef(null);

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [mobileMenuOpen]);

  return (
    <div className="w-full bg-gradient-to-r from-primary to-terminal-secondary sm:header-clip-path">
      <header className="w-full max-w-view mx-auto flex items-center justify-between flex-auto px-8 sm:px-32 md:px-40 py-8 sm:pt-8 sm:pb-16">
        <SiteTitle />
        <motion.nav
          animate={mobileMenuOpen ? 'visible' : 'hidden'}
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
