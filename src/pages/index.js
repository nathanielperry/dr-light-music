import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import SEO from '../components/seo';
import Title from '../components/Title';

import devices from '../styles/devices';


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

const NavLi = styled(motion.li)``;

const StyledLink = styled(TransitionLink)`
  font-size: 1.5em;
  color: #efefef;
  text-decoration: none;

  &::before {
    content: '>';
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
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

const Home = () => {
  return (
    <>
      <SEO title='Dr. Light Music' />
      <Title />
      <MenuContainer>
        <StartMenu>
          <NavLi><StyledLink to="/about">Bio</StyledLink></NavLi>
          <NavLi><StyledLink to="/discography">Albums</StyledLink></NavLi>
        </StartMenu>
        <SocialMedia>
          <SocialMediaIcon><a href="https://www.pandora.com/artist/drlight/ARnmq3tb9gPlkJZ"><img src="/social1.png" alt="Pandora" /></a></SocialMediaIcon>
          <SocialMediaIcon><a href="https://soundcloud.com/drl16ht"><img src="/social2.png" alt="Soundcloud" /></a></SocialMediaIcon>
          <SocialMediaIcon><a href="https://www.facebook.com/DrL16hT"><img src="/social3.png" alt="Facebook" /></a></SocialMediaIcon>
          <SocialMediaIcon><a href="https://open.spotify.com/artist/5kajdsPmWCrCiAAlOs1Uzh"><img src="/social4.png" alt="Spotify" /></a></SocialMediaIcon>
          <SocialMediaIcon><a href="https://music.apple.com/us/artist/dr-light/526451109"><img src="/social5.png" alt="Apple Music" /></a></SocialMediaIcon>
          <SocialMediaIcon><a href="https://music.youtube.com/channel/UCK_OqjYpv8hG_EA-xiR7c7w"><img src="/social6.png" alt="Youtube Music" /></a></SocialMediaIcon>
        </SocialMedia>
      </MenuContainer>
    </>
  )
}

export default Home;