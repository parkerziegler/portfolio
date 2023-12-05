import { StaticImageData } from 'next/image';

import type { TagAttributes } from '../components/Blog/Tag';
import InlineLink from '../components/Shared/InlineLink';
import ProjectInlineCode from '../components/Projects/ProjectInlineCode';
import RenatureDocsSrc from '../../public/projects/renature-docs/renature-docs.png';
import PoliceShootingsSrc from '../../public/projects/police-shootings/police-shootings.png';
import NationalDebtSrc from '../../public/projects/the-national-debt/the-national-debt.png';
import CartoKitSrc from '../../public/projects/cartokit/cartokit.png';
import RevizChromeExtensionSrc from '../../public/projects/reviz-chrome-extension/reviz-chrome-extension.png';

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
    projectId: 'cartokit',
    title: 'cartokit',
    description: (
      <>
        <ProjectInlineCode>cartokit</ProjectInlineCode> is a direct manipulation
        programming environment for interactive cartography on the web. Style
        geospatial data via intuitive direct manipulation controls while the{' '}
        <ProjectInlineCode>cartokit</ProjectInlineCode> compiler writes the
        corresponding JavaScript code.
      </>
    ),
    src: CartoKitSrc,
    alt: 'Screenshots showing different maps made using cartokit, a direct manipulation programming environment for interactive cartography on the web.',
    href: 'https://alpha.cartokit.dev/',
    stack: [
      {
        tag: 'Svelte',
        icon: '/logos/svelte-logo.svg'
      },
      {
        tag: 'TypeScript',
        icon: '/logos/ts-logo.svg'
      },
      {
        tag: 'Tailwind',
        icon: '/logos/tailwindcss-logo.svg'
      }
    ]
  },
  {
    projectId: 'reviz-chrome-extension',
    title: 'reviz Chrome Extension',
    description: (
      <>
        The <ProjectInlineCode>reviz</ProjectInlineCode> Chrome extension brings
        the power of the <ProjectInlineCode>reviz</ProjectInlineCode> engine and
        compiler to your DevTools. Use the extension to turn any SVG
        visualization on the web into an Observable Plot program and
        accompanying visualization that you can edit, remix, and apply to new
        data.
      </>
    ),
    src: RevizChromeExtensionSrc,
    alt: 'Screenshots showing the reviz Chrome extension reverse engineering visualizations from the New York Times website.',
    href: 'https://youtu.be/MQnVmEw6ISQ?si=k9KNrZ6__MDRZkaT&t=654',
    stack: [
      {
        tag: 'Chrome Extensions',
        icon: '/logos/chrome-logo.svg'
      },
      {
        tag: 'React',
        icon: '/logos/react-logo.svg'
      },
      {
        tag: 'TypeScript',
        icon: '/logos/ts-logo.svg'
      },
      {
        tag: 'Tailwind',
        icon: '/logos/tailwindcss-logo.svg'
      }
    ]
  },
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
    title: 'renature Docs Site',
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
  reviz: '/logos/reviz.svg',
  cartokit: '/logos/cartokit.svg',
  renature: '/logos/renature.svg'
};

export const repoToDimensions = {
  reviz: {
    width: 160,
    height: 160
  },
  cartokit: {
    width: 559,
    height: 171
  },
  renature: {
    width: 160,
    height: 160
  }
};
