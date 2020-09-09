import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
`;

const StartMenu = styled.ul`
  list-style: none;
`;
  
const SocialMedia = styled.ul`
  width: 150px;
  height: 150px;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  list-style: none;
`;

const SocialMediaIcon = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 1.5em;
  color: #efefef;
  text-decoration: none;
`;

const Container = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Home() {
  return (
    <div>
      <Title>Dr. Light</Title>
      <Container>
        <StartMenu>
          <li><StyledLink to="/about">Bio</StyledLink></li>
          <li><StyledLink to="/discography">Albums</StyledLink></li>
        </StartMenu>
        <SocialMedia>
          <SocialMediaIcon><img src="https://source.unsplash.com/random/35x35"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="https://source.unsplash.com/random/35x35"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="https://source.unsplash.com/random/35x35"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="https://source.unsplash.com/random/35x35"></img></SocialMediaIcon>
        </SocialMedia>
      </Container>
    </div>
  )
}
