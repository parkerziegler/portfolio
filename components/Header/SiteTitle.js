import React from 'react';
import PropTypes from 'prop-types';

const SiteTitle = ({ children }) => {
  return (
    <h1 className="bg-black m-0 text-white px-4 py-2 text-5xl font-sans mb-4 sm:mb-0">
      {children}
    </h1>
  );
};

SiteTitle.propTypes = {
  children: PropTypes.string.isRequired
};

export default SiteTitle;
