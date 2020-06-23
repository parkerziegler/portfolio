import React from 'react';
import PropTypes from 'prop-types';

const CardGrid = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {children}
  </div>
);

CardGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardGrid;
