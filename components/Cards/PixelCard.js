import React from 'react';
import PropTypes from 'prop-types';

const PixelCard = ({
  name,
  description,
  primaryLanguage,
  starCount,
  forkCount
}) => {
  return (
    <div className="flex flex-col bg-dotted-purple p-8 stack-vertical">
      <p className="text-3xl font-mono bg-white p-2">{name}</p>
      <p className="text-xl font-mono bg-white p-2">{description}</p>
      <div className="flex flex-auto items-end">
        {primaryLanguage ? (
          <div className="bg-white mr-auto px-2 py-4">
            <span
              className="text-white rounded-md text-xl p-2 font-mono"
              style={{ background: primaryLanguage.color }}
            >
              {primaryLanguage.name}
            </span>
          </div>
        ) : null}
        <div className="flex flex-col items-center mr-4 p-2 bg-white">
          <img src="/star.svg" className="h-10" />
          <span className="text-purple text-lg">{starCount}</span>
        </div>
        <div className="flex flex-col items-center p-2 bg-white">
          <img src="/code-fork.svg" className="h-10" />
          <span className="text-purple text-lg">{forkCount}</span>
        </div>
      </div>
    </div>
  );
};

PixelCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryLanguage: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }),
  starCount: PropTypes.number.isRequired,
  forkCount: PropTypes.number.isRequired
};

export default PixelCard;
