import * as React from 'react';

interface Props {
  src: string;
  alt: string;
}

const LangIcon: React.FC<Props> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="h-20 m-8" />;
};

export default LangIcon;
