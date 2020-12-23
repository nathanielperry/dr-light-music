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
                        <p>A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (literally without tail in Ancient Greek). The oldest fossil "proto-frog" appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.</p>
                        <p>Frogs are widely distributed, ranging from the tropics to subarctic regions, but the greatest concentration of species diversity is in tropical rainforests. There are over 6,300 recorded species, accounting for around 88% of extant amphibian species. They are also one of the five most diverse vertebrate orders. Warty frog species tend to be called toads, but the distinction between frogs and toads is informal, not from taxonomy or evolutionary history.</p>
                    </BioText>
                </BioContainer>
            </Container>
        </Layout>
    )
}