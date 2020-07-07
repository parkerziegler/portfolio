import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { LANGUAGES } from '../../utils/constants';

const PRCard = ({ nameWithOwner, url, title, primaryLanguage }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      scale: 1.05
    }}
    whileTap={{
      scale: 0.95
    }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20
    }}
  >
    <div className="bg-gradient--primary flex p-2 m-auto rounded-lg font-mono h-full w-full shadow-lg">
      <div className="flex flex-col p-4 rounded-md bg-white flex-auto overflow-auto">
        <p className="mb-2 block text-2xl font-bold underline">
          {nameWithOwner}
        </p>
        <p className="mb-2 text-2xl">{title}</p>
        {primaryLanguage ? (
          <div className="flex items-end stack-sm-h mt-auto py-2">
            <img
              src={LANGUAGES[primaryLanguage.name].src}
              alt={LANGUAGES[primaryLanguage.name].alt}
              className="h-8 w-8"
            />
            <span className="text-black text-xl">{primaryLanguage.name}</span>
          </div>
        ) : null}
      </div>
    </div>
  </motion.a>
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
