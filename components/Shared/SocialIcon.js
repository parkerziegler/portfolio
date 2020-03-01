import React from 'react';
import PropTypes from 'prop-types';

const SocialIcon = ({ href, path }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center w-40 grow"
  >
    <img src={path} className="h-20" />
  </a>
);

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default SocialIcon;
