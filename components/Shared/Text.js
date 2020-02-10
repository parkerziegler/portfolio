import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children }) => {
  return <p className="font-serif text-3xl m-4">{children}</p>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired
};

export default Text;
