import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'urql';
import { withUrqlClient } from 'next-urql';

import Section from '../components/Shared/Section';
import SectionHeader from '../components/Shared/SectionHeader';
import Underline from '../components/Shared/Underline';
import Text from '../components/Shared/Text';
import SocialIcon from '../components/Shared/SocialIcon';
import Map from '../components/Map/Map';
import CardGrid from '../components/Contributions/CardGrid';
import Card from '../components/Contributions/Card';
import InlineLink from '../components/Shared/InlineLink';

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
            I am a <b>software engineer</b> and <b>cartographer</b> based in
            Seattle, WA. My passions lie at the intersection of software
            development, map making, storytelling, and community organizing.{' '}
          </Text>
          <Text>
            I believe <b>place</b> shapes every part of who we are. Here are
            some of the places that have shaped me.
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
            ({ repository: { nameWithOwner }, url, title, id }) => (
              <Card
                nameWithOwner={nameWithOwner}
                url={url}
                title={title}
                key={id}
              />
            )
          )}
        </CardGrid>
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
  }
})(Index);
