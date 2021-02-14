import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const SectionHeader = ({
  centered = false,
  type = 'dark',
  className,
  children
}) => (
  <h2
    className={cs(
      'font-serif text-6xl m-0',
      centered && 'text-center',
      className
    )}
  >
    <span
      className={cs(
        'bg-header',
        type === 'dark' ? 'bg-header--dark' : 'bg-header--light'
      )}
    >
      {children}
    </span>
  </h2>
);

SectionHeader.propTypes = {
  centered: PropTypes.bool,
  type: PropTypes.oneOf(['dark', 'light']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default SectionHeader;
