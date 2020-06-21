import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ children }) => {
  return <nav className="flex items-center stack-horizontal">{children}</nav>;
};

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;
