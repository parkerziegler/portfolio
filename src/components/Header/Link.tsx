import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import rough from 'roughjs/bundled/rough.cjs';
import cs from 'classnames';

import { theme } from '../../../tailwind.config';

const { secondary, white } = theme.extend.colors;

interface Props {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  isMobile?: boolean;
}

const Link: React.FC<React.PropsWithChildren<Props>> = ({
  href,
  onClick,
  isMobile = false,
  children
}) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  const svgRef = React.useRef<SVGSVGElement>(null);
  const { pathname } = useRouter();

  React.useEffect(() => {
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
            stroke: isRouteSelected ? secondary : white
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
      <NextLink
        href={href}
        onClick={onClick}
        ref={linkRef}
        className={cs(
          'text-white p-2 text-5xl sm:text-4xl font-serif no-underline relative',
          {
            'font-semibold': pathname.includes(href)
          }
        )}
      >
        {children}
      </NextLink>
      <svg ref={svgRef} height="6"></svg>
    </>
  );
};

export default Link;
