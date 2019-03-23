import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledSvg = styled.svg`
  flex: 0 1 5rem;
`;

const Extension = ({ stops }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{
            stopColor: stops[0]
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: stops[1]
          }}
        />
      </linearGradient>
    </defs>
    <g fill="url(#gradient)">
      {' '}
      <polygon points="0,0 100, 80, 100,0" />{' '}
    </g>
  </StyledSvg>
);

Extension.propTypes = {
  stops: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Extension;
