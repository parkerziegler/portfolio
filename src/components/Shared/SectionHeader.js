import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const SectionHeader = ({ className, children }) => (
  <h2 className={cs('font-serif text-6xl m-0', className)}>
    {children}
    <svg
      width="105"
      height="10"
      viewBox="0 0 105 10"
      className="transform-gpu translate-y-2"
      aria-hidden
    >
      <path d="M5,0 L25,0 L20,10 L0,10 z" fill="#FBFDD7" />
      <path d="M25,0 L45,0 L40,10 L20,10 z" fill="#FCEB71" />
      <path d="M45,0 L65,0 L60,10 L40,10 z" fill="#FCBB45" />
      <path d="M65,0 L85,0 L80,10 L60,10 z" fill="#FC9A59" />
      <path d="M85,0 L105,0 L100,10 L80,10 z" fill="#F24B4B" />
    </svg>
  </h2>
);

SectionHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default SectionHeader;
