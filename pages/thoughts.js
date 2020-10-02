import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Underline from '../src/components/Shared/Underline';
import Text from '../src/components/Shared/Text';
import BlogCard from '../src/components/Cards/BlogCard';
import { useScrollToTop } from '../src/hooks/useScrollToTop';

const variants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  hidden: false
};

const Thoughts = ({ posts }) => {
  useScrollToTop();

  return (
    <>
      <Head>
        <title>
          Thoughts | Parker Ziegler | Software Engineer and Cartographer
        </title>
        <meta
          name="description"
          content="Musings, learnings, and tutorials written by Parker Ziegler, a software engineer and cartographer based in Seattle, WA."
        />
      </Head>
      <main>
        <Section className="stack-md">
          <SectionHeader>
            <Underline>Thoughts</Underline>
          </SectionHeader>
          <Text>
            I write mostly about tools I like, projects I&apos;m working on, and
            things that are puzzling me. Here are some of my recent pieces.
          </Text>
          <motion.div
            className="grid grid-cols-12 gap-12"
            variants={variants}
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
