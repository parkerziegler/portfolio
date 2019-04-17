import React from 'react';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

import theme from '../../styles/Theme';
import Card from './Card';

const StyledTimeline = styled.div`
  margin: 0 -8rem;
  width: calc(100% + 16rem);
`;

const offsetConfig = {
  offset: 0,
  from: { offset: 600 },
  config: {
    friction: 50,
    duration: 1000
  }
};

const Timeline = () => {
  const { offset: purpleOffset } = useSpring(offsetConfig);
  const { offset: orangeOffset } = useSpring({
    ...offsetConfig,
    delay: 500
  });

  return (
    <StyledTimeline>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 150">
        <animated.path
          d="M 0,11 h 95 q 5,-6.5 10,0 h 190 q 5,-6.5 10 0 h 190 q 5,-6.5 10,0 h 100"
          stroke={theme.colors.purple}
          strokeWidth="0.15rem"
          fill="transparent"
          strokeDasharray={700}
          strokeDashoffset={purpleOffset}
        />
        <animated.path
          d="M 0,14 h 95 q 5,6.5 10,0 h 190 q 5,6.5 10 0 h 190 q 5,6.5 10,0 h 100"
          stroke={theme.colors.orange}
          strokeWidth="0.15rem"
          fill="transparent"
          strokeDasharray={700}
          strokeDashoffset={orangeOffset}
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
