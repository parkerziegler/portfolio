import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import rough from 'roughjs/bundled/rough.cjs';

const Link = ({ href, children }) => {
  const linkRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    if (linkRef?.current && underlineRef?.current) {
      const width = linkRef.current.offsetWidth;
      underlineRef.current.setAttribute('width', `${width}`);
      underlineRef.current.setAttribute('viewBox', `0 0 ${width} 6`);

      const rc = rough.svg(underlineRef.current);
      underlineRef.current.appendChild(
        rc.line(0, 3, width, 3, { stroke: '#7b16ff' })
      );
    }
  }, []);

  return (
    <>
      <NextLink href={href}>
        <a
          ref={linkRef}
          className="link text-white p-2 text-3xl font-serif no-underline relative"
        >
          {children}
        </a>
      </NextLink>
      <svg ref={underlineRef} height="6" />
    </>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
