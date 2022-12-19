import * as React from 'react';
import { motion } from 'framer-motion';

import { transitionRelaxed } from '../../utils/animation';

interface Props {
  href: string;
  path: string;
  alt: string;
}

const SocialIcon: React.FC<Props> = ({ href, path, alt }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center"
    whileHover={{
      scale: 1.1
    }}
    transition={transitionRelaxed}
  >
    <img
      src={path}
      alt={alt}
      className="h-16 w-16 md:h-20 md:w-20"
      height="20"
      width="20"
    />
  </motion.a>
);

export default SocialIcon;
