import React from 'react';
import PropTypes from 'prop-types';

const ProjectScreen = ({ projectTitle, projectDescription, src, alt }) => {
  return (
    <div className="relative grid grid-cols-12 gap-8 py-24 px-16 bg-window rounded-lg shadow-md text-white">
      <div className="relative flex flex-col md:flex-row lg:flex-col col-span-12 lg:col-span-4">
        <h3 className="font-sans text-5xl self-start mb-8 md:mr-12 md:mb-0 lg:mr-0 lg:mb-16 -ml-16 pl-16 pb-4 border-b-2 border-electric-teal">
          {projectTitle}
        </h3>
        <p className="text-3xl mb-8 md:mb-0 lg:mb-8">{projectDescription}</p>
        <a
          href="https://formidable.com/open-source/renature/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl md:absolute md:left-0 md:bottom-0 lg:static self-start px-4 py-2 lg:px-8 lg:py-4 lg:mt-auto text-electric-teal border-electric-teal border-2 with-arrow"
        >
          Check it out
        </a>
      </div>
      <img
        src={src}
        alt={alt}
        className="col-span-12 lg:col-span-8"
        loading="lazy"
      />
    </div>
  );
};

ProjectScreen.propTypes = {
  projectTitle: PropTypes.node.isRequired,
  projectDescription: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ProjectScreen;
