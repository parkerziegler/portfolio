import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { useInView } from 'react-intersection-observer';

import { useScrollToTop } from '../../hooks/useScrollToTop';

import components from './MDXComponents';
import Meta from './Meta';

const BlogPost = ({
  title,
  description,
  tags,
  publishDate,
  slug,
  children
}) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '-100px'
  });

  useScrollToTop();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={
            process.env.NEXT_PUBLIC_VERCEL_URL
              ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/thoughts/${slug}/og-image.png`
              : `/thoughts/${slug}/og-image.png`
          }
        />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@parker_ziegler" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={
            process.env.NEXT_PUBLIC_VERCEL_URL
              ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/thoughts/${slug}/og-image.png`
              : `/thoughts/${slug}/og-image.png`
          }
        />
      </Head>
      <MDXProvider components={components}>
        <main className="md:flex md:stack-lg-h md:justify-center px-8 sm:px-32 md:px-40 py-12 sm:py-16">
          <article className="flex flex-col stack-md md:stack-lg max-w-prose mx-auto min-w-0">
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
  description: PropTypes.string.isRequired,
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
