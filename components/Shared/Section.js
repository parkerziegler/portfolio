import styled from '@emotion/styled';

import { mq } from '../../styles/Theme';

const Section = styled.section`
  display: flex;
  padding: 4rem 8rem;
  flex-direction: column;

  ${mq[0]} {
    padding: 4rem;
  }
`;

export default Section;
