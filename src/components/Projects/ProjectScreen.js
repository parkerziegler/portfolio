import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const ProjectScreen = ({ title, description, img, alt, href }) => (
  <div className="relative grid grid-cols-12 gap-8 py-24 px-16 bg-window rounded-lg shadow-2xl-dark text-white">
    <div className="relative grid grid-cols-4 gap-8 col-span-12 lg:col-span-4 lg:flex lg:flex-col">
      <h3 className="font-mono text-4xl md:text-5xl col-span-4 -ml-16 pl-16 pb-4 border-b-2 border-electric-teal">
        {title}
      </h3>
      <p className="text-2xl md:text-3xl col-span-4 leading-normal">
        {description}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl md:text-4xl text-center font-mono col-span-4 justify-self-start lg:self-start p-4 lg:px-8 lg:py-4 lg:mt-auto text-electric-teal border-electric-teal border-2 with-arrow"
      >
        Check it out
      </a>
    </div>
    <div className="col-span-12 lg:col-span-8">
      <Image
        src={img}
        alt={alt}
        sizes="(min-width: 1024px) 600px, 75%"
        height="600"
        width="600"
      />
    </div>
  </div>
);

ProjectScreen.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default ProjectScreen;
