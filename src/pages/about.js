import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SEO from '../components/seo';

import devices from '../styles/devices';

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`;

const BioContainer = styled.div`
    display: flex;
    padding: 8em 0;
    margin: auto;
    width: 80%;
    max-width: 600px;
    align-items: flex-start;
    flex-direction: row-reverse;

    @media ${devices.mobileL} {
        display: block;
    }
`;

const BioText = styled.div`
    width: 60%;
    max-width: 400px;
    padding-right: 20px;

    p:nth-child(1) {
        margin-top: 0;
    }

    @media ${devices.mobileL} {
        width: 100%;

        p:nth-child(1) {
            margin-top: 20px;
        }
    }
`;

const ProfileImage = styled.img`
    min-width: 225px;
    @media ${devices.mobileL} {
        width: 100%;
    }
`;

export default function About() {
    return (
        <Layout bgOffset={0}>
            <SEO title='Dr. Light Music | Bio' />
            <Navbar></Navbar>
            <Container>
                <BioContainer>
                    <ProfileImage src="https://source.unsplash.com/random/200x225" alt="Bearded Man" />
                    <BioText>
                        <p>The illustrious Drlight began teaching himself how to make music from childhood and has never stopped. Early on it was, his father's singing in a successful band, and large record collection that got him started, as did the music  from his video games. Attending and playing at different rave parties in the 1990's, launched DrLight into the direction of the music style known at the time as IDM. The raw, pretty melodies he chooses compliment the aggressive beats and samples he composes.</p>
                        <p>"I aim to make masterpieces."</p>
                    </BioText>
                </BioContainer>
            </Container>
        </Layout>
    )
}