import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'urql';
import { withUrqlClient } from 'next-urql';
import fetch from 'isomorphic-unfetch';

import Section from '../components/Shared/Section';
import SectionHeader from '../components/Shared/SectionHeader';
import Underline from '../components/Shared/Underline';
import Text from '../components/Shared/Text';
import SocialIcon from '../components/Shared/SocialIcon';
import Map from '../components/Map/PlaceMap';
import Card from '../components/Cards/PRCard';
import CardGrid from '../components/Cards/PRCardGrid';
import InlineLink from '../components/Shared/InlineLink';
import LangSection from '../components/Shared/LangSection';

const LANGUAGES = [
  { src: '/js-logo.svg', alt: 'JavaScript' },
  { src: '/ts-logo.svg', alt: 'TypeScript' },
  { src: '/reason-logo.svg', alt: 'ReasonML' },
  { src: '/css-logo.svg', alt: 'CSS' },
  { src: '/graphql-logo.svg', alt: 'GraphQL' }
];

const FRAMEWORKS = [
  { src: '/react-logo.svg', alt: 'React' },
  { src: '/next-logo.svg', alt: 'NextJS' },
  { src: '/redux-logo.svg', alt: 'Redux' },
  { src: '/jest-logo.svg', alt: 'Jest ' },
  { src: '/sass-logo.svg', alt: 'Sass' }
];

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

const Index = () => {
  const [result] = useQuery({
    query: contributionsQuery,
    variables: { login: 'parkerziegler' }
  });

  if (result.fetching) {
    return null;
  }

  if (result.error) {
    // TODO add an error page.
    return null;
  }

  return (
    <main id="main">
      <Section className="items-center">
        <div className="md:max-w-3/4 stack-vertical">
          <SectionHeader>
            <Underline>Hey, I&apos;m Parker.</Underline>
          </SectionHeader>
          <Text>
            I am a <strong>software engineer</strong> and{' '}
            <strong>cartographer</strong> based in Seattle, WA. My passions lie
            at the intersection of software development, map making,
            storytelling, and community organizing. I currently spend a lot of
            my time working on{' '}
            <InlineLink href="https://github.com/parkerziegler">
              open source tools
            </InlineLink>{' '}
            to help others build better software to empower their communities.
          </Text>
          <Text>
            I also believe <strong>place</strong> shapes every part of who we
            are. Here are some of the places that have shaped me.
          </Text>
        </div>
        <Map />
      </Section>
      <Section className="stack-vertical">
        <SectionHeader>
          <Underline>What I&apos;m Up To</Underline>
        </SectionHeader>
        <Text>
          I currently work with the wonderful and talented folks at{' '}
          <InlineLink href="https://formidable.com/">Formidable</InlineLink>,
          where I contribute to our{' '}
          <InlineLink href="https://formidable.com/open-source/">
            open source work
          </InlineLink>
          , build software for rad folks, and support my fellow developers in
          becoming better engineers and kinder people. Here are some of my
          recent pull requests.
        </Text>
        <CardGrid>
          {result.data.user.pullRequests.nodes.map(
            ({
              repository: { nameWithOwner, primaryLanguage },
              url,
              title,
              id
            }) => (
              <Card
                key={id}
                nameWithOwner={nameWithOwner}
                url={url}
                title={title}
                primaryLanguage={primaryLanguage}
              />
            )
          )}
        </CardGrid>
      </Section>
      <Section className="items-center">
        <div className="md:max-w-3/4 stack-vertical">
          <SectionHeader>
            <Underline>Tools I Work With</Underline>
          </SectionHeader>
          <Text>
            I love the frontend JavaScript ecosystem and spend most of my days
            working with these lovely languages and frameworks:{' '}
          </Text>
          <div className="flex flex-col sm:flex-row justify-evenly">
            <LangSection title="Languages" langs={LANGUAGES} />
            <LangSection title="Frameworks" langs={FRAMEWORKS} />
          </div>
        </div>
      </Section>
      <Section className="items-center">
        <div className="md:max-w-3/4">
          <SectionHeader centered>
            <Underline>Find Me</Underline>
          </SectionHeader>
          <div className="flex items-center">
            <SocialIcon
              href="https://twitter.com/parker_ziegler"
              path="/twitter.svg"
            />
            <SocialIcon
              href="https://github.com/parkerziegler"
              path="/github.svg"
            />
            <SocialIcon
              href="https://codesandbox.io/u/parkerziegler"
              path="/codesandbox.svg"
            />
          </div>
        </div>
      </Section>
    </main>
  );
};

export default withUrqlClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: {
    headers: { authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
  },
  fetch
})(Index);
