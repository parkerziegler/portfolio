import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ tag = 'h1', className, children }) => {
  return React.createElement(tag, { className }, children);
};

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Heading;
