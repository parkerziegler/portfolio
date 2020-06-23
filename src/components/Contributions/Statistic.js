import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Statistic = ({ number, description, color }) => {
  const isPurple = color === 'purple';
  const isOrange = color === 'orange';

  return (
    <div className="col-span-12 md:col-span-4 flex stack-sm-h items-center">
      <div>
        <h3
          className={cn('text-6xl font-mono', {
            'text-purple': isPurple,
            'text-orange': isOrange
          })}
        >
          {number}
        </h3>
        <div
          className={cn('bg-radial h-8 across', {
            'bg-radial--purple': isPurple,
            'bg-radial--orange': isOrange
          })}
        />
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
