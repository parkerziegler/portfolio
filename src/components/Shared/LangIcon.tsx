import * as React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

const LangIcon: React.FC<Props> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className="h-20 w-20 m-8"
      width={50}
      height={50}
    />
  );
};

export default LangIcon;
