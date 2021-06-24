import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import Tag from './Tag';

const minimapVariants = {
  invisible: {
    x: 150,
    opacity: 0
  },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  })
};

const Meta = ({ publishDate, tags, slug, displayMinimap }) => {
  const [nodes, setNodes] = useState([]);
  const [hitCount, setHitCount] = useState(0);
  const [hitCountErrored, setHitCountErrored] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-anchor]');

    const minimap = [];
    for (const node of nodes) {
      minimap.push({ text: node.innerText, id: node.id });
    }

    setNodes(minimap);
  }, []);

  useEffect(() => {
    // Only register hits in production.
    if (process.env.NODE_ENV === 'production') {
      fetch(`/api/register-hit?slug=${slug}`)
        .then((res) => res.json())
        .then(({ hits }) => {
          if (typeof hits === 'number') {
            setHitCount(hits);
          }
        })
        .catch((error) => {
          console.error('Failed to register hit: ', error.message);
          setHitCountErrored(true);
        });
    }
  }, [slug]);

  return (
    <nav className="hidden md:flex md:flex-col md:stack-sm md:sticky md:top-8">
      <span className="font-mono text-2xl">{publishDate}</span>
      <div className="flex flex-col stack-sm-h stack-none-h stack-sm">
        {tags.map(({ tag, icon }) => (
          <Tag key={tag} icon={icon}>
            {tag}
          </Tag>
        ))}
      </div>
      {!hitCountErrored && hitCount > 0 ? (
        <div className="flex stack-sm" style={{ marginTop: '3rem' }}>
          <svg
            className="stroke-primary"
            width="60"
            height="24"
            viewBox="0 0 60 24"
          >
            <path
              d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="12" cy="12" r="3" fill="none" />
            <text className="hit-count" x="30" y="18">
              {hitCount}
            </text>
          </svg>
        </div>
      ) : null}
      {displayMinimap ? (
        <ul className="flex flex-col stack-md" style={{ marginTop: '3rem' }}>
          {nodes.map(({ id, text }, i) => (
            <motion.li
              key={id}
              variants={minimapVariants}
              initial="invisible"
              animate="visible"
              custom={i}
            >
              <a
                href={`#${id}`}
                className="minimap-point flex items-baseline text-xl font-mono"
              >
                {text}
              </a>
            </motion.li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};

Meta.propTypes = {
  publishDate: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  slug: PropTypes.string.isRequired,
  displayMinimap: PropTypes.bool.isRequired
};

export default Meta;
