import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SocialIcon = ({ href, path, alt }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center w-40"
    whileHover={{
      scale: 1.05
    }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20
    }}
  >
    <img src={path} alt={alt} className="h-20" />
  </motion.a>
);

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default SocialIcon;
