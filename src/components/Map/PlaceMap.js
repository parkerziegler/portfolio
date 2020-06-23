/* eslint-disable no-magic-numbers */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import { motion } from 'framer-motion';

import Place from './Place';
import { places } from './places';

const variants = {
  visible: (i) => {
    return {
      opacity: 1,
      transition: { delay: i * 0.05 },
    };
  },
  hidden: {
    opacity: 0,
  },
};

const Map = () => {
  const mapRef = useRef(null);
  const [paths, setPaths] = useState([]);

  const fetchUSJson = useCallback(async () => {
    const path = d3.geoPath();

    try {
      const us = await d3.json('https://d3js.org/us-10m.v1.json');
      const states = topojson.feature(us, us.objects.states).features;
      const geoPaths = states.map((feature) => ({
        id: feature.id,
        d: path(feature),
        centroid: path.centroid(feature)[0],
      }));

      setPaths(geoPaths.sort((a, b) => a.centroid - b.centroid));
    } catch (error) {
      throw new Error('Error fetching US 10m JSON.', error);
    }
  }, []);

  useEffect(() => {
    fetchUSJson();
  }, [fetchUSJson]);

  return (
    <div className="w-full max-w-5xl min-w-lg mt-8" id="map-main">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 960 600"
        ref={mapRef}
      >
        {paths.map(({ d, id }, i) => {
          return (
            <motion.path
              className="fill-transparent stroke-black stroke-1"
              d={d}
              key={id}
              animate="visible"
              custom={i}
              initial="hidden"
              variants={variants}
            />
          );
        })}
        {places.map((place, i) => {
          return (
            <Place
              key={`place_${i}`}
              {...place}
              i={i}
              pathLength={paths.length || 51}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Map;
