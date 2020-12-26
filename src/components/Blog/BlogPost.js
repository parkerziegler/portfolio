import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { useInView } from 'react-intersection-observer';

import components from './MDXComponents';
import Meta from './Meta';

const BlogPost = ({ title, tags, publishDate, slug, children }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '-100px'
  });

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MDXProvider components={components}>
        <main className="md:flex md:stack-lg-h md:justify-center px-12 py-12">
          <article className="flex flex-col stack-md max-w-prose mx-auto min-w-0">
            {children}
          </article>
          <aside className="hidden md:flex md:flex-col md:flex-shrink-0 md:w-60">
            <Meta
              tags={tags}
              publishDate={publishDate}
              displayMinimap={inView}
              slug={slug}
            />
            <div
              ref={ref}
              aria-hidden="true"
              data-waypoint
              className="relative left-0 right-0 w-full invisible"
              style={{
                height: 'calc(100% - 100vh)',
                marginTop: '100vh'
              }}
            />
          </aside>
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
  slug: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default BlogPost;
