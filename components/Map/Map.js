/* eslint-disable no-magic-numbers */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/core';
import { animated, useSprings } from 'react-spring';

const State = styled(animated.path)`
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.black};
  stroke-width: 0.1rem;
`;

const pulse = keyframes`
  from {
    stroke-width: 0.5rem;
    stroke-opacity: 1;
    transform: scale(0.3);
  }

  to {
    stroke-width: 0;
    stroke-opacity: 0;
    transform: scale(3);
  }
`;

const PlaceLabel = styled(animated.text)`
  fill: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 1.6rem;
`;

const PlaceBacking = styled(animated.rect)`
  fill: ${({ theme }) => theme.colors.white};
`;

const Place = styled(animated.circle)`
  fill: ${({ theme }) => theme.colors.purple};
  stroke: ${({ theme }) => theme.colors.purple};
  stroke-width: 0.2rem;
  stroke-opacity: 1;
`;

const PulsingPlace = styled(animated.circle)`
  stroke: ${({ theme }) => theme.colors.purple};
  stroke-width: 0.2rem;
  stroke-opacity: 1;
  fill: white;
  fill-opacity: 0;
  animation-duration: 2s;
  animation-name: ${pulse};
  animation-iteration-count: infinite;
  animation-delay: 500ms;
`;

const places = [
  { label: 'Now – Seattle, WA', cx: 100, cy: 40, x: 100, y: 10 },
  {
    label: 'Birthplace – Salt Lake City, UT',
    cx: 225,
    cy: 235,
    x: 230,
    y: 205
  },
  { label: 'School – Middlebury, VT', cx: 855, cy: 130, x: 720, y: 100 },
  { label: 'Home – Northampton, MA', cx: 870, cy: 170, x: 760, y: 210 }
];

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
    paths
      .concat(places)
      .map((_, i) => ({ opacity: 1, from: { opacity: 0 }, delay: i * 50 }))
  );

  const placeSprings = useSprings(
    places.length,
    places.map((_, i) => ({
      opacity: 1,
      from: { opacity: 0 },
      delay: (paths.length || 51) * 50 + i * 500
    }))
  );

  const seattleRef = useRef(null);
  const slcRef = useRef(null);
  const middRef = useRef(null);
  const nohoRef = useRef(null);

  const deriveRef = useCallback(
    (i) => {
      switch (i) {
        case 0:
          return seattleRef;
        case 1:
          return slcRef;
        case 2:
          return middRef;
        case 3:
          return nohoRef;
        default:
          return seattleRef;
      }
    },
    [seattleRef, slcRef, middRef, nohoRef]
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 960 600"
      height="500"
      width="600"
    >
      {paths.map(({ d, id }, i) => (
        <State d={d} key={id} style={springs[i]} />
      ))}
      {places.map(({ cx, cy, label, x, y }, i) => {
        const ref = deriveRef(i);
        const width = ref.current
          ? ref.current.getComputedTextLength() + 10
          : 0;

        return (
          <g key={label}>
            <PlaceBacking
              x={x - 5}
              y={y - 15}
              rx="5"
              width={width}
              height={20}
              style={placeSprings[i]}
            />
            <PlaceLabel x={x} y={y} ref={ref} style={placeSprings[i]}>
              {label}
            </PlaceLabel>
            <Place cx={cx} cy={cy} style={placeSprings[i]} r="5" />
            <PulsingPlace
              cx={cx}
              cy={cy}
              style={placeSprings[i]}
              r="5"
              css={css`
                transform-origin: ${cx}px ${cy}px;
              `}
            />
          </g>
        );
      })}
    </svg>
  );
};

export default Map;
