import React from 'react';                   
import styled from 'styled-components';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SEO from '../components/seo';

import devices from '../styles/devices';
import AlbumsContainer from '../components/AlbumsContainer';

const TvSupports = styled.div`
    height: 288px;
    margin: auto;
    background: url("tv.png") 50% no-repeat;

    @media ${devices.mobileL} {
        height: 100px;
        width: 425px;
        background-position: 85% 80%;
    }
`;

export default function Discography(props) {
    return (
        <>
            <SEO title='Dr. Light Music | Discography' />
            <Navbar></Navbar>
            <Layout bgOffset={2880}>
                <TvSupports />
                <AlbumsContainer />
            </Layout>
        </>
    )
}