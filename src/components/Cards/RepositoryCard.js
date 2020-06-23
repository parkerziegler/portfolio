import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

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
      className="col-span-12 md:col-span-4 self-stretch"
      variants={variants}
      whileHover={{
        scale: 1.03
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
    >
      <div className="bg-gradient--primary flex p-2 m-auto rounded-lg font-mono shadow-lg h-full">
        <div className="flex flex-col stack-sm p-4 rounded-md bg-white flex-auto overflow-auto">
          <h2 className="text-4xl text-center">{name}</h2>
          <img src={badgePath} className="h-64" />
          <p className="text-xl">{description}</p>
          <div className="flex flex-wrap">
            {topics.map((topic) => {
              return (
                <span
                  key={topic}
                  className="bg-purple text-white p-2 m-2 rounded-md text-lg"
                >
                  {topic}
                </span>
              );
            })}
          </div>
          <div className="flex flex-auto items-center">
            <span
              className="text-white rounded-md text-xl mr-auto p-2"
              style={{ background: primaryLanguage.color }}
            >
              {primaryLanguage.name}
            </span>
            <div className="flex flex-col items-center mr-4">
              <img src="/star.svg" className="h-10" />
              <span className="text-purple text-lg">{starCount}</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/code-fork.svg" className="h-10" />
              <span className="text-purple text-lg">{forkCount}</span>
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
