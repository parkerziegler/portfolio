import React from 'react';
import gql from 'graphql-tag';
import { withUrqlClient } from 'next-urql';
import { useQuery } from 'urql';
import { motion } from 'framer-motion';

import Section from '../components/Shared/Section';
import SectionHeader from '../components/Shared/SectionHeader';
import Underline from '../components/Shared/Underline';
import RepositoryCard from '../components/Repository/RepositoryCard';
import Text from '../components/Shared/Text';
import Statistic from '../components/Contributions/Statistic';

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

const Code = () => {
  const [result] = useQuery({ query: repositoriesQuery });

  if (result.fetching) {
    return null;
  }

  if (result.error) {
    return null;
  }

  return (
    <main>
      <Section className="stack-vertical">
        <SectionHeader>
          <Underline>Featured Open Source</Underline>
        </SectionHeader>
        <Text>
          {
            "I'm passionate about open source because I fundamentally believe in the radical power of transparent and open knowledge making. Here are some of the projects I've worked on the most."
          }
        </Text>
        <motion.div
          className="flex flex-col md:flex-row stack-vertical md:clear-stack-vertical md:stack-horizontal"
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
                url
              } = result.data[project];

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
        </motion.div>
      </Section>
      <Section>
        <div className="flex flex-col md:flex-row stack-vertical md:clear-stack-vertical md:stack-horizontal">
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
            color="teal"
          />
        </div>
      </Section>
    </main>
  );
};

export default withUrqlClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: {
    headers: { authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
  }
})(Code);
