import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const InlineLink = ({ href, type = 'dark', children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cs('relative', {
      'bg-underline--dark': type === 'dark',
      'bg-underline--light': type === 'light'
    })}
  >
    <strong>{children}</strong>
  </a>
);

InlineLink.propTypes = {
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['dark', 'light']),
  children: PropTypes.node.isRequired
};

export default InlineLink;
