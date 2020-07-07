import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const SkewBg = ({
  color = 'purple',
  tiltDirection = 'backward',
  height = 'lg'
}) => {
  return (
    <div
      className={cs(
        `absolute w-full bg-${color} -mx-8 sm:-mx-32 md:-mx-40 transform`,
        {
          '-skew-y-3 -translate-y-8 sm:-translate-y-6':
            tiltDirection === 'backward',
          'skew-y-3 -translate-y-8 sm:-translate-y-6':
            tiltDirection === 'forward',
          'h-80': height === 'sm',
          'h-160': height === 'lg'
        }
      )}
    />
  );
};

SkewBg.propTypes = {
  color: PropTypes.string,
  tiltDirection: PropTypes.oneOf(['forward', 'backward']),
  height: PropTypes.oneOf(['sm', 'lg'])
};

export default SkewBg;
