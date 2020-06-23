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
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const BlogCard = ({ title, slug, date, tags = [], introText, index }) => {
  const cardNode = (
    <Link href={`/thoughts/${slug}`}>
      <motion.a
        variants={variants}
        className="cursor-pointer"
        whileHover={{
          rotateX: ['0deg', '20deg', '0deg'],
          scale: [1, 1.015, 1.03],
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <div className="flex h-full bg-gradient--primary shadow-lg p-2 rounded-lg">
          <div className="flex flex-col stack-sm p-4 rounded-md bg-white flex-auto overflow-auto">
            <h2 className="text-4xl font-mono font-bold">{title}</h2>
            <p className="text-2xl font-serif line-clamp-ellipsis">
              {introText}
            </p>
            <p className="text-2xl font-mono">{date}</p>
            <div className="flex flex-wrap">
              {tags.map(({ tag, icon }) => (
                <Tag key={tag} icon={icon} className="m-2">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </motion.a>
    </Link>
  );

  if (index % 4 === 0) {
    return (
      <div className="flex flex-col md:col-span-2">
        {cardNode}
        <div className="bg-gradient--secondary flex-1 rounded-lg mt-8" />
      </div>
    );
  }

  return cardNode;
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  introText: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BlogCard;
