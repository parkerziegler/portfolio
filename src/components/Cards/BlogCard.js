import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Tag from '../Blog/Tag';
import {
  appearChildVariants,
  boxShadow,
  transitionRelaxed,
  translateUpRight
} from '../../utils/animation';

const BlogCard = ({ title, slug, tags = [], introText, date }) => {
  return (
    <Link href={`/thoughts/${slug}`}>
      <motion.a
        variants={appearChildVariants}
        className="col-span-12 md:col-span-6 cursor-pointer rounded-lg"
        whileHover={{ ...boxShadow, ...translateUpRight }}
        transition={transitionRelaxed}
      >
        <div className="flex h-full bg-gradient-to-r from-primary to-secondary shadow-lg p-2 rounded-lg">
          <div className="flex flex-col p-4 rounded-md bg-white flex-auto overflow-auto">
            <h2 className="text-4xl font-serif font-bold">{title}</h2>
            <p className="text-2xl font-serif line-clamp-ellipsis leading-snug tracking-normal my-8">
              {introText}
            </p>
            <div className="flex justify-between items-end mt-auto">
              <div className="flex flex-wrap">
                {tags.map(({ tag, icon }) => (
                  <Tag
                    key={tag}
                    icon={icon}
                    compact
                    className="m-2 h-16 text-lg"
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
              <p className="text-xl lg:2xl font-mono self-end m-2 flex-shrink-0">
                {date}
              </p>
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
