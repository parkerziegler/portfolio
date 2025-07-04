import * as React from 'react';
import Highlight, {
  defaultProps,
  Language,
  PrismTheme
} from 'prism-react-renderer';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import cs from 'classnames';
import { slug } from 'github-slugger';

import SectionHeader from '../Shared/SectionHeader';
import Text from '../Shared/Text';
import InlineLink from '../Shared/InlineLink';
import Heading from '../Shared/Heading';

const anchor = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="3"></circle>
    <line x1="12" y1="22" x2="12" y2="8"></line>
    <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
  </svg>
);

interface SlugAnchorProps {
  id: string;
  level: 2 | 3;
}

const SlugAnchor: React.FC<SlugAnchorProps> = ({ id, level }) => {
  const { height, width, translateY } =
    level === 2
      ? { height: 24, width: 24, translateY: 2 }
      : { height: 16, width: 16, translateY: 5 };

  return (
    <a
      href={`#${id}`}
      className="hidden md:inline absolute left-0 text-current opacity-0 hover:opacity-100 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        transform: `translateX(-30px) translateY(${translateY}px)`,
        height,
        width
      }}
    >
      {anchor}
    </a>
  );
};

const H1: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <SectionHeader className="mb-8">{children}</SectionHeader>;
};

const H2: React.FC<React.PropsWithChildren> = ({ children }) => {
  const id = slug(children);

  return (
    <Heading
      tag="h2"
      className="text-5xl text-indigo-600 font-sans relative self-start group"
      style={{
        marginTop: '6rem',
        scrollMarginTop: '100px',
        scrollSnapMarginTop: '100px'
      }}
      id={id}
      data-anchor
    >
      <SlugAnchor id={id} level={2} />
      {children}
    </Heading>
  );
};

const H3: React.FC<React.PropsWithChildren> = ({ children }) => {
  const id = slug(children);

  return (
    <Heading
      tag="h3"
      className="text-4xl text-yellow-600 font-sans relative self-start group"
      style={{
        marginTop: '3rem',
        scrollMarginTop: '50px',
        scrollSnapMarginTop: '50px'
      }}
      id={id}
      data-anchor
    >
      <SlugAnchor id={id} level={3} />
      {children}
    </Heading>
  );
};

interface InlineCodeProps {
  className?: string;
}

export const InlineCode: React.FC<React.PropsWithChildren<InlineCodeProps>> = ({
  className = 'bg-purple-100',
  children
}) => (
  <code
    className={cs('text-2xl font-mono text-primary p-2 rounded', className)}
  >
    {children}
  </code>
);

const nightOwlLightNoItalics: PrismTheme = {
  ...nightOwlLight,
  styles: nightOwlLight.styles.map((style) => {
    if (style.style.fontStyle === 'italic') {
      return {
        ...style,
        style: {
          ...style.style,
          fontStyle: 'normal'
        }
      };
    }

    return style;
  })
};

interface CodeProps {
  className?: string;
}

const Code: React.FC<React.PropsWithChildren<CodeProps>> = ({
  className = '',
  children
}) => {
  if (typeof children !== 'string') {
    throw new Error('Code children must be a string. Got: ' + typeof children);
  }

  // MDX v2 eliminated inlineCode as a key in the components map.
  // This is a workaround to render inline code via a single Code component.
  if (!className.startsWith('language-')) {
    return <InlineCode className={className}>{children}</InlineCode>;
  }

  const language = className.replace(/language-/, '') as Language;

  return (
    <Highlight
      {...defaultProps}
      theme={nightOwlLightNoItalics}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cs(
            className,
            'rounded-lg text-xl overflow-auto shadow-sm'
          )}
          style={{ ...style, padding: '20px' }}
        >
          {tokens.slice(0, tokens.length - 1).map((line, i) => (
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

const OL: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ol className="text-3xl leading-normal font-serif stack-sm list-decimal pl-16">
    {children}
  </ol>
);

const UL: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ul className="text-3xl leading-normal font-serif stack-sm list-disc pl-16">
    {children}
  </ul>
);

const BlockQuote: React.FC<React.PropsWithChildren> = ({ children }) => (
  <blockquote className="font-semibold bg-indigo-100 p-4 border-l-4 border-primary rounded-md">
    {children}
  </blockquote>
);

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
  blockquote: BlockQuote
};

export default components;
