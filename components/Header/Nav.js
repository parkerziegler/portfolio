import styled from '@emotion/styled';

import { mq } from '../../styles/Theme';

const Nav = styled.nav`
  display: flex;
  align-items: center;

  ${mq[0]} {
    margin-top: 1rem;
  }

  ${mq[1]} {
    margin-top: 1rem;
  }
`;

export default Nav;
