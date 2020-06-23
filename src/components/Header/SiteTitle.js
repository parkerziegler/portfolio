import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const SiteTitle = ({ children }) => {
  return (
    <Link href="/">
      <a>
        <h1 className="bg-black m-0 text-white px-4 py-2 text-5xl font-sans mb-4 sm:mb-0">
          {children}
        </h1>
      </a>
    </Link>
  );
};

SiteTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SiteTitle;
