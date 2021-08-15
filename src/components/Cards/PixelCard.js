import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import cs from 'classnames';

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

const PixelCard = ({
  name,
  description,
  primaryLanguage,
  starCount,
  forkCount,
  url
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variants={variants}
      className="font-mono col-span-12 lg:col-span-4 flex flex-col bg-radial bg-radial--primary p-8 stack-md rounded-lg shadow-md"
      whileHover={{
        x: 5,
        y: -5
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
    >
      <div className="bg-white p-2 stack-sm">
        <p className="text-3xl">{name}</p>
        <p className="text-xl">{description}</p>
      </div>
      <div className="flex flex-auto items-end">
        {primaryLanguage ? (
          <div className="bg-white mr-auto px-2 py-4">
            <span
              className={cs(
                'text-xl font-mono p-2 rounded-md',
                primaryLanguage.name === 'JavaScript'
                  ? 'text-black'
                  : 'text-white'
              )}
              style={{ background: primaryLanguage.color }}
            >
              {primaryLanguage.name}
            </span>
          </div>
        ) : null}
        <div className="flex flex-col items-center mr-4 p-2 bg-white">
          <img
            src="/icons/star.svg"
            alt={`${name} Stars on GitHub`}
            className="h-10"
          />
          <span className="text-lg">{starCount}</span>
        </div>
        <div className="flex flex-col items-center p-2 bg-white">
          <img
            src="/icons/git-branch.svg"
            alt={`${name} Forks on GitHub`}
            className="h-10"
          />
          <span className="text-lg">{forkCount}</span>
        </div>
      </div>
    </motion.a>
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
  forkCount: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};

export default PixelCard;
