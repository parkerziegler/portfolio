import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import cs from 'classnames';

import { transitionRelaxed } from '../../utils/animation';

interface Props {
  src: string;
  alt: string;
  href: string;
  variant: 'sm' | 'lg';
}

const SocialIcon: React.FC<Props> = ({ src, alt, href, variant }) => (
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
    <Image
      src={src}
      alt={alt}
      className={cs({
        'h-8 w-8': variant === 'sm',
        'h-16 w-16': variant === 'lg'
      })}
      height={variant === 'sm' ? 20 : 40}
      width={variant === 'sm' ? 20 : 40}
    />
  </motion.a>
);

export default SocialIcon;
