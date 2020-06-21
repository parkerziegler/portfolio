import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ number, description, color }) => {
  return (
    <div className="col-spann-12 md:col-span-4 flex stack-sm-h items-center">
      <div>
        <h3 className={`text-6xl font-mono text-${color}`}>{number}</h3>
        <div className={`gradient-dotted gradient-dotted-${color}`} />
      </div>
      <p className="text-3xl">{description}</p>
    </div>
  );
};

Statistic.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['purple', 'orange', 'teal']).isRequired,
};

export default Statistic;
