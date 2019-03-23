import styled from '@emotion/styled';

const SiteTitle = styled.h1`
  background-color: #000;
  margin: 0;
  color: #fff;
  font-size: 2.6rem;
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme.fonts.sans};
`;

export default SiteTitle;
