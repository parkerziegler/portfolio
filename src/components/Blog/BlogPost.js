import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

import Section from '../Shared/Section';
import components from './MDXComponents';
import Tag from './Tag';

const BlogPost = ({ title, tags, children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <MDXProvider components={components}>
      <main className="md:max-w-3/4 ml-auto mr-auto">
        <div
          className="flex pt-16 px-8 sm:px-32 stack-sm-h md:absolute md:mt-24 md:flex-col md:stack-sm md:pt-0 md:px-0 md:stack-none-h md:max-w-1/8"
          style={{
            left: `${100 - 75 / 2 / 2}%`
          }}
        >
          {tags.map(({ tag, icon }) => (
            <Tag key={tag} icon={icon}>
              {tag}
            </Tag>
          ))}
        </div>
        <Section className="stack-md">{children}</Section>
      </main>
    </MDXProvider>
  </>
);

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  children: PropTypes.node.isRequired
};

export default BlogPost;
