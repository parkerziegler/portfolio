import * as React from 'react';
import Head from 'next/head';
import gql from 'graphql-tag';
import { createClient } from 'urql';
import { motion } from 'framer-motion';
import fetch from 'isomorphic-unfetch';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import SkewBg from '../src/components/Shared/SkewBg';
import Text from '../src/components/Shared/Text';
import RepositoryCard from '../src/components/Cards/RepositoryCard';
import PixelCard from '../src/components/Cards/PixelCard';
import Statistic from '../src/components/Contributions/Statistic';
import ProjectScreen from '../src/components/Projects/ProjectScreen';
import { projects, repoToBadgePath } from '../src/content/projects';
import { appearParentVariants } from '../src/utils/animation';

// Page-level information for meta tags.
const title = 'Code / Parker Ziegler / Software Engineer and Cartographer';
const description =
  'Open source libraries and projects created by Parker Ziegler, a software engineer and cartographer based in Berkeley, CA.';

const Code = ({ repositories }) => {
  const mainOSS = [
    repositories.renature,
    repositories.reScriptUrql,
    repositories.urql
  ];
  const secondaryOSS = [
    repositories.webpackDashboard,
    repositories.reviz,
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
                  badgePath={repoToBadgePath[name]}
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
    reviz: repository(name: "reviz", owner: "parkerziegler") {
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

export default Code;
