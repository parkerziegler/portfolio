import React from 'react';
import PropTypes from 'prop-types';

const LangIcon = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="h-20 w-20 m-8" height="20" width="20" />
  );
};

LangIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default LangIcon;
