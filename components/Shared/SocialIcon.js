import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  width: 10rem;
`;

const StyledIcon = styled.img`
  height: ${({ height }) => `${height || '10rem'}`};
`;

const SocialIcon = ({ href, path, height }) => (
  <StyledLink href={href} target="_blank" rel="noopener noreferrer">
    <StyledIcon src={path} height={height} />
  </StyledLink>
);

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default SocialIcon;
