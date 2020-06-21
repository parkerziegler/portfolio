import React from 'react';
import PropTypes from 'prop-types';

const Underline = ({ children }) => {
  return <span className="gradient-underline m-0 font-serif">{children}</span>;
};

Underline.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Underline;
