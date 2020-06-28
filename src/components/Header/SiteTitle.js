import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import rough from 'roughjs/bundled/rough.cjs';

const SiteTitle = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    if (bgRef?.current) {
      const rc = rough.svg(bgRef);
      bgRef.current.appendChild(
        rc.rectangle(0, 0, 200, 55, {
          fill: '#000000',
          hachureAngle: 60, // angle of hachure,
          hachureGap: 1
        })
      );

      const text = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'text'
      );
      text.textContent = 'Parker Ziegler';
      text.setAttribute('x', '8');
      text.setAttribute('y', '36');
      text.setAttribute(
        'style',
        "font: 3rem 'Zilla Slab', serif; fill: #ffffff"
      );
      bgRef.current.appendChild(text);
    }
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
        ></svg>
      </a>
    </Link>
  );
};

export default SiteTitle;
