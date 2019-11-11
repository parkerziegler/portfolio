import styled from '@emotion/styled';
import { mq } from '../../styles/Theme';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
  margin: 1rem;

  ${mq[2]} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  ${mq[1]} {
    grid-template-columns: 1fr;
  }

  ${mq[0]} {
    grid-template-columns: 1fr;
  }
`;

export default CardGrid;
