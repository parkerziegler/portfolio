import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import rough from 'roughjs/bundled/rough.cjs';
import cs from 'classnames';

import { theme } from '../../../tailwind.config';

const { primary, white } = theme.extend.colors;

const Link = ({ href, onClick, isMobile = false, children }) => {
  const linkRef = useRef(null);
  const svgRef = useRef(null);
  const { pathname } = useRouter();

  useEffect(() => {
    const roughUnderline = svgRef;
    if (linkRef.current && svgRef.current) {
      const { width } = linkRef.current.getBoundingClientRect();
      roughUnderline.current.setAttribute('width', `${width}`);
      roughUnderline.current.setAttribute('viewBox', `0 0 ${width} 6`);

      const isRouteSelected = pathname.includes(href);

      if (isMobile) {
        if (isRouteSelected) {
          const rc = rough.svg(roughUnderline.current);
          roughUnderline.current.appendChild(
            rc.line(0, 3, width, 3, {
              stroke: white
            })
          );
        }
      } else {
        const rc = rough.svg(roughUnderline.current);
        roughUnderline.current.appendChild(
          rc.line(0, 3, width, 3, {
            stroke: isRouteSelected ? primary : white
          })
        );
      }
    }

    return () => {
      if (roughUnderline.current.hasChildNodes()) {
        roughUnderline.current.removeChild(roughUnderline.current.firstChild);
      }
    };
  }, [pathname, href, isMobile]);

  return (
    <>
      <NextLink href={href}>
        <a
          onClick={onClick}
          ref={linkRef}
          className={cs(
            'text-white p-2 text-5xl sm:text-4xl font-serif no-underline relative',
            {
              'sm:text-primary': pathname.includes(href)
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
  isMobile: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Link;
