import * as React from 'react';

import LangIcon from './LangIcon';

interface Props {
  title: string;
  langs: {
    src: string;
    alt: string;
  }[];
}

const LangSection: React.FC<Props> = ({ title, langs }) => {
  return (
    <div>
      <h3 className="text-4xl text-center font-mono italic mb-4">{title}</h3>
      <div className="flex flex-wrap items-center justify-center">
        {langs.map(({ src, alt }) => (
          <LangIcon key={src} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
};

export default LangSection;
