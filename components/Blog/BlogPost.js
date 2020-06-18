import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import Section from '../Shared/Section';
import components from './MDXComponents';
import Tag from './Tag';

const BlogPost = ({ tags, children }) => {
  return (
    <MDXProvider components={components}>
      <main className="md:max-w-3/4 ml-auto mr-auto">
        <div
          className="flex pt-16 px-16 sm:px-32 stack-xs-h md:absolute md:mt-24 md:flex-col md:stack-sm md:pt-0 md:px-0 md:stack-none-h md:max-w-1/8"
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
  );
};

BlogPost.propTypes = {
  children: PropTypes.node.isRequired
};

export default BlogPost;
