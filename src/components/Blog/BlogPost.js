import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import Section from '../Shared/Section';
import components from './MDXComponents';
import Tag from './Tag';

const BlogPost = ({ title, tags, publishDate, children }) => {
  const meta = (
    <div
      className="flex flex-col stack-sm md:absolute"
      style={{
        right: '-10%'
      }}
    >
      <span className="font-mono text-2xl">{publishDate}</span>
      <div className="flex md:flex-col stack-sm-h md:stack-none-h md:stack-sm">
        {tags.map(({ tag, icon }) => (
          <Tag key={tag} icon={icon}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );

  const childrenWithMeta = React.Children.map(children, (child, i) => {
    if (i === 0) {
      return (
        <>
          {child}
          {meta}
        </>
      );
    }

    return child;
  });

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MDXProvider components={components}>
        <main className="md:max-w-3/4 ml-auto mr-auto">
          <Section className="stack-md">{childrenWithMeta}</Section>
        </main>
      </MDXProvider>
    </>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  publishDate: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default BlogPost;
