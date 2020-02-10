import React from 'react';

import Nav from './Nav';
import SiteTitle from './SiteTitle';
import Link from './Link';
import Extension from './Extension';

const Header = () => (
  <div className="flex flex-col">
    <header
      className={`flex flex-col sm:flex-row items-center justify-between
      flex-auto px-32 py-8 shadow bg-image-gradient`}
    >
      <SiteTitle>Parker Ziegler</SiteTitle>
      <Nav>
        <Link href="/code">Code</Link>
        <Link href="/maps">Maps</Link>
        <Link href="/thoughts">Thoughts</Link>
      </Nav>
    </header>
    <Extension />
  </div>
);

export default Header;
