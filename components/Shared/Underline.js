import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const highlight = keyframes`
  from {
    background-size: 0% 10%
  }

  to {
    background-size: 100% 10%;
  }
`;

const Underline = styled.span`
  background-image: ${({ theme }) =>
    `linear-gradient(120deg, ${theme.colors.pink}, ${theme.colors.yellow})`};
  font-family: ${({ theme }) => theme.fonts.serif};
  background-repeat: no-repeat;
  background-position: 0% 85%;
  background-size: 100% 10%;
  animation-duration: 1s;
  animation-delay: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: both;
  animation-name: ${highlight};
  margin: 0;
`;

export default Underline;
