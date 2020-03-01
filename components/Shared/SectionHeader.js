import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const SectionHeader = ({ centered, children }) => {
  return (
    <h2 className={cn(['font-serif text-6xl m-0', centered && 'text-center'])}>
      {children}
    </h2>
  );
};

SectionHeader.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default SectionHeader;
