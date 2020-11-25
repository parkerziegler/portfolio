import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ number, description }) => (
  <div className="col-span-12 lg:col-span-4 flex stack-sm-h items-center">
    <div>
      <h3 className="text-6xl font-mono text-purple">{number}</h3>
      <div className="bg-radial h-8 across bg-radial--purple" />
    </div>
    <p className="text-4xl">{description}</p>
  </div>
);

Statistic.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default Statistic;
