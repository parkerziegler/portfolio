import React from 'react';
import { css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import theme from '../styles/Theme';
import Page from '../components/Shared/Page';
import Header from '../components/Header/Header';
import Section from '../components/Shared/Section';
import Underline from '../components/Shared/Underline';
import Text from '../components/Shared/Text';

const Index = () => (
  <ThemeProvider theme={theme}>
    <Page>
      <Header />
      <Section
        css={css`
          max-width: 75%;
          margin: auto;
        `}
      >
        <h2
          css={css`
            font-size: 5rem;
            margin: 0;
            flex-basis: 60%;
          `}
        >
          <Underline>Hey, I&apos;m Parker.</Underline>
        </h2>
        <Text>
          {' '}
          I am a <b>software engineer</b> and <b>cartographer</b> based in
          Seattle, WA. My passions lie at the intersection of software
          development, map making, and community organizing. <br />{' '}
          <b>I 💖open source.</b>
        </Text>
      </Section>
    </Page>
  </ThemeProvider>
);

export default Index;
