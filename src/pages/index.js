import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import styled from 'styled-components';
import Layout from '../components/layout';

import devices from '../styles/devices';

import Title from '../components/title';

//Silkscreen font by Jason Kottke
//License: https://www.fontsquirrel.com/license/Silkscreen

const StartMenu = styled.ul`
  list-style: none;
  padding: 0;
  
  @media ${devices.mobileL} {
    margin-top: 0;
  }
`;
  
const SocialMedia = styled.ul`
  width: 200px;
  height: 150px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  list-style: none;
  padding: 0;

  @media ${devices.mobileL} {
    margin-top: 0;
  }
`;

const SocialMediaIcon = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(TransitionLink)`
  font-size: 1.5em;
  color: #efefef;
  text-decoration: none;
`;

const MenuContainer = styled.div`
  width: 400px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devices.mobileL} {
    width: 320px;
    flex-direction: column;
  }
`;

export default function Home() {
  return (
    <Layout bgOffset={960}>
      <Title />
      <MenuContainer>
        <StartMenu>
          <li><StyledLink to="/about">Bio</StyledLink></li>
          <li><StyledLink to="/discography">Albums</StyledLink></li>
        </StartMenu>
        <SocialMedia>
          <SocialMediaIcon><img src="social1.png" alt="Twitter"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="social2.png" alt="Soundcloud"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="social3.png" alt="Facebook"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="social4.png" alt="Spotify"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="social5.png" alt="Apple Music"></img></SocialMediaIcon>
          <SocialMediaIcon><img src="social6.png" alt="Youtube Music"></img></SocialMediaIcon>
        </SocialMedia>
      </MenuContainer>
    </Layout>
  )
}
