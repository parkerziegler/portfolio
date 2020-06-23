import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => {
  return <main className="absolute inset-0">{children}</main>;
};

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
