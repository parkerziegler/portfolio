import styled from '@emotion/styled';
import { animated } from 'react-spring';

const Card = styled(animated.rect)`
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.teal};
`;

export default Card;
