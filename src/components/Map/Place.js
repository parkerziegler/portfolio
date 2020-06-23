import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Place = ({ cx, cy, x, y, label, i, pathLength }) => {
  const placeRef = React.useRef(null);
  const width = placeRef.current
    ? placeRef.current.getComputedTextLength() + 10
    : 0;

  return (
    <g key={label}>
      <motion.rect
        className="fill-white"
        x={x - 5}
        y={y - 15}
        rx="5"
        width={width}
        height={20}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: pathLength * 0.05 + i * 0.5 }
        }}
      />
      <motion.text
        className="fill-purple font-sans text-2xl"
        x={x}
        y={y}
        ref={placeRef}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: pathLength * 0.05 + i * 0.5 }
        }}
      >
        {label}
      </motion.text>
      <motion.circle
        className="fill-purple stroke-purple stroke-2"
        cx={cx}
        cy={cy}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: pathLength * 0.05 + i * 0.5 }
        }}
        r="5"
      />
      <motion.circle
        className="stroke-purple stroke-2 fill-white pulse"
        cx={cx}
        cy={cy}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: pathLength * 0.05 + i * 0.5 }
        }}
        style={{
          transformOrigin: `${cx}px ${cy}px`
        }}
        r="5"
      />
    </g>
  );
};

Place.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  pathLength: PropTypes.number.isRequired
};

export default Place;
