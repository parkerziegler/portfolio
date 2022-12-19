import * as React from 'react';
import cs from 'classnames';

interface Props {
  className?: string;
}

const Text: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children
}) => (
  <p className={cs('font-serif text-3xl leading-normal', className)}>
    {children}
  </p>
);

export default Text;
