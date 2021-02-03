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
      rotate: -3,
      y: 5,
      x: -5
    }}
    transition={{
      type: 'spring',
      stiffness: 300,
      damping: 12
    }}
  >
    <div className="bg-radial bg-radial--white flex p-2 m-auto rounded-lg font-mono h-full w-full shadow-lg">
      <div className="flex flex-col p-4 rounded-md flex-auto overflow-auto">
        <p className="block text-2xl font-bold underline bg-white mb-4 px-4 py-2 rounded-sm">
          {nameWithOwner}
        </p>
        <p className="text-2xl bg-white mb-4 px-4 py-2 rounded-sm">{title}</p>
        {primaryLanguage ? (
          <div className="flex items-end self-start stack-sm-h mt-auto bg-white px-4 py-2 rounded-sm">
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
