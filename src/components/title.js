import React from 'react';
import styled from 'styled-components';
import devices from '../styles/devices';

const Container = styled.div`
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const TitleImage = styled.img`
    position: fixed;
    z-index: ${props => 30 + props.pos};

    @media ${devices.mobileL} {
        width: 90vw;
    }
`;

const TitleFader = styled(TitleImage)`
    animation: ${props => (Math.abs(props.pos - 4)) * 1.2}s ease-out 1.2s phaseIn forwards;

    @keyframes phaseIn {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
`;

export default function Title(props) {
    return (
        <Container>
            <TitleFader pos={3} src='title-black.png'></TitleFader>
            <TitleFader pos={2} src='title-white.png'></TitleFader>
            <TitleImage pos={1} src='title.png'></TitleImage>
        </Container>
    )
}