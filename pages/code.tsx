import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
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
import { graphql } from '../src/generated';
import type { ReposQuery, ReposQueryVariables } from '../src/generated/graphql';

// Page-level information for meta tags.
const title = 'Code / Parker Ziegler / Software Engineer and Cartographer';
const description =
  'Open source libraries and projects created by Parker Ziegler, a software engineer and cartographer based in Berkeley, CA.';

interface Props {
  repositories: ReposQuery;
}

const Code: NextPage<Props> = ({ repositories }) => {
  const mainOSS = [
    repositories.renature,
    repositories.reScriptUrql,
    repositories.reviz
  ];
  const secondaryOSS = [
    repositories.urql,
    repositories.webpackDashboard,
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
            {mainOSS.map((project, i) => (
              <RepositoryCard
                key={`${project.__typename}-${i}`}
                repository={project}
              />
            ))}
            {secondaryOSS.map((project, i) => (
              <PixelCard
                key={`${project.__typename}-${i}`}
                repository={project}
              />
            ))}
          </motion.div>
        </Section>
        <Section className="stack-md">
          <SectionHeader>Contributions</SectionHeader>
          <div className="grid grid-cols-12 gap-8">
            <Text className="col-span-12 lg:col-span-6">
              When I&apos;m not doing research or teaching, I love contributing
              to open source. Here are the stats for my contributions over the
              past year.
            </Text>
            <div className="col-span-12 lg:col-span-6 grid grid-cols-12 lg:grid-cols-6 gap-8">
              <Statistic
                number={
                  repositories.viewer.contributionsCollection
                    .totalCommitContributions
                }
                description="Commit"
              />
              <Statistic
                number={
                  repositories.viewer.contributionsCollection
                    .totalPullRequestContributions
                }
                description="Pull Request"
              />
              <Statistic
                number={
                  repositories.viewer.contributionsCollection
                    .totalPullRequestReviewContributions
                }
                description="Pull Request Review"
              />
              <Statistic
                number={
                  repositories.viewer.contributionsCollection
                    .totalIssueContributions
                }
                description="Issue"
              />
            </div>
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

const repositoriesQuery = graphql(`
  query repos($from: DateTime!, $to: DateTime!) {
    renature: repository(name: "renature", owner: "FormidableLabs") {
      ...repoInfo
    }
    reviz: repository(name: "reviz", owner: "parkerziegler") {
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
    urql: repository(name: "urql", owner: "FormidableLabs") {
      ...repoInfo
    }
    reasonBasics: repository(name: "reason-basics", owner: "parkerziegler") {
      ...repoInfo
    }
    viewer {
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
      }
    }
  }
`);

export async function getStaticProps() {
  try {
    const client = createClient({
      url: 'https://api.github.com/graphql',
      fetchOptions: {
        headers: { authorization: `Bearer ${process.env.GITHUB_API_TOKEN}` }
      },
      fetch
    });

    const to = new Date();
    let from = new Date();
    from.setFullYear(to.getFullYear() - 1);

    const repositories = await client
      .query<ReposQuery, ReposQueryVariables>(repositoriesQuery, {
        from: from.toISOString(),
        to: to.toISOString()
      })
      .toPromise();

    return {
      props: {
        repositories: repositories.data
      },
      revalidate: 1
    };
  } catch (error) {
    throw new Error(
      'Failed to query GitHub API for repositories. Got: ' + error
    );
  }
}

export default Code;
