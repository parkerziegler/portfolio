import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = ({ href, children }) => (
  <NextLink href={href}>
    <a
      className={`link text-white p-2 text-3xl font-sans no-underline
    relative`}
    >
      {children}
    </a>
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
