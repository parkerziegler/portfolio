import * as React from 'react';
import * as d3 from 'd3';
import { feature } from 'topojson';
import { motion } from 'framer-motion';

import Place from './Place';
import { places } from './places';

const variants = {
  visible: (i: number) => {
    return {
      opacity: 1,
      transition: { delay: i * 0.05 }
    };
  },
  hidden: {
    opacity: 0
  }
};

const PlaceMap: React.FC = () => {
  const mapRef = React.useRef<SVGSVGElement>(null);
  const [paths, setPaths] = React.useState([]);

  const fetchUSJson = React.useCallback(async () => {
    const path = d3.geoPath();

    try {
      const us = await d3.json('https://d3js.org/us-10m.v1.json');
      const states = feature(us, us.objects.states).features;
      const geoPaths = states.map((feature) => ({
        id: feature.id,
        d: path(feature),
        centroid: path.centroid(feature)[0]
      }));

      setPaths(geoPaths.sort((a, b) => a.centroid - b.centroid));
    } catch (error) {
      throw new Error('Error fetching US 10m JSON.', error);
    }
  }, []);

  React.useEffect(() => {
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

export default PlaceMap;
