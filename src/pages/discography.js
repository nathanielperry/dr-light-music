import React from 'react';                   
import styled from 'styled-components';
import Layout from '../components/layout';
import Navbar from '../components/navbar';

import devices from '../styles/devices';
import AlbumsContainer from '../components/AlbumsContainer';

const TvSupports = styled.div`
    height: 288px;
    background: url("tv.png") 50% -192px no-repeat;
`;

export default function Discography(props) {
    return (
        <div>
            <Navbar></Navbar>
            <Layout bgOffset={2880}>
                <TvSupports />
                <AlbumsContainer />
            </Layout>
        </div>
    )
}