import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Text = ({ children, className }) => {
  return (
    <p className={cn('font-serif text-2xl md:text-3xl', className)}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Text;
