import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Section from '../components/Shared/Section';
import SectionHeader from '../components/Shared/SectionHeader';
import Underline from '../components/Shared/Underline';
import Text from '../components/Shared/Text';
import BlogCard from '../components/Cards/BlogCard';

const variants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  hidden: false,
};

const Thoughts = ({ posts }) => {
  return (
    <main>
      <Section className="stack-vertical">
        <SectionHeader>
          <Underline>Thoughts</Underline>
        </SectionHeader>
        <Text>
          I write mostly about tools I like, projects I&apos;m working on, and
          things that are puzzling me. Here are some of my recent pieces.
        </Text>
        <motion.div
          className="masonry-grid"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          {posts.map(({ title, slug, date, tags, introText }, i) => (
            <BlogCard
              key={slug}
              title={title}
              slug={slug}
              date={date}
              tags={tags}
              introText={introText}
              index={i}
            />
          ))}
        </motion.div>
      </Section>
    </main>
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
          tag: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
};

export async function getStaticProps() {
  const fs = require('fs');
  const fsPromise = fs.promises;
  const path = require('path');
  const { read } = require('to-vfile');
  const remark = require('remark');
  const mdx = require('remark-mdx');
  const { parseMeta, orderAndTagPosts } = require('../utils/blog-parser');

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
      posts: orderAndTagPosts(posts),
    },
  };
}

export default Thoughts;
