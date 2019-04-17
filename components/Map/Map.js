import React, { useEffect, useState, useCallback } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import styled from '@emotion/styled';
import { animated, useSprings } from 'react-spring';

const State = styled(animated.path)`
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.black};
  stroke-width: 0.1rem;
`;

const Map = () => {
  const [paths, setPaths] = useState([]);

  const fetchUSJson = useCallback(async () => {
    const path = d3.geoPath();

    try {
      const us = await d3.json('https://d3js.org/us-10m.v1.json');
      const states = topojson.feature(us, us.objects.states).features;
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

  useEffect(() => {
    fetchUSJson();
  }, []);

  const springs = useSprings(
    paths.length,
    // eslint-disable-next-line no-magic-numbers
    paths.map((_, i) => ({ opacity: 1, from: { opacity: 0 }, delay: i * 50 }))
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 960 600"
      height="600"
      width="600"
    >
      {paths.map(({ d, id }, i) => (
        <State d={d} key={id} style={springs[i]} />
      ))}
    </svg>
  );
};

export default Map;
