import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Octokit } from '@octokit/rest';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Text from '../src/components/Shared/Text';
import Map from '../src/components/Map/PlaceMap';
import ContributionCard from '../src/components/Cards/ContributionCard';
import InlineLink from '../src/components/Shared/InlineLink';
import LangSection from '../src/components/Shared/LangSection';
import SkewBg from '../src/components/Shared/SkewBg';
import {
  LANGUAGES,
  TOOLS,
  CONTRIBUTION_EVENT_TYPES
} from '../src/utils/constants';

const title = 'Parker Ziegler / Software Engineer and Cartographer';
const description =
  'Parker Ziegler is a software engineer and cartographer based in Seattle, WA. He works on next generation web technologies, with a focus on animation, graphics, and emerging programming languages.';
const MAX_ACTIVITY_COUNT = 6;

const Index = ({ contributions }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/home/og-image.png" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="675" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@parker_ziegler" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/home/og-image.png" />
    </Head>
    <main id="main">
      <Section className="items-center">
        <div className="md:max-w-3/4 stack-sm">
          <SectionHeader>Hey, I&apos;m Parker.</SectionHeader>
          <Text>
            I am a <strong>computer scientist</strong>,{' '}
            <strong>software engineer</strong>, and{' '}
            <strong>cartographer</strong> based in Berkeley, CA. My passions lie
            at the intersection of software development, programming languages,
            human-computer interaction, and geospatial technologies. I currently
            spend a lot of my time working on{' '}
            <InlineLink href="https://github.com/parkerziegler">
              open source tools
            </InlineLink>{' '}
            to help others build better software.
          </Text>
          <Text>
            I also believe <strong>place</strong> shapes every part of who we
            are. Here are some of the places that have shaped me.
          </Text>
        </div>
        <Map />
      </Section>
      <Section className="stack-md sm:py-24">
        <SkewBg asGradient />
        <SectionHeader className="text-white" type="light">
          What I&apos;m Up To
        </SectionHeader>
        <Text className="text-white">
          I&apos;m currently a Ph.D. student in the Electrical Engineering and
          Computer Science department at UC Berkeley, advised by{' '}
          <InlineLink
            href="https://www2.eecs.berkeley.edu/Faculty/Homepages/schasins.html"
            type="light"
          >
            Sarah Chasins
          </InlineLink>
          . My research focuses on using novel techniques from programming
          languages research to build new tools for social scientists, climate
          researchers, and journalists. Previously, I worked with the wonderful
          and talented folks at{' '}
          <InlineLink href="https://formidable.com/" type="light">
            Formidable
          </InlineLink>
          , where I contributed to their{' '}
          <InlineLink href="https://formidable.com/open-source/" type="light">
            open source work
          </InlineLink>
          . Check out some of my recent contributions.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {contributions.map(
            ({ id, repo, url, language, description, type }) => (
              <ContributionCard
                key={id}
                repo={repo}
                url={url}
                description={description}
                language={language}
                type={type}
              />
            )
          )}
        </div>
      </Section>
      <Section className="items-center pt-20 sm:pt-32">
        <div className="md:max-w-3/4 stack-md">
          <SectionHeader>Tools I Work With</SectionHeader>
          <Text>
            I love everything about the Web and spend most of my days working
            with these lovely languages and tools.
          </Text>
          <div className="flex flex-col sm:flex-row justify-evenly">
            <LangSection title="Languages" langs={Object.values(LANGUAGES)} />
            <LangSection title="Tools" langs={Object.values(TOOLS)} />
          </div>
        </div>
      </Section>
    </main>
  </>
);

const normalizeContribution = (contribution) => {
  const sharedAttributes = {
    id: contribution.id,
    repo: contribution.repo.name,
    language: contribution.language,
    type: contribution.type
  };

  let url = '';
  let description = '';

  switch (contribution.type) {
    case 'ForkEvent': {
      url = contribution.payload.forkee.html_url;
      description = `Forked ${contribution.repo.name} into ${contribution.payload.forkee.full_name}`;

      break;
    }
    case 'IssuesEvent': {
      url = contribution.payload.issue.html_url;
      description = `#${contribution.payload.issue.number}: ${contribution.payload.issue.title}`;

      break;
    }
    case 'PushEvent': {
      url = contribution.payload.commits[0].url
        .replace('api.', '')
        .replace('/repos', '')
        .replace('commits', 'commit');
      description = contribution.payload.commits[0].message;

      break;
    }
    case 'PullRequestEvent': {
      url = contribution.payload.pull_request.html_url;
      description = `#${contribution.payload.pull_request.number}: ${contribution.payload.pull_request.title}`;

      break;
    }
    case 'PullRequestReviewEvent': {
      url = contribution.payload.pull_request.html_url;
      description = `Reviewed #${contribution.payload.pull_request.number}: ${contribution.payload.pull_request.title}`;

      break;
    }
    case 'ReleaseEvent': {
      url = contribution.payload.release.html_url;
      description = `Released ${contribution.payload.release.tag_name} of ${contribution.repo.name}`;

      break;
    }
    default:
      break;
  }

  return {
    ...sharedAttributes,
    url,
    description
  };
};

export async function getStaticProps() {
  const octokit = new Octokit({
    auth: process.env.GITHUB_API_TOKEN,
    userAgent: 'parkie-doo.sh'
  });

  const { data } = await octokit.rest.activity.listPublicEventsForUser({
    username: 'parkerziegler',
    per_page: 20
  });

  let activityCount = 0;
  const activity = [];

  for (const event of data) {
    if (activityCount === MAX_ACTIVITY_COUNT) {
      break;
    }

    if (CONTRIBUTION_EVENT_TYPES.includes(event.type)) {
      activity.push(event);
      activityCount++;
    }
  }

  const contributions = await Promise.all(
    activity.map(async (event) => {
      const [owner, repo] = event.repo.name.split('/');

      const {
        data: { language, parent }
      } = await octokit.rest.repos.get({
        owner,
        repo
      });

      const contribution = {
        ...event,
        language: language || parent?.language
      };

      return normalizeContribution(contribution);
    })
  );

  return {
    props: {
      contributions
    },
    revalidate: 1
  };
}

const Contribution = PropTypes.shape({
  id: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.oneOf(CONTRIBUTION_EVENT_TYPES).isRequired,
  description: PropTypes.string.isRequired
}).isRequired;

Index.propTypes = {
  contributions: PropTypes.arrayOf(Contribution).isRequired
};

export default Index;
