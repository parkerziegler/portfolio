import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import tailwind from '../../../tailwind.config';

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const RepositoryCard = ({
  name,
  description,
  primaryLanguage,
  starCount,
  forkCount,
  topics,
  badgePath,
  url
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="col-span-12 lg:col-span-4 self-stretch rounded-lg"
      variants={variants}
      whileHover={{
        x: 5,
        y: -5,
        boxShadow: `-1rem 1rem ${tailwind.theme.extend.colors.primary}`
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
    >
      <div className="bg-gradient--primary flex p-2 m-auto rounded-lg font-mono shadow-lg h-full">
        <div className="flex flex-col items-center stack-sm p-4 rounded-md bg-white flex-auto overflow-auto">
          <h2 className="text-4xl text-center">{name}</h2>
          <img
            src={badgePath}
            alt={`${name} Badge`}
            className="h-64"
            height="160"
            width="160"
          />
          <p className="text-xl">{description}</p>
          <div className="flex flex-wrap">
            {topics.map((topic) => {
              return (
                <span
                  key={topic}
                  className="bg-primary text-white p-2 m-2 ml-0 rounded-md text-lg"
                >
                  {topic}
                </span>
              );
            })}
          </div>
          <div
            className="flex self-stretch items-center"
            style={{ marginTop: 'auto' }}
          >
            <span
              className="text-white text-xl rounded-md mr-auto p-2"
              style={{ background: primaryLanguage.color }}
            >
              {primaryLanguage.name}
            </span>
            <div className="flex flex-col items-center mr-4">
              <img
                src="/icons/star.svg"
                alt={`${name} Stars on GitHub`}
                className="h-10"
                height="25"
                width="25"
              />
              <span className="text-primary text-lg">{starCount}</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/icons/code-fork.svg"
                alt={`${name} Forks on GitHub`}
                className="h-10"
                height="25"
                width="25"
              />
              <span className="text-primary text-lg">{forkCount}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

RepositoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryLanguage: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  starCount: PropTypes.number.isRequired,
  forkCount: PropTypes.number.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  badgePath: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default RepositoryCard;
