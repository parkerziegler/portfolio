import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ number, description, color }) => {
  return (
    <div className={`flex stack-horizontal items-center md:w-2/6`}>
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
  color: PropTypes.oneOf(['purple', 'orange', 'teal']).isRequired
};

export default Statistic;
