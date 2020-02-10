import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const SocialIcon = ({ href, path, compact = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center w-40"
  >
    <img src={path} className={cn([compact && 'transform scale-70', 'h-40'])} />
  </a>
);

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  compact: PropTypes.bool
};

export default SocialIcon;
