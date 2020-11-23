import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import cs from 'classnames';

import SectionHeader from '../Shared/SectionHeader';
import Underline from '../Shared/Underline';
import Text from '../Shared/Text';
import InlineLink from '../Shared/InlineLink';
import Heading from '../Shared/Heading';
import { generateSrcSet } from '../../utils/generate-src-set';

const H1 = ({ children }) => (
  <SectionHeader className="mb-8">
    <Underline>{children}</Underline>
  </SectionHeader>
);

H1.propTypes = {
  children: PropTypes.node.isRequired
};

const H2 = ({ children }) => (
  <Heading
    tag="h2"
    className="text-5xl text-gray-600 self-start"
    style={{ marginTop: '6rem' }}
  >
    {children}
  </Heading>
);

H2.propTypes = {
  children: PropTypes.node.isRequired
};

const H3 = ({ children }) => (
  <Heading tag="h3" className="text-4xl text-teal-700 self-start">
    {children}
  </Heading>
);

H3.propTypes = {
  children: PropTypes.node.isRequired
};

export const InlineCode = ({ className = 'bg-purple-100', children }) => (
  <code className={cs('text-2xl font-mono text-purple p-2 rounded', className)}>
    {children}
  </code>
);

InlineCode.propTypes = {
  className: PropTypes.string,
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
          className={cs(className, 'rounded-lg text-2xl overflow-auto')}
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
  <ol className="text-3xl leading-normal font-serif stack-sm list-decimal pl-16">
    {children}
  </ol>
);

OL.propTypes = {
  children: PropTypes.node.isRequired
};

const UL = ({ children }) => (
  <ul className="text-3xl leading-normal font-serif stack-sm list-disc pl-16">
    {children}
  </ul>
);

UL.propTypes = {
  children: PropTypes.node.isRequired
};

const Image = ({ src, alt }) => {
  const ext = src.split('.')[1];
  let additionalImageProps = {};

  if (ext === 'png') {
    const srcSet = generateSrcSet(src);
    const sizes = '(min-width: 768px) 75vw, (min-width: 1280px) 960px, 100vw';
    additionalImageProps = {
      srcSet,
      sizes
    };
  }

  return (
    <div className="flex flex-col items-center mb-12 stack-sm">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        {...additionalImageProps}
        className="rounded-lg"
      />
      <span className="text-2xl font-sans text-gray-600">{alt}</span>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

const BlockQuote = ({ children }) => (
  <blockquote className="font-bold bg-indigo-200 border-opacity-50 p-4 rounded-md">
    {children}
  </blockquote>
);

BlockQuote.propTypes = {
  children: PropTypes.node.isRequired
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
  ul: UL,
  img: Image,
  blockquote: BlockQuote
};

export default components;
