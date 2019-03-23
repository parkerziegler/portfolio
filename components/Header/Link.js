import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const pseudo = css`
  content: '';
  position: absolute;
  border: 2px solid transparent;
  width: 0px;
  height: 0px;
  box-sizing: border-box;
`;

const pseudoHover = css`
  width: 100%;
  height: 100%;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  text-decoration: none;
  position: relative;
  transition: color 750ms ease-out;

  &::before {
    ${pseudo};
    top: 0;
    left: 0;
  }

  &::after {
    ${pseudo};
    bottom: 0;
    right: 0;
  }

  &:hover {
    color: ${({ color }) => color};
    cursor: pointer;

    &::before {
      ${pseudoHover};
      border-top-color: ${({ color }) => color};
      border-right-color: ${({ color }) => color};
      transition: width 200ms ease-out, height 200ms ease-out 200ms;
    }

    &::after {
      ${pseudoHover};
      border-bottom-color: ${({ color }) => color};
      border-left-color: ${({ color }) => color};
      transition: border-color 0s ease-out 400ms, width 200ms ease-out 400ms,
        height 200ms ease-out 600ms;
    }
  }
`;

const Link = ({ href, color, children }) => (
  <NextLink href={href}>
    <StyledLink color={color}>{children}</StyledLink>
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
