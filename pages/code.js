import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { createClient } from 'urql';
import { motion, useAnimation } from 'framer-motion';
import fetch from 'isomorphic-unfetch';
import { useInView } from 'react-intersection-observer';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Underline from '../src/components/Shared/Underline';
import SkewBg from '../src/components/Shared/SkewBg';
import RepositoryCard from '../src/components/Cards/RepositoryCard';
import Text from '../src/components/Shared/Text';
import Statistic from '../src/components/Contributions/Statistic';
import PixelCard from '../src/components/Cards/PixelCard';
import ProjectScreen from '../src/components/Projects/ProjectScreen';
import { PROJECTS } from '../src/utils/constants';

const projectToBadgePath = {
  renature: '/renature.svg',
  urql: '/urql.svg',
  reasonUrql: '/reason-urql.svg'
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
    viewer {
      repositoriesContributedTo(
        first: 10
        orderBy: { field: STARGAZERS, direction: DESC }
        contributionTypes: [COMMIT, PULL_REQUEST, PULL_REQUEST]
      ) {
        totalCount
        edges {
          node {
            ...repoInfo
          }
        }
      }
      pullRequests(states: [MERGED]) {
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
  const [ref, inView] = useInView({
    threshold: 0.15
  });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1
      });
    } else {
      controls.start({
        opacity: 0
      });
    }
  }, [inView]);

  return (
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
          {Object.keys(repositories)
            .filter((d) => d !== 'viewer')
            .map((project) => {
              const {
                name,
                description,
                repositoryTopics,
                stargazers: { totalCount: starCount },
                forkCount,
                primaryLanguage,
                url
              } = repositories[project];

              return (
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
                  badgePath={projectToBadgePath[project]}
                  url={url}
                />
              );
            })}
          <Statistic
            number={repositories.viewer.repositoriesContributedTo.totalCount}
            description="Public repositories contributed to (excluding my own)."
            color="purple"
          />
          <Statistic
            number={repositories.viewer.pullRequests.totalCount}
            description="Public pull requests merged."
            color="orange"
          />
          <Statistic
            number={
              repositories.viewer.contributionsCollection.contributionCalendar
                .totalContributions
            }
            description="Contributions in the last year."
            color="purple"
          />
        </motion.div>
      </Section>
      <Section className="stack-md mx-auto">
        <SectionHeader>
          <Underline>More OSS</Underline>
        </SectionHeader>
        <motion.div
          className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          ref={ref}
          animate={controls}
          initial={{ opacity: 0 }}
        >
          {repositories.viewer.repositoriesContributedTo.edges
            .filter(({ node: { name } }) => {
              return (
                name !== 'renature' && name !== 'urql' && name !== 'reason-urql'
              );
            })
            .slice(0, 6)
            .map(
              ({
                node: {
                  name,
                  description,
                  primaryLanguage,
                  stargazers: { totalCount: starCount },
                  forkCount
                }
              }) => {
                return (
                  <PixelCard
                    key={name}
                    name={name}
                    description={description}
                    primaryLanguage={primaryLanguage}
                    starCount={starCount}
                    forkCount={forkCount}
                  />
                );
              }
            )}
        </motion.div>
      </Section>
      <Section className="stack-lg">
        <SkewBg tiltDirection="forward" />
        <SectionHeader className="text-white">
          <Underline>Projects</Underline>
        </SectionHeader>
        {PROJECTS.map((project) => (
          <ProjectScreen key={project.projectId} {...project} />
        ))}
      </Section>
    </main>
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
    viewer: Viewer
  }).isRequired
};

export default Code;
