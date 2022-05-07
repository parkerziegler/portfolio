import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import {
  CONTRIBUTION_EVENT_ICONS,
  CONTRIBUTION_EVENT_TYPES,
  LANGUAGES
} from '../../utils/constants';
import { transitionDirect, translateDownLeft } from '../../utils/animation';

const normalizeContributionType = (type) => {
  const str = type.replace('Event', '').replace(/([a-z])([A-Z])/g, '$1 $2');

  if (str === 'Push') {
    return 'Commit';
  }

  return str;
};

const ContributionCard = ({ repo, url, description, language, type }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{
      ...translateDownLeft,
      rotate: -3
    }}
    transition={transitionDirect}
  >
    <div className="bg-radial bg-radial--white flex p-2 m-auto rounded-lg font-mono h-full w-full shadow-lg">
      <div className="flex flex-col p-4 rounded-md flex-auto overflow-auto">
        <p className="block text-2xl font-semibold underline bg-white mb-4 px-4 py-2 rounded-sm">
          {repo}
        </p>
        <p className="text-2xl bg-white mb-4 px-4 py-2 rounded-sm max-h-28 overflow-auto">
          {description}
        </p>
        <div className="flex mt-auto justify-between">
          <div className="flex items-end stack-sm-h bg-white px-4 py-2 rounded-sm">
            <img
              src={CONTRIBUTION_EVENT_ICONS[type].src}
              alt={CONTRIBUTION_EVENT_ICONS[type].alt}
              className="h-8 w-8"
            />
            <span className="text-black text-xl">
              {normalizeContributionType(type)}
            </span>
          </div>
          {language ? (
            <div className="flex items-end stack-sm-h bg-white px-4 py-2 rounded-sm">
              <img
                src={LANGUAGES[language]?.src}
                alt={LANGUAGES[language]?.alt}
                className="h-8"
              />
              <span className="text-black text-xl">{language}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  </motion.a>
);

ContributionCard.propTypes = {
  repo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  type: PropTypes.oneOf(CONTRIBUTION_EVENT_TYPES).isRequired
};

export default ContributionCard;
