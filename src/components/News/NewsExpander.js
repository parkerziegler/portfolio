import React from 'react';
import PropTypes from 'prop-types';

const ArrowDown = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

const ArrowUp = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

const NewsExpander = ({ more, onClick }) => {
  return (
    <li className="flex items-center relative">
      <svg viewBox="0 0 16 16" height="16" width="16" className="flex-shrink-0">
        <circle
          className="fill-white stroke-white stroke-2"
          r="2"
          cx="8"
          cy="8"
        />
        <circle
          className="fill-white stroke-white stroke-2 pulse"
          r="2"
          cx="8"
          cy="8"
          style={{ transformOrigin: '8px 8px' }}
        />
      </svg>
      <button className="italic mr-4" onClick={onClick}>
        See {more ? 'More' : 'Less'}
      </button>
      {more ? ArrowDown : ArrowUp}
    </li>
  );
};

NewsExpander.propTypes = {
  more: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NewsExpander;
