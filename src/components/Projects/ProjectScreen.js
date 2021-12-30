import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import Tag from '../Blog/Tag';

const ProjectScreen = ({ title, description, src, alt, href, stack }) => (
  <div className="relative col-span-12 lg:col-span-6 stack-md pt-20 pb-16 bg-terminal rounded-lg shadow-2xl-dark text-white">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        className="transition-transform hover:scale-110"
      />
    </a>
    <div className="px-8 stack-md">
      <h3 className="font-mono text-4xl md:text-5xl inline-block border-b-2 border-terminal-secondary">
        {title}
      </h3>
      <p className="text-2xl md:text-3xl col-span-4 leading-normal">
        {description}
      </p>
      <div className="flex stack-sm-h">
        {stack.map(({ tag, icon }) => (
          <Tag
            key={tag}
            icon={icon}
            compact
            className="text-white border-terminal-secondary"
          >
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  </div>
);

ProjectScreen.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  src: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ProjectScreen;
