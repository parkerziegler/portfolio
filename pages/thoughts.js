import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Text from '../src/components/Shared/Text';
import BlogCard from '../src/components/Cards/BlogCard';
import { useScrollToTop } from '../src/hooks/useScrollToTop';
import { appearParentVariants } from '../src/utils/animation';

const title = 'Thoughts / Parker Ziegler / Software Engineer and Cartographer';
const description =
  'Musings, learnings, and tutorials written by Parker Ziegler, a software engineer and cartographer based in Seattle, WA.';

const Thoughts = ({ posts }) => {
  useScrollToTop();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thoughts/og-image.png" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="675" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@parker_ziegler" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/thoughts/og-image.png" />
      </Head>
      <main>
        <Section className="stack-md">
          <SectionHeader>Thoughts</SectionHeader>
          <Text>
            I write mostly about tools I like, projects I&apos;m working on, and
            things that are puzzling me. Here are some of my recent pieces.
          </Text>
          <motion.div
            className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-12"
            variants={appearParentVariants}
            initial="hidden"
            animate="visible"
          >
            {posts.map(({ title, slug, date, tags, introText }) => (
              <BlogCard
                key={slug}
                title={title}
                slug={slug}
                date={date}
                tags={tags}
                introText={introText}
              />
            ))}
          </motion.div>
        </Section>
      </main>
    </>
  );
};

Thoughts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      introText: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string.isRequired,
          tag: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
};

export async function getStaticProps() {
  const fs = require('fs');
  const fsPromise = fs.promises;
  const path = require('path');
  const { read } = require('to-vfile');
  const remark = require('remark');
  const mdx = require('remark-mdx');

  const { parseMeta, orderAndTagPosts } = require('../src/utils/blog-parser');

  // Get all posts from the pages/thoughts directory.
  const postsPath = path.resolve(process.cwd(), './pages/thoughts');
  const files = await fsPromise.readdir(postsPath);

  const posts = [];

  for (const file of files) {
    const f = await read(path.join(postsPath, file));
    await remark().use(mdx).use(parseMeta(posts)).process(f);
  }

  return {
    props: {
      posts: orderAndTagPosts(posts)
    }
  };
}

export default Thoughts;
