import React from 'react';

import { InlineCode } from '../components/Blog/MDXComponents';
import InlineLink from '../components/Shared/InlineLink';

export const TAGS = {
  testing: {
    icon: '⚠️',
    tag: 'Testing'
  },
  react: {
    icon: '/react-logo.svg',
    tag: 'React'
  },
  cypress: {
    icon: '/cypress-logo.svg',
    tag: 'Cypress'
  },
  animation: {
    icon: '✨',
    tag: 'Animation'
  },
  d3: {
    icon: '/d3-logo.svg',
    tag: 'D3'
  },
  gis: {
    icon: '🗺️',
    tag: 'GIS'
  }
};

export const LANGUAGES = {
  JavaScript: { src: '/js-logo.svg', alt: 'JavaScript' },
  TypeScript: { src: '/ts-logo.svg', alt: 'TypeScript' },
  Reason: { src: '/reason-logo.svg', alt: 'Reason' },
  CSS: { src: '/css-logo.svg', alt: 'CSS' },
  GraphQL: { src: '/graphql-logo.svg', alt: 'GraphQL' }
};

export const FRAMEWORKS = {
  React: { src: '/react-logo.svg', alt: 'React' },
  Next: { src: '/next-logo.svg', alt: 'Next.js' },
  Redux: { src: '/redux-logo.svg', alt: 'Redux' },
  Jest: { src: '/jest-logo.svg', alt: 'Jest ' },
  Sass: { src: '/sass-logo.svg', alt: 'Sass' }
};

export const NAV_ITEMS = [
  {
    route: '/code',
    displayText: 'Code'
  },
  {
    route: '/maps',
    displayText: 'Maps'
  },
  {
    route: '/thoughts',
    displayText: 'Thoughts'
  }
];

export const PROJECTS = [
  {
    projectId: 'project-renature',
    projectTitle: (
      <>
        <InlineCode className="bg-transparent text-5xl text-electric-teal">
          renature
        </InlineCode>{' '}
        Docs Site
      </>
    ),
    projectDescription: (
      <>
        I built the{' '}
        <InlineCode className="bg-transparent text-electric-teal">
          renature
        </InlineCode>{' '}
        documentation site in tandem with my colleague Savannah Adams, who was
        an awesome design lead for the site.
        <br />
        <br />
        The project is built on{' '}
        <InlineCode className="bg-transparent text-electric-teal">
          react-static
        </InlineCode>{' '}
        and{' '}
        <InlineCode className="bg-transparent text-electric-teal">
          styled-components
        </InlineCode>
        , with a custom Markdown parser for the documentation pieces written by
        my colleague Phil Plückthun. Live code examples are written using
        <InlineCode className="bg-transparent text-electric-teal">
          react-live
        </InlineCode>
        . All Sketch diagrams are handmade with 🧡 by me!
      </>
    ),
    projectImg: '/projects/renature-docs.png',
    projectImgAlt:
      'The documentation site for renature, a physics-based animation-library for React.',
    projectLink: 'https://formidable.com/open-source/renature/'
  },
  {
    projectId: 'project-police-shootings',
    projectTitle: 'Police Shootings',
    projectDescription: (
      <>
        I built this set of visualizations on police violence in America after
        diving into the data compiled by the Guardian in their project,{' '}
        <InlineLink href="https://www.theguardian.com/us-news/ng-interactive/2015/jun/01/the-counted-police-killings-us-database">
          The Counted
        </InlineLink>
        . This project seeks to expand their findings by combining shootings
        data with racial data gathered from the Census&apos;s 5-year American
        Community Survey (ACS). Together, these two data sources can give us a
        clearer geographic picture of how police violence affects folks of
        different races across the country at various spatial scales.
        <br />
        <br />
        This project is built on{' '}
        <InlineCode className="bg-transparent text-electric-teal">
          React
        </InlineCode>
        ,{' '}
        <InlineCode className="bg-transparent text-electric-teal">
          Redux
        </InlineCode>
        , and{' '}
        <InlineCode className="bg-transparent text-electric-teal">
          D3
        </InlineCode>
        . Much of the logic around data fetching and side effects is done using{' '}
        <InlineCode className="bg-transparent text-electric-teal">
          redux-saga
        </InlineCode>
        . The temporal bar charts are built using{' '}
        <InlineCode className="bg-transparent text-electric-teal">
          victory
        </InlineCode>
        .
      </>
    ),
    projectImg: '/projects/police-shootings.png',
    projectImgAlt:
      'A data visualization project looking at police shootings in the United State between 2015 and 2016.',
    projectLink: 'https://parkerziegler.github.io/police-shootings/'
  }
];
