import React from 'react';
import PropTypes from 'prop-types';

const PRCard = ({ nameWithOwner, url, title, primaryLanguage }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <div className="gradient-main flex p-2 m-auto rounded-lg font-mono h-full w-full gradient-main-box-shadow grow">
      <div className="flex flex-col p-4 rounded-md bg-white flex-auto overflow-auto">
        <p className="mb-2 block text-2xl font-bold underline">
          {nameWithOwner}
        </p>
        <p className="mb-2 text-2xl">{title}</p>
        {primaryLanguage ? (
          <span
            className="text-white rounded-md text-xl self-start p-2 mt-auto"
            style={{ background: primaryLanguage.color }}
          >
            {primaryLanguage.name}
          </span>
        ) : null}
      </div>
    </div>
  </a>
);

PRCard.propTypes = {
  nameWithOwner: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  primaryLanguage: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  })
};

export default PRCard;
