import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import rough from 'roughjs/bundled/rough.cjs';
import cn from 'classnames';

import { theme } from '../../../tailwind.config';

const UnderlineLight = (
  <defs>
    <linearGradient id="underline-light">
      <stop offset="0%" stopColor="#fffa17" />
      <stop offset="100%" stopColor={theme.extend.colors.secondary} />
    </linearGradient>
  </defs>
);

const UnderlineDark = (
  <defs>
    <linearGradient id="underline-dark">
      <stop offset="0%" stopColor={theme.extend.colors.primary} />
      <stop
        offset="100%"
        stopColor={theme.extend.colors['terminal-secondary']}
      />
    </linearGradient>
  </defs>
);

const SectionHeader = ({
  centered = false,
  type = 'dark',
  className,
  children
}) => {
  const headingRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (headingRef.current && svg) {
      const width = headingRef.current.offsetWidth;
      svg.setAttribute('width', width);
      svg.setAttribute('viewBox', `0 0 ${width} 10`);

      const rc = rough.svg(svg);
      svg.appendChild(
        rc.rectangle(0, 0, width, 10, {
          fill: `url(#underline-${type})`,
          stroke: 'none',
          fillWeight: 1
        })
      );
    }
  }, [type]);

  return (
    <h2
      className={cn([
        'font-serif text-6xl m-0',
        centered && 'text-center flex flex-col items-center ',
        className
      ])}
    >
      <span ref={headingRef}>{children}</span>
      <svg
        ref={svgRef}
        height="10"
        strokeOpacity={type === 'dark' ? '0.5' : '1'}
      >
        {type === 'dark' ? UnderlineDark : UnderlineLight}
      </svg>
    </h2>
  );
};

SectionHeader.propTypes = {
  centered: PropTypes.bool,
  type: PropTypes.oneOf(['dark', 'light']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default SectionHeader;
