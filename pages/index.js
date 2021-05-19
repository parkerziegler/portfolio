import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { createClient } from 'urql';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Text from '../src/components/Shared/Text';
import Map from '../src/components/Map/PlaceMap';
import PRCard from '../src/components/Cards/PRCard';
import PRCardGrid from '../src/components/Cards/PRCardGrid';
import InlineLink from '../src/components/Shared/InlineLink';
import LangSection from '../src/components/Shared/LangSection';
import SkewBg from '../src/components/Shared/SkewBg';
import { LANGUAGES, TOOLS } from '../src/utils/constants';

const contributionsQuery = gql`
  query contributions($login: String!) {
    user(login: $login) {
      pullRequests(
        states: [OPEN, MERGED]
        first: 6
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          id
          url
          title
          repository {
            nameWithOwner
            description
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`;

const title = 'Parker Ziegler / Software Engineer and Cartographer';
const description =
  'Parker Ziegler is a software engineer and cartographer based in Seattle, WA. He works on next generation web technologies, with a focus on animation, graphics, and emerging programming languages.';

const Index = ({ user }) => (
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
            I am a <strong>software engineer</strong> and{' '}
            <strong>cartographer</strong> based in Seattle, WA. My passions lie
            at the intersection of software development, map making,
            storytelling, and community organizing. I currently spend a lot of
            my time working on{' '}
            <InlineLink href="https://github.com/parkerziegler">
              open source tools
            </InlineLink>{' '}
            to help others build better software and bring delightful
            experiences to their communities.
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
          I currently work with the wonderful and talented folks at{' '}
          <InlineLink href="https://formidable.com/" type="light">
            Formidable
          </InlineLink>
          , where I contribute to our{' '}
          <InlineLink href="https://formidable.com/open-source/" type="light">
            open source work
          </InlineLink>
          , build software for rad folks, and support my fellow developers in
          becoming better engineers and kinder people. Here are some of my
          recent pull requests.
        </Text>
        <PRCardGrid>
          {user.pullRequests.nodes.map(
            ({
              repository: { nameWithOwner, primaryLanguage },
              url,
              title,
              id
            }) => (
              <PRCard
                key={id}
                nameWithOwner={nameWithOwner}
                url={url}
                title={title}
                primaryLanguage={primaryLanguage}
              />
            )
          )}
        </PRCardGrid>
      </Section>
      <Section className="items-center pt-20 sm:pt-32">
        <div className="md:max-w-3/4 stack-md">
          <SectionHeader>Tools I Work With</SectionHeader>
          <Text>
            I love the frontend JavaScript ecosystem and spend most of my days
            working with these lovely languages and tools.
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

export async function getStaticProps() {
  const client = createClient({
    url: 'https://api.github.com/graphql',
    fetchOptions: {
      headers: { authorization: `Bearer ${process.env.GITHUB_API_TOKEN}` }
    },
    fetch
  });

  const contributions = await client
    .query(contributionsQuery, {
      login: 'parkerziegler'
    })
    .toPromise();

  return {
    props: {
      user: contributions.data.user
    },
    revalidate: 1
  };
}

const PullRequest = PropTypes.shape({
  repository: PropTypes.shape({
    nameWithOwner: PropTypes.string.isRequired,
    primaryLanguage: PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  }).isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}).isRequired;

Index.propTypes = {
  user: PropTypes.shape({
    pullRequests: PropTypes.shape({
      nodes: PropTypes.arrayOf(PullRequest).isRequired
    }).isRequired
  }).isRequired
};

export default Index;
