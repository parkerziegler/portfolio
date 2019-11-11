import React from 'react';
import { css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import theme, { mq } from '../styles/Theme';
import Page from '../components/Shared/Page';
import Header from '../components/Header/Header';
import Section from '../components/Shared/Section';
import SectionHeader from '../components/Shared/SectionHeader';
import Underline from '../components/Shared/Underline';
import Text from '../components/Shared/Text';
import SocialIcon from '../components/Shared/SocialIcon';
import Map from '../components/Map/Map';
import CardGrid from '../components/RepositoryHTML/CardGrid';
import Card from '../components/RepositoryHTML/Card';

const contributionsQuery = gql`
  query contributions {
    user(login: "parkerziegler") {
      pullRequests(
        states: [OPEN, MERGED]
        last: 6
        orderBy: { field: CREATED_AT, direction: ASC }
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

const Index = () => (
  <ThemeProvider theme={theme}>
    <Page>
      <Header />
      <main>
        <Section
          css={css`
            align-items: center;
          `}
        >
          <SectionHeader>
            <Underline>Hey, I&apos;m Parker.</Underline>
          </SectionHeader>
          <Text
            css={css`
              max-width: 50%;
              ${mq[0]} {
                max-width: 100%;
              }

              ${mq[1]} {
                max-width: 100%;
              }
            `}
          >
            {' '}
            I am a <b>software engineer</b> and <b>cartographer</b> based in
            Seattle, WA. My passions lie at the intersection of software
            development, map making, storytelling, and community organizing.{' '}
            <br />
            <br />I believe <b>place</b> shapes every part of who we are. Here
            are some of the places that have shaped me.
          </Text>
          <Map />
        </Section>
        <Section>
          <SectionHeader>
            <Underline>What I&apos;m Up To</Underline>
          </SectionHeader>
          <Text>
            I currently work with the wonderful and talented folks at{' '}
            <b>Formidable</b>, where I contribute to our{' '}
            <a
              href="https://formidable.com/open-source/"
              rel="noopener noreferrer"
              target="_blank"
            >
              open source work
            </a>
            , build software for rad folks, and support my fellow developers in
            becoming better engineers and kinder people. Here is some of my
            recent work.
          </Text>
          <Query query={contributionsQuery}>
            {({ loading, error, data }) => {
              if (loading) {
                return 'Loading';
              }

              if (error) {
                return `Error: ${error}`;
              }

              return (
                <CardGrid>
                  {data.user.pullRequests.nodes.map(
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
              );
            }}
          </Query>
        </Section>
        <Section>
          <SectionHeader
            css={css`
              align-self: center;
            `}
          >
            <Underline>🔬 Find Me</Underline>
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              <SocialIcon
                href="https://twitter.com/parker_ziegler"
                path="/twitter.svg"
              />
              <SocialIcon
                href="https://github.com/parkerziegler"
                path="/github.svg"
                height="6rem"
              />
              <SocialIcon
                href="https://codesandbox.io/u/parkerziegler"
                path="/codesandbox.svg"
                height="7rem"
              />
            </div>
          </SectionHeader>
        </Section>
      </main>
    </Page>
  </ThemeProvider>
);

export default Index;
