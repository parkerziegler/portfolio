import { StaticImageData } from 'next/image';

import type { TagAttributes } from '../components/Blog/Tag';
import InlineLink from '../components/Shared/InlineLink';
import ProjectInlineCode from '../components/Projects/ProjectInlineCode';
import RenatureDocsSrc from '../../public/projects/renature-docs/renature-docs.png';
import PoliceShootingsSrc from '../../public/projects/police-shootings/police-shootings.png';
import NationalDebtSrc from '../../public/projects/the-national-debt/the-national-debt.png';

export interface Project {
  projectId: string;
  title: React.ReactNode;
  description: React.ReactNode;
  src: StaticImageData;
  alt: string;
  href: string;
  stack: TagAttributes[];
}

export const projects: Project[] = [
  {
    projectId: 'the-national-debt',
    title: 'The National Debt',
    description:
      'This collection of Observable notebooks explores patterns in the US national debt across Presidential and Congressional eras. Where did the debt originate from, how is it changing, and who is responsible?',
    src: NationalDebtSrc,
    alt: 'A collection of Observable notebooks exploring the national debt.',
    href: 'https://observablehq.com/@parkerziegler/the-national-debt?collection=@parkerziegler/the-national-debt',
    stack: [
      {
        tag: 'Observable',
        icon: '/logos/observable-light-logo.svg'
      },
      {
        tag: 'D3',
        icon: '/logos/d3-logo.svg'
      },
      {
        tag: 'JavaScript',
        icon: '/logos/js-logo.svg'
      }
    ]
  },
  {
    projectId: 'renature',
    title: (
      <>
        <ProjectInlineCode className="text-4xl md:text-5xl">
          renature
        </ProjectInlineCode>{' '}
        Docs Site
      </>
    ),
    description: (
      <>
        The documentation site for{' '}
        <ProjectInlineCode>renature</ProjectInlineCode> provides diagrams, live
        code editors, and an animation gallery to help users get started
        animating joyfully with this physics-based animation library for React.
      </>
    ),
    src: RenatureDocsSrc,
    alt: 'The documentation site for renature, a physics-based animation-library for React.',
    href: 'https://formidable.com/open-source/renature/',
    stack: [
      {
        tag: 'React',
        icon: '/logos/react-logo.svg'
      },
      {
        tag: 'JavaScript',
        icon: '/logos/js-logo.svg'
      },
      {
        tag: 'Sketch',
        icon: '/logos/sketch-logo.svg'
      }
    ]
  },
  {
    projectId: 'police-shootings',
    title: 'Police Shootings',
    description: (
      <>
        This set of visualizations combines{' '}
        <InlineLink
          href="https://www.theguardian.com/us-news/ng-interactive/2015/jun/01/the-counted-police-killings-us-database"
          type="light"
        >
          data from the Guardian
        </InlineLink>{' '}
        and the 5-year American Community Survey (ACS) to better understand
        geographic and racial patterns in police violence in America.
      </>
    ),
    src: PoliceShootingsSrc,
    alt: 'A data visualization project looking at police shootings in the United State between 2015 and 2016.',
    href: 'https://parkerziegler.github.io/police-shootings/',
    stack: [
      {
        tag: 'D3',
        icon: '/logos/d3-logo.svg'
      },
      {
        tag: 'React',
        icon: '/logos/react-logo.svg'
      },
      {
        tag: 'Redux',
        icon: '/logos/redux-logo.svg'
      },
      {
        tag: 'JavaScript',
        icon: '/logos/js-logo.svg'
      }
    ]
  }
];

export const repoToBadgePath = {
  renature: '/logos/renature.svg',
  'rescript-urql': '/logos/rescript-urql.svg',
  reviz: '/logos/reviz.svg'
};
