import React from 'react';

const Extension = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 60"
      className="flex-initial"
      preserveAspectRatio="none"
      height="60"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{
              stopColor: '#7b16ff',
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: '#ff9c0d',
            }}
          />
        </linearGradient>
      </defs>
      <g fill="url(#gradient)">
        <polygon points="0,0 100, 60, 100,0" />
      </g>
    </svg>
  );
};

export default Extension;
