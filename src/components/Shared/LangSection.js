import React from 'react';
import PropTypes from 'prop-types';

import LangIcon from './LangIcon';

const LangSection = ({ title, langs }) => {
  return (
    <div>
      <h3 className="text-4xl text-center font-serif mb-4">{title}</h3>
      <div className="flex flex-wrap items-center justify-center">
        {langs.map(({ src, alt }) => (
          <LangIcon key={src} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
};

LangSection.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
};

export default LangSection;
