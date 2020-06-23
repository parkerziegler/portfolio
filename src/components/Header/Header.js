import React from 'react';

import SiteTitle from './SiteTitle';
import Link from './Link';
import Extension from './Extension';

const Header = () => (
  <div className="flex flex-col">
    <header className="flex flex-col sm:flex-row items-center justify-between flex-auto px-32 py-8 shadow-lg bg-gradient--primary">
      <SiteTitle>Parker Ziegler</SiteTitle>
      <nav>
        <ul className="flex items-center stack-md-h">
          <li>
            <Link href="/code">Code</Link>
          </li>
          <li>
            <Link href="/maps">Maps</Link>
          </li>
          <li>
            <Link href="/thoughts">Thoughts</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Extension />
  </div>
);

export default Header;
