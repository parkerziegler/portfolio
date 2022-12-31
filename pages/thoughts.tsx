import { promises } from 'fs';
import path from 'path';

import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Section from '../src/components/Shared/Section';
import SectionHeader from '../src/components/Shared/SectionHeader';
import Text from '../src/components/Shared/Text';
import BlogCard from '../src/components/Cards/BlogCard';
import { useScrollToTop } from '../src/hooks/useScrollToTop';
import { appearParentVariants } from '../src/utils/animation';
import { parseMeta, orderAndTagPosts, Post } from '../src/utils/blog-parser';

// Page-level information for meta tags.
const title = 'Thoughts / Parker Ziegler / Software Engineer and Cartographer';
const description =
  'Musings, learnings, and tutorials written by Parker Ziegler, a software engineer and cartographer based in Berkeley, CA.';

interface Props {
  posts: Post[];
}

const Thoughts: NextPage<Props> = ({ posts }) => {
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

export async function getStaticProps() {
  const toVFile = await import('to-vfile');
  const { remark } = await import('remark');
  const { default: remarkMath } = await import('remark-math');
  const { default: remarkMdx } = await import('remark-mdx');

  // Get all posts from the pages/thoughts directory.
  const postsPath = path.resolve(process.cwd(), './pages/thoughts');
  const files = await promises.readdir(postsPath);

  const posts = [];

  // Parse each post's meta information and body. Use remarkMath to parse
  // math blocks and remarkMdx to parse JSX and produce an AST to operate on.
  for (const file of files) {
    const f = await toVFile.read(path.join(postsPath, file), 'utf-8');
    await remark()
      .use(remarkMath)
      .use(remarkMdx)
      .use(parseMeta(posts))
      .process(f);
  }

  return {
    props: {
      posts: orderAndTagPosts(posts)
    }
  };
}

export default Thoughts;
