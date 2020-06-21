import React from 'react';
import PropTypes from 'prop-types';

const InlineLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-underline"
    >
      <strong>{children}</strong>
    </a>
  );
};

InlineLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InlineLink;
