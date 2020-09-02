import React from 'react';

import SectionHeader from '../Shared/SectionHeader';
import Underline from '../Shared/Underline';
import SocialIcon from '../Shared/SocialIcon';

const Footer = () => (
  <footer className="w-full max-w-view mx-auto flex flex-col px-8 py-12 sm:py-16 sm:px-32 md:px-40">
    <div className="md:max-w-3/4 stack-sm self-center">
      <SectionHeader centered>
        <Underline>Find Me</Underline>
      </SectionHeader>
      <div className="flex items-center">
        <SocialIcon
          href="https://twitter.com/parker_ziegler"
          path="/twitter.svg"
          alt="Parker's Twitter"
        />
        <SocialIcon
          href="https://github.com/parkerziegler"
          path="/github.svg"
          alt="Parker's GitHub"
        />
        <SocialIcon
          href="https://codesandbox.io/u/parkerziegler"
          path="/codesandbox.svg"
          alt="Parker's CodeSandbox"
        />
      </div>
    </div>
  </footer>
);

export default Footer;
