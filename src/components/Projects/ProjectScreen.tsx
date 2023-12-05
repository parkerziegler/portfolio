import * as React from 'react';
import Image from 'next/image';

import Tag from '../Blog/Tag';
import type { Project } from '../../content/projects';

const ProjectScreen: React.FC<Project> = ({
  title,
  description,
  src,
  alt,
  href,
  stack
}) => (
  <div className="relative col-span-12 lg:col-span-6 stack-md pt-20 pb-16 bg-terminal rounded-lg shadow-2xl-dark text-white">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block overflow-hidden"
    >
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
      <div className="flex flex-wrap">
        {stack.map(({ tag, icon }) => (
          <Tag
            key={tag}
            icon={icon}
            tag={tag}
            compact
            className="text-white border-terminal-secondary mr-4 my-2"
          />
        ))}
      </div>
    </div>
  </div>
);

export default ProjectScreen;
