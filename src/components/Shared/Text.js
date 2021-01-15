import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Text = ({ children, className }) => (
  <p
    className={cn(
      'font-serif text-3xl tracking-wide leading-normal',
      className
    )}
  >
    {children}
  </p>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Text;
