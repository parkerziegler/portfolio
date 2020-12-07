import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

import { InlineCode } from '../Blog/MDXComponents';

const ProjectInlineCode = ({ className, children }) => (
  <InlineCode
    className={cs(
      'bg-transparent text-terminal-secondary px-0 py-0 text-2xl md:text-3xl',
      className
    )}
  >
    {children}
  </InlineCode>
);

ProjectInlineCode.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ProjectInlineCode;
