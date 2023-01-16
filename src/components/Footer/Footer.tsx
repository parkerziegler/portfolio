import * as React from 'react';

import SectionHeader from '../Shared/SectionHeader';
import SocialIcon from '../Shared/SocialIcon';
import { social } from '../../content/social';

const Footer: React.FC = () => (
  <footer className="w-full max-w-view mx-auto flex flex-col px-8 py-12 sm:py-16 sm:px-32 md:px-40">
    <div className="flex flex-col stack-lg self-center md:stack-xl-h md:flex-row md:items-center">
      <SectionHeader className="self-center">Find Me</SectionHeader>
      <div className="flex items-center stack-lg-h md:stack-xl-h">
        {social.map(({ src, alt, href }) => (
          <SocialIcon key={src} src={src} alt={alt} href={href} variant="lg" />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
