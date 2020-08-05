import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Tag from '../Blog/Tag';

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const BlogCard = ({ title, slug, tags = [], introText, date }) => {
  return (
    <Link href={`/thoughts/${slug}`}>
      <motion.a
        variants={variants}
        className="cursor-pointer col-span-12 md:col-span-6"
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
      >
        <div className="flex h-full bg-gradient--primary shadow-lg p-2 rounded-lg">
          <div className="flex flex-col p-4 rounded-md bg-white flex-auto overflow-auto">
            <h2 className="text-4xl font-serif font-bold">{title}</h2>
            <p className="text-2xl font-serif line-clamp-ellipsis leading-snug tracking-normal my-8">
              {introText}
            </p>
            <div className="flex justify-between items-end mt-auto">
              <div className="flex flex-wrap">
                {tags.map(({ tag, icon }) => (
                  <Tag key={tag} icon={icon} className="m-2 h-16">
                    {tag}
                  </Tag>
                ))}
              </div>
              <p className="text-2xl self-end m-2">{date}</p>
            </div>
          </div>
        </div>
      </motion.a>
    </Link>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  introText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default BlogCard;
