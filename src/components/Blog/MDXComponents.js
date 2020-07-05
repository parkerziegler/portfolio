import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import cn from 'classnames';
import SectionHeader from '../Shared/SectionHeader';
import Underline from '../Shared/Underline';
import Text from '../Shared/Text';
import InlineLink from '../Shared/InlineLink';
import Heading from '../Shared/Heading';

const H1 = ({ children }) => (
  <SectionHeader className="mb-8">
    <Underline>{children}</Underline>
  </SectionHeader>
);

H1.propTypes = {
  children: PropTypes.node.isRequired
};

const H2 = ({ children }) => (
  <Heading tag="h2" className="text-5xl border-b-4 border-purple self-start">
    {children}
  </Heading>
);

H2.propTypes = {
  children: PropTypes.node.isRequired
};

const H3 = ({ children }) => (
  <Heading tag="h3" className="text-4xl border-b-2 border-orange self-start">
    {children}
  </Heading>
);

H3.propTypes = {
  children: PropTypes.node.isRequired
};

const InlineCode = ({ children }) => (
  <code className="bg-purple-100 text-purple p-2 rounded text-2xl">
    {children}
  </code>
);

InlineCode.propTypes = {
  children: PropTypes.node.isRequired
};

const Code = ({ children, className = '' }) => {
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      theme={nightOwl}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cn(className, 'rounded-lg text-2xl overflow-auto')}
          style={{ ...style, padding: '20px' }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

Code.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const OL = ({ children }) => (
  <ol className="text-3xl list-decimal font-serif pl-16">{children}</ol>
);

OL.propTypes = {
  children: PropTypes.node.isRequired
};

const Image = ({ src, alt }) => (
  <div className="flex flex-col items-center mb-12 stack-sm">
    <img src={src} alt={alt} />
    <span className="text-2xl font-sans text-gray-600">{alt}</span>
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Text,
  a: InlineLink,
  inlineCode: InlineCode,
  code: Code,
  ol: OL,
  img: Image
};

export default components;
