import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const Section = ({ className, children }) => {
  return (
    <section
      className={cs([
        'relative flex flex-col px-8 py-12 sm:py-16 sm:px-32 md:px-40',
        className
      ])}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Section;
