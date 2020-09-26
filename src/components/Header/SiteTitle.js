import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import rough from 'roughjs/bundled/rough.cjs';

const SiteTitle = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    let roughRectangleNode = null;
    let textNode = null;

    if (bg) {
      const rc = rough.svg(bgRef);
      roughRectangleNode = rc.rectangle(0, 0, 200, 55, {
        fill: '#000000',
        hachureAngle: 60, // angle of hachure,
        hachureGap: 1
      });

      bg.appendChild(roughRectangleNode);

      textNode = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      textNode.textContent = 'Parker Ziegler';
      textNode.setAttribute('x', '8');
      textNode.setAttribute('y', '36');
      textNode.setAttribute(
        'style',
        "font: 3rem 'Zilla Slab', serif; fill: #ffffff"
      );
      bg.appendChild(textNode);
    }

    return () => {
      bg.removeChild(roughRectangleNode);
      bg.removeChild(textNode);
    };
  }, []);

  return (
    <Link href="/">
      <a>
        <svg
          ref={bgRef}
          height="55"
          width="200"
          viewBox="0 0 200 55"
          className="fill-current text-white -ml-4"
        >
          <rect
            height="55"
            width="200"
            x="0"
            y="0"
            fill="transparent"
            aria-hidden="true"
            className="invisible"
          />
        </svg>
      </a>
    </Link>
  );
};

export default SiteTitle;
