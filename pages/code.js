import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import gql from 'graphql-tag';
import { createClient } from 'urql';
import { motion } from 'framer-motion';
import fetch from 'isomorphic-unfetch';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Underline from '../src/components/Shared/Underline';
import SkewBg from '../src/components/Shared/SkewBg';
import Text from '../src/components/Shared/Text';
import InlineLink from '../src/components/Shared/InlineLink';
import RepositoryCard from '../src/components/Cards/RepositoryCard';
import PixelCard from '../src/components/Cards/PixelCard';
import Statistic from '../src/components/Contributions/Statistic';
import ProjectScreen from '../src/components/Projects/ProjectScreen';
import ProjectInlineCode from '../src/components/Projects/ProjectInlineCode';

const projects = [
  {
    projectId: 'renature',
    projectTitle: (
      <>
        <ProjectInlineCode className="text-4xl md:text-5xl">
          renature
        </ProjectInlineCode>{' '}
        Documentation Site
      </>
    ),
    projectDescription: (
      <>
        I built the <ProjectInlineCode>renature</ProjectInlineCode>{' '}
        documentation site as part of my broader work on the library during{' '}
        <InlineLink href="https://formidable.com/blog/2019/fellowship/">
          Formidable&apos;s inaugural Open Source Fellowship
        </InlineLink>
        .
        <br />
        <br />
        The project is built on{' '}
        <ProjectInlineCode>react-static</ProjectInlineCode> and{' '}
        <ProjectInlineCode>styled-components</ProjectInlineCode>, with live code
        examples powered by <ProjectInlineCode>react-live</ProjectInlineCode>.
        Diagrams were made by me using{' '}
        <InlineLink href="https://www.sketch.com/">Sketch</InlineLink>. Thanks
        are due to my colleagues Eliot Adams, Phil Plückthun, Ryan Roemer, and
        Matt Keith for their support on design and infrastructure.
      </>
    ),
    projectImg: '/projects/renature-docs.png',
    projectImgAlt:
      'The documentation site for renature, a physics-based animation-library for React.',
    projectLink: 'https://formidable.com/open-source/renature/'
  },
  {
    projectId: 'police-shootings',
    projectTitle: 'Police Shootings',
    projectDescription: (
      <>
        I built this set of visualizations on police violence in America after
        diving into data compiled by the Guardian in their project,{' '}
        <InlineLink href="https://www.theguardian.com/us-news/ng-interactive/2015/jun/01/the-counted-police-killings-us-database">
          The Counted
        </InlineLink>
        . This project seeks to expand their findings by combining shootings
        data with racial data from the 5-year American Community Survey (ACS).
        Together, these two data sources give us a clearer geographic picture of
        how police violence affects folks of different races across the country.
        <br />
        <br />
        This project is built on <ProjectInlineCode>
          react
        </ProjectInlineCode>, <ProjectInlineCode>redux</ProjectInlineCode>, and{' '}
        <ProjectInlineCode>d3</ProjectInlineCode>. Much of the logic around data
        fetching and side effects is done using{' '}
        <ProjectInlineCode>redux-saga</ProjectInlineCode>. The temporal bar
        charts are built using <ProjectInlineCode>victory</ProjectInlineCode>.
      </>
    ),
    projectImg: '/projects/police-shootings.png',
    projectImgAlt:
      'A data visualization project looking at police shootings in the United State between 2015 and 2016.',
    projectLink: 'https://parkerziegler.github.io/police-shootings/'
  }
];

const projectToBadgePath = {
  renature: '/renature.svg',
  urql: '/urql.svg',
  'reason-urql': '/reason-urql.svg'
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
    reasonUrql: repository(name: "reason-urql", owner: "FormidableLabs") {
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
    nextUrql: repository(name: "next-urql", owner: "FormidableLabs") {
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

const variants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  hidden: false
};

const Code = ({ repositories }) => {
  const mainOSS = [
    repositories.renature,
    repositories.reasonUrql,
    repositories.urql
  ];
  const secondaryOSS = [
    repositories.webpackDashboard,
    repositories.nextUrql,
    repositories.wonka
  ];

  return (
    <>
      <Head>
        <title>
          Code | Parker Ziegler | Software Engineer and Cartographer
        </title>
        <meta
          name="description"
          content="Open source libraries and projects created by Parker Ziegler, a software engineer and cartographer based in Seattle, WA."
        />
      </Head>
      <main>
        <Section className="stack-md">
          <SectionHeader>
            <Underline>Featured Open Source</Underline>
          </SectionHeader>
          <Text>
            {
              "I'm passionate about open source because I fundamentally believe in the radical power of transparent and open knowledge making. Here are some of the projects I've worked on the most."
            }
          </Text>
          <motion.div
            className="grid grid-cols-12 gap-8"
            animate="visible"
            initial="hidden"
            variants={variants}
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
          <SectionHeader>
            <Underline>Contributions</Underline>
          </SectionHeader>
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
          <SectionHeader className="text-white">
            <Underline>Projects</Underline>
          </SectionHeader>
          <div className="stack-xl md:stack-xxl">
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
      headers: { authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    },
    fetch
  });

  const repositories = await client.query(repositoriesQuery).toPromise();

  return {
    props: {
      repositories: repositories.data
    }
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
    totalCount: PropTypes.number.isRequired,
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: Repository
      }).isRequired
    ).isRequired
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
    reasonUrql: Repository,
    webpackDashboard: Repository,
    nextUrql: Repository,
    wonka: Repository,
    viewer: Viewer
  }).isRequired
};

export default Code;
