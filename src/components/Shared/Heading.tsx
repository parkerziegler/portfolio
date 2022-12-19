import * as React from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: React.FC<React.PropsWithChildren<Props>> = ({
  tag = 'h1',
  children,
  ...rest
}) => React.createElement(tag, { ...rest }, children);

export default Heading;
