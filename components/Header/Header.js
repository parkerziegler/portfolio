import React from 'react';
import styled from '@emotion/styled';

import theme from '../../styles/Theme';
import Nav from './Nav';
import SiteTitle from './SiteTitle';
import Link from './Link';
import Extension from './Extension';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 auto;
  height: 8rem;
  padding: 2rem 8rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  background-image: ${(props) =>
    `linear-gradient(0.25turn, ${props.theme.colors.purple}, ${
      props.theme.colors.orange
    })`};
`;

const Header = () => (
  <StyledContainer>
    <StyledHeader>
      <SiteTitle>Parker Ziegler</SiteTitle>
      <Nav>
        <Link color={theme.colors.purple} href="/code">
          Code
        </Link>
        <Link color={theme.colors.blue} href="/maps">
          Maps
        </Link>
        <Link color={theme.colors.teal} href="/thoughts">
          Thoughts
        </Link>
      </Nav>
    </StyledHeader>
    <Extension stops={[theme.colors.purple, theme.colors.orange]} />
  </StyledContainer>
);

export default Header;
