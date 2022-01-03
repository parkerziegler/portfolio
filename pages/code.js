import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import gql from 'graphql-tag';
import { createClient } from 'urql';
import { motion } from 'framer-motion';
import fetch from 'isomorphic-unfetch';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import SkewBg from '../src/components/Shared/SkewBg';
import Text from '../src/components/Shared/Text';
import InlineLink from '../src/components/Shared/InlineLink';
import RepositoryCard from '../src/components/Cards/RepositoryCard';
import PixelCard from '../src/components/Cards/PixelCard';
import Statistic from '../src/components/Contributions/Statistic';
import ProjectScreen from '../src/components/Projects/ProjectScreen';
import ProjectInlineCode from '../src/components/Projects/ProjectInlineCode';
import RenatureDocsSrc from '../public/projects/renature-docs/renature-docs.png';
import PoliceShootingsSrc from '../public/projects/police-shootings/police-shootings.png';
import NationalDebtSrc from '../public/projects/the-national-debt/the-national-debt.png';
import { appearParentVariants } from '../src/utils/animation';

const projects = [
  {
    projectId: 'the-national-debt',
    title: 'The National Debt',
    description:
      'This collection of Observable notebooks explores patterns in the US national debt across Presidential and Congressional eras. Where did the debt originate from, how is it changing, and who is responsible?',
    src: NationalDebtSrc,
    alt: 'A collection of Observable notebooks exploring the national debt.',
    href:
      'https://observablehq.com/@parkerziegler/the-national-debt?collection=@parkerziegler/the-national-debt',
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
    alt:
      'The documentation site for renature, a physics-based animation-library for React.',
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
    alt:
      'A data visualization project looking at police shootings in the United State between 2015 and 2016.',
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

const projectToBadgePath = {
  renature: '/logos/renature.svg',
  urql: '/logos/urql.svg',
  'rescript-urql': '/logos/rescript-urql.svg'
};

const repositoriesQuery = gql`
  fragment repoInfo on Repository {
    name
    description
    primaryLanguage {
      name
      color
    }
    stargazers {
      totalCount
    }
    forkCount
    repositoryTopics(first: 6) {
      edges {
        node {
          topic {
            name
          }
        }
      }
    }
    url
  }

  query repos {
    renature: repository(name: "renature", owner: "FormidableLabs") {
      ...repoInfo
    }
    urql: repository(name: "urql", owner: "FormidableLabs") {
      ...repoInfo
    }
    reScriptUrql: repository(name: "rescript-urql", owner: "FormidableLabs") {
      ...repoInfo
    }
    webpackDashboard: repository(
      name: "webpack-dashboard"
      owner: "FormidableLabs"
    ) {
      ...repoInfo
    }
    wonka: repository(name: "wonka", owner: "kitten") {
      ...repoInfo
    }
    reasonBasics: repository(name: "reason-basics", owner: "parkerziegler") {
      ...repoInfo
    }
    viewer {
      repositoriesContributedTo(
        first: 10
        orderBy: { field: STARGAZERS, direction: DESC }
        contributionTypes: [COMMIT, PULL_REQUEST]
      ) {
        totalCount
      }
      pullRequests(states: [OPEN, MERGED]) {
        totalCount
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`;

const title = 'Code / Parker Ziegler / Software Engineer and Cartographer';
const description =
  'Open source libraries and projects created by Parker Ziegler, a software engineer and cartographer based in Seattle, WA.';

const Code = ({ repositories }) => {
  const mainOSS = [
    repositories.renature,
    repositories.reScriptUrql,
    repositories.urql
  ];
  const secondaryOSS = [
    repositories.webpackDashboard,
    repositories.wonka,
    repositories.reasonBasics
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/code/og-image.png" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="675" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@parker_ziegler" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/code/og-image.png" />
      </Head>
      <main>
        <Section className="stack-md">
          <SectionHeader>Featured Open Source</SectionHeader>
          <Text>
            I&apos;m passionate about open source because I fundamentally
            believe in the radical power of transparent and open knowledge
            making. Here are some of the projects I&apos;ve worked on the most.
          </Text>
          <motion.div
            className="grid grid-cols-12 gap-8"
            animate="visible"
            initial="hidden"
            variants={appearParentVariants}
          >
            {mainOSS.map(
              ({
                name,
                description,
                repositoryTopics,
                stargazers: { totalCount: starCount },
                forkCount,
                primaryLanguage,
                url
              }) => (
                <RepositoryCard
                  key={name}
                  name={name}
                  description={description}
                  topics={repositoryTopics.edges.map(
                    ({
                      node: {
                        topic: { name: topic }
                      }
                    }) => topic
                  )}
                  starCount={starCount}
                  forkCount={forkCount}
                  primaryLanguage={primaryLanguage}
                  badgePath={projectToBadgePath[name]}
                  url={url}
                />
              )
            )}
            {secondaryOSS.map(
              ({
                name,
                description,
                primaryLanguage,
                stargazers: { totalCount: starCount },
                forkCount,
                url
              }) => (
                <PixelCard
                  key={name}
                  name={name}
                  description={description}
                  primaryLanguage={primaryLanguage}
                  starCount={starCount}
                  forkCount={forkCount}
                  url={url}
                />
              )
            )}
          </motion.div>
        </Section>
        <Section className="stack-md">
          <SectionHeader>Contributions</SectionHeader>
          <Text>
            I&apos;ve been busy in open source in the last year – here are the
            stats.
          </Text>
          <div className="grid grid-cols-12 gap-8">
            <Statistic
              number={
                repositories.viewer.contributionsCollection.contributionCalendar
                  .totalContributions
              }
              description="Contributions"
            />
            <Statistic
              number={repositories.viewer.pullRequests.totalCount}
              description="Pull Requests"
            />
            <Statistic
              number={repositories.viewer.repositoriesContributedTo.totalCount}
              description="Repos Contributed To"
            />
          </div>
        </Section>
        <Section className="stack-lg">
          <SkewBg tiltDirection="forward" overflow="hidden" />
          <SectionHeader className="text-white">Projects</SectionHeader>
          <div className="grid grid-cols-12 gap-8">
            {projects.map((project) => (
              <ProjectScreen key={project.projectId} {...project} />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const client = createClient({
    url: 'https://api.github.com/graphql',
    fetchOptions: {
      headers: { authorization: `Bearer ${process.env.GITHUB_API_TOKEN}` }
    },
    fetch
  });

  const repositories = await client.query(repositoriesQuery).toPromise();

  return {
    props: {
      repositories: repositories.data
    },
    revalidate: 1
  };
}

const Repository = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  primaryLanguage: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }),
  stargazers: PropTypes.shape({
    totalCount: PropTypes.number.isRequired
  }).isRequired,
  forkCount: PropTypes.number.isRequired,
  repositoryTopics: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          topic: PropTypes.shape({
            name: PropTypes.string.isRequired
          }).isRequired
        }).isRequired
      }).isRequired
    ).isRequired
  }).isRequired
}).isRequired;

const Viewer = PropTypes.shape({
  repositoriesContributedTo: PropTypes.shape({
    totalCount: PropTypes.number.isRequired
  }).isRequired,
  pullRequests: PropTypes.shape({
    totalCount: PropTypes.number.isRequired
  }).isRequired,
  contributionsCollection: PropTypes.shape({
    contributionCalendar: PropTypes.shape({
      totalContributions: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
}).isRequired;

Code.propTypes = {
  repositories: PropTypes.shape({
    renature: Repository,
    urql: Repository,
    reScriptUrql: Repository,
    webpackDashboard: Repository,
    reasonBasics: Repository,
    wonka: Repository,
    viewer: Viewer
  }).isRequired
};

export default Code;
