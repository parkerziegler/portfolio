import React from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import Section from '../components/Shared/Section';
import SectionHeader from '../components/Shared/SectionHeader';
import Underline from '../components/Shared/Underline';
import Text from '../components/Shared/Text';
import BlogCard from '../components/Cards/BlogCard';

import posts from '../scripts/blogs.json';

const variants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  hidden: false
};

const Thoughts = () => {
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
              className={cn({
                'span-col-2-row-2': i !== 0 && i % 3 === 0,
                'span-3': i === 2
              })}
            />
          ))}
        </motion.div>
      </Section>
    </main>
  );
};

export default Thoughts;
