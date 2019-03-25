import React from 'react';
import { css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import theme from '../styles/Theme';
import Page from '../components/Shared/Page';
import Header from '../components/Header/Header';
import Section from '../components/Shared/Section';
import SectionHeader from '../components/Shared/SectionHeader';
import Underline from '../components/Shared/Underline';
import Text from '../components/Shared/Text';
import Timeline from '../components/Repository/Timeline';

const Index = () => (
  <ThemeProvider theme={theme}>
    <Page>
      <Header />
      <main>
        <Section
          css={css`
            max-width: 75%;
            margin: auto;
          `}
        >
          <SectionHeader
            css={css`
              flex-basis: 60%;
            `}
          >
            <Underline>Hey, I&apos;m Parker.</Underline>
          </SectionHeader>
          <Text>
            {' '}
            I am a <b>software engineer</b> and <b>cartographer</b> based in
            Seattle, WA. My passions lie at the intersection of software
            development, map making, storytelling, and community organizing.{' '}
            <br /> <b>I 💖open source.</b>
          </Text>
        </Section>
        <Section
          css={css`
            flex-direction: column;
          `}
        >
          <SectionHeader>
            <Underline>What I&apos;m Up To</Underline>
          </SectionHeader>
          <Timeline />
          {/* <Card>Just here for fun!</Card> */}
        </Section>
        <Section
          css={css`
            flex-direction: column;
          `}
        >
          <SectionHeader>
            <Underline>A Bit About Me</Underline>
          </SectionHeader>
          <Text>
            I currently work with the wonderful and talented folks at{' '}
            <b>Formidable</b>, where I contribute to our open source work, build
            software for rad folks, and support my fellow developers in becoming
            better engineers and kinder people.
          </Text>
        </Section>
      </main>
    </Page>
  </ThemeProvider>
);

export default Index;
