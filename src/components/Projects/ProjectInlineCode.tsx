import * as React from 'react';
import cs from 'classnames';

import { InlineCode } from '../Blog/MDXComponents';

interface Props {
  className?: string;
}

const ProjectInlineCode: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children
}) => (
  <InlineCode
    className={cs(
      'bg-transparent text-terminal-secondary px-0 py-0 text-2xl md:text-3xl',
      className
    )}
  >
    {children}
  </InlineCode>
);

export default ProjectInlineCode;
