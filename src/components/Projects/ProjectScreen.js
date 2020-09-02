import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProjectScreen = ({
  projectTitle,
  projectDescription,
  projectImg,
  projectImgAlt,
  projectLink
}) => {
  return (
    <div className="relative grid grid-cols-12 gap-8 py-24 px-16 bg-window rounded-lg shadow-md text-white">
      <div className="relative grid grid-cols-4 gap-8 col-span-12 lg:col-span-4 lg:flex lg:flex-col">
        <h3 className="font-mono text-5xl col-span-4 -ml-16 pl-16 pb-4 border-b-2 border-electric-teal">
          {projectTitle}
        </h3>
        <p className="text-3xl col-span-4 leading-normal">
          {projectDescription}
        </p>
        <motion.a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-center font-mono col-span-4 justify-self-start lg:self-start p-4 lg:px-8 lg:py-4 lg:mt-auto text-electric-teal border-electric-teal border-2 with-arrow"
          whileHover={{
            scale: 1.05
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
        >
          Check it out
        </motion.a>
      </div>
      <img
        src={projectImg}
        alt={projectImgAlt}
        className="col-span-12 lg:col-span-8"
        loading="lazy"
      />
    </div>
  );
};

ProjectScreen.propTypes = {
  projectTitle: PropTypes.node.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectImg: PropTypes.string.isRequired,
  projectImgAlt: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired
};

export default ProjectScreen;
