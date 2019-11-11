import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const CardGradient = styled.div`
  background-image: ${(props) =>
    `linear-gradient(0.25turn, ${props.theme.colors.purple}, ${
      props.theme.colors.orange
    })`};
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 0.5rem;
  display: flex;
  margin: auto;
  font-family: ${({ theme }) => theme.fonts.mono};
  height: 100%;
  width: 100%;
`;

const CardGradientBlock = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  overflow: auto;
  flex: 1;
`;

const RepoName = styled.a`
  text-decoration: underline;
  font-size: 1.6rem;
  display: block;
  margin-bottom: 0.5rem;
`;

const PRTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
`;

const Card = ({ nameWithOwner, url, title }) => (
  <CardGradient>
    <CardGradientBlock>
      <RepoName href={url} target="_blank" rel="noopener noreferrer">
        {nameWithOwner}
      </RepoName>
      <PRTitle>{title}</PRTitle>
    </CardGradientBlock>
  </CardGradient>
);

Card.propTypes = {
  nameWithOwner: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Card;
