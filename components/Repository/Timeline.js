import React from 'react';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

import theme from '../../styles/Theme';
import Card from './Card';

const StyledTimeline = styled.div`
  margin: 0 -8rem;
  width: calc(100% + 16rem);
`;

const lineConfig = {
  x: 600,
  from: { x: 0 },
  config: {
    friction: 50
  }
};

const circleConfig = {
  opacity: 1,
  from: { opacity: 0 }
};

const Timeline = () => {
  const { x: purpleX } = useSpring(lineConfig);
  const { x: orangeX } = useSpring({
    ...lineConfig,
    delay: 500
  });
  const { opacity: one } = useSpring({ ...circleConfig, delay: 100 });
  const { opacity: two } = useSpring({ ...circleConfig, delay: 500 });
  const { opacity: three } = useSpring({ ...circleConfig, delay: 800 });

  return (
    <StyledTimeline>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150">
        <animated.line
          x1="0"
          y1="11"
          x2={purpleX}
          y2="11"
          stroke={theme.colors.purple}
          strokeWidth="0.2rem"
        />
        <animated.line
          x1="0"
          y1="14"
          x2={orangeX}
          y2="14"
          stroke={theme.colors.orange}
          strokeWidth="0.2rem"
        />
        <animated.circle
          cx="100"
          cy="12.5"
          r="0.5rem"
          stroke={theme.colors.teal}
          fill={theme.colors.white}
          strokeOpacity={one}
          fillOpacity={one}
        />
        <animated.circle
          cx="300"
          cy="12.5"
          r="0.5rem"
          stroke={theme.colors.teal}
          fill={theme.colors.white}
          strokeOpacity={two}
          fillOpacity={two}
        />
        <animated.circle
          cx="500"
          cy="12.5"
          r="0.5rem"
          stroke={theme.colors.teal}
          fill={theme.colors.white}
          strokeOpacity={three}
          fillOpacity={three}
        />
        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <Card
          x="37.5"
          y="30"
          width="125"
          height="80"
          rx="10"
          ry="10"
          filter="url(#dropshadow)"
        />
        <Card
          x="237.5"
          y="30"
          width="125"
          height="80"
          rx="10"
          ry="10"
          filter="url(#dropshadow)"
        />
        <Card
          x="437.5"
          y="30"
          width="125"
          height="80"
          rx="10"
          ry="10"
          filter="url(#dropshadow)"
        />
      </svg>
    </StyledTimeline>
  );
};

export default Timeline;
