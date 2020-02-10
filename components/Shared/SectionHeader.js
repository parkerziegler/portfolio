import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ children }) => {
  return <h2 className="font-serif text-6xl m-0">{children}</h2>;
};

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default SectionHeader;
