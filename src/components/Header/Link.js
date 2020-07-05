import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import rough from 'roughjs/bundled/rough.cjs';

const Link = ({ href, children }) => {
  const linkRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    if (linkRef.current && svgRef.current) {
      const width = linkRef.current.offsetWidth;
      svgRef.current.setAttribute('width', `${width}`);
      svgRef.current.setAttribute('viewBox', `0 0 ${width} 6`);

      const rc = rough.svg(svgRef.current);
      svgRef.current.appendChild(
        rc.line(0, 3, width, 3, { stroke: '#ffffff' })
      );
    }
  }, []);

  return (
    <li>
      <NextLink href={href}>
        <a
          ref={linkRef}
          className="text-white p-2 text-5xl sm:text-4xl font-serif no-underline relative"
        >
          {children}
        </a>
      </NextLink>
      <svg ref={svgRef} height="6"></svg>
    </li>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
