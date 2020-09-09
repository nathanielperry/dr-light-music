import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Navbar from '../components/navbar';

const Container = styled.div`

`;

const BioContainer = styled.div`
    display: flex;
    margin: 5em auto;
    width: 80%;
    max-width: 600px;
    align-items: flex-start;
`;

const BioText = styled.div`
    width: 60%;
    max-width: 400px;
    padding-right: 20px;
`;

export default function About() {
    return (
        <Container>
            <Navbar></Navbar>
            <BioContainer>
                <BioText>
                    <p>A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (literally without tail in Ancient Greek). The oldest fossil "proto-frog" appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.</p>
                    <p>Frogs are widely distributed, ranging from the tropics to subarctic regions, but the greatest concentration of species diversity is in tropical rainforests. There are over 6,300 recorded species, accounting for around 88% of extant amphibian species. They are also one of the five most diverse vertebrate orders. Warty frog species tend to be called toads, but the distinction between frogs and toads is informal, not from taxonomy or evolutionary history.</p>
                </BioText>
                <img src="https://source.unsplash.com/random/200x225" />
            </BioContainer>
        </Container>
    )
}