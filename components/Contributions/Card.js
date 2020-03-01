import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ nameWithOwner, url, title }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <div className="gradient-main flex p-2 m-auto rounded-lg font-mono md:h-48 lg:h-64 w-full gradient-main-box-shadow grow">
      <div className="p-4 rounded-md bg-white flex-auto overflow-auto">
        <p className="mb-2 block text-2xl underline">{nameWithOwner}</p>
        <p className="text-2xl font-bold">{title}</p>
      </div>
    </div>
  </a>
);

Card.propTypes = {
  nameWithOwner: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Card;
