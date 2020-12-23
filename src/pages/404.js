import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

import devices from '../styles/devices';

//Silkscreen font by Jason Kottke
//License: https://www.fontsquirrel.com/license/Silkscreen

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  padding: 100px 0 0;
  margin: 0;

  @media ${devices.mobileM} {
    img {
      width: 90vw;
    }
  }
`;

export default function FourOhFour() {
  return (
    <Layout bgOffset={960}>
      <Title><img src="title.png" alt="dr. light" /></Title>
      <p>This page does not exist.</p>  
    </Layout>
  )
}
