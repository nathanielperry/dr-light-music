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
  width: 200px;
  height: 150px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
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
          <SocialMediaIcon><img src="twitter.png"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="facebook.png"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="soundcloud.png"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="spotify.png"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="apple.png"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="google.png"></img></SocialMediaIcon>
        </SocialMedia>
      </Container>
    </div>
  )
}
