import React from 'react';
import PropTypes from 'prop-types';

const PRCardGrid = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
    {children}
  </div>
);

PRCardGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export default PRCardGrid;
