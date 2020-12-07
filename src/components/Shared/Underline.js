import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import cs from 'classnames';

const Underline = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <span
      ref={ref}
      className={cs(
        'bg-gradient-to-r from-pink-400 to-yellow-400 bg-highlight m-0 font-serif',
        {
          ['highlight--primary']: inView
        }
      )}
    >
      {children}
    </span>
  );
};

Underline.propTypes = {
  children: PropTypes.string.isRequired
};

export default Underline;
