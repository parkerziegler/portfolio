import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import rough from 'roughjs/bundled/rough.cjs';
import cs from 'classnames';

import tailwind from '../../../tailwind.config';

const Link = ({ href, onClick, children }) => {
  const linkRef = useRef(null);
  const svgRef = useRef(null);
  const { pathname } = useRouter();

  useEffect(() => {
    if (linkRef.current && svgRef.current) {
      if (svgRef.current.hasChildNodes()) {
        svgRef.current.removeChild(svgRef.current.firstChild);
      }

      const width = linkRef.current.offsetWidth;
      svgRef.current.setAttribute('width', `${width}`);
      svgRef.current.setAttribute('viewBox', `0 0 ${width} 6`);

      const rc = rough.svg(svgRef.current);
      svgRef.current.appendChild(
        rc.line(0, 3, width, 3, {
          stroke: pathname.includes(href)
            ? tailwind.theme.extend.colors.purple
            : tailwind.theme.extend.colors.white
        })
      );
    }
  }, [pathname, href]);

  return (
    <>
      <NextLink href={href}>
        <a
          onClick={onClick}
          ref={linkRef}
          className={cs(
            'text-white p-2 text-5xl sm:text-4xl font-serif no-underline relative',
            {
              'sm:text-purple': pathname.includes(href)
            }
          )}
        >
          {children}
        </a>
      </NextLink>
      <svg ref={svgRef} height="6"></svg>
    </>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Link;
