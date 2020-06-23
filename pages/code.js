import React from 'react';
import gql from 'graphql-tag';
import { withUrqlClient } from 'next-urql';
import { useQuery } from 'urql';
import { motion, useAnimation } from 'framer-motion';
import fetch from 'isomorphic-unfetch';
import { useInView } from 'react-intersection-observer';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Underline from '../src/components/Shared/Underline';
import RepositoryCard from '../src/components/Cards/RepositoryCard';
import Text from '../src/components/Shared/Text';
import Statistic from '../src/components/Contributions/Statistic';
import PixelCard from '../src/components/Cards/PixelCard';

const projectToBadgePath = {
  renature: '/renature.svg',
  urql: '/urql.svg',
  reasonUrql: '/reason-urql.svg',
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
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  hidden: false,
};

const Code = () => {
  const [result] = useQuery({ query: repositoriesQuery });
  const [ref, inView] = useInView({
    threshold: 0.15,
  });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
      });
    } else {
      controls.start({
        opacity: 0,
      });
    }
  }, [inView]);

  if (result.fetching) {
    return null;
  }

  if (result.error) {
    return null;
  }

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
          {Object.keys(result.data)
            .filter((d) => d !== 'viewer')
            .map((project) => {
              const {
                name,
                description,
                repositoryTopics,
                stargazers: { totalCount: starCount },
                forkCount,
                primaryLanguage,
                url,
              } = result.data[project];

              return (
                <RepositoryCard
                  key={name}
                  name={name}
                  description={description}
                  topics={repositoryTopics.edges.map(
                    ({
                      node: {
                        topic: { name: topic },
                      },
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
            number={result.data.viewer.repositoriesContributedTo.totalCount}
            description="Public repositories contributed to (excluding my own)."
            color="purple"
          />
          <Statistic
            number={result.data.viewer.pullRequests.totalCount}
            description="Public pull requests merged."
            color="orange"
          />
          <Statistic
            number={
              result.data.viewer.contributionsCollection.contributionCalendar
                .totalContributions
            }
            description="Contributions in the last year."
            color="purple"
          />
        </motion.div>
      </Section>
      <Section className="stack-md lg:max-w-5/6 mx-auto">
        <SectionHeader>
          <Underline>Other OSS</Underline>
        </SectionHeader>
        <motion.div
          className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          ref={ref}
          animate={controls}
          initial={{ opacity: 0 }}
        >
          {result.data.viewer.repositoriesContributedTo.edges
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
                  forkCount,
                },
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
    </main>
  );
};

export default withUrqlClient(
  () => ({
    url: 'https://api.github.com/graphql',
    fetchOptions: {
      headers: { authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
    },
    fetch,
  }),
  {
    ssr: true,
  }
)(Code);
