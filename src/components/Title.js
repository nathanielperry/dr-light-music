import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import devices from '../styles/devices';

const Container = styled.div`
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const TitleImage = styled(motion.img)`
    position: fixed;
    filter: saturate(0) brightness(0);
    animation: phaseIn 5s 2s linear forwards;

    @media ${devices.mobileL} {
        width: 90vw;
    }

    @keyframes phaseIn {
        0% {
            filter: contrast(0) saturate(0) brightness(0);
        }

        50% {
            filter: contrast(0) saturate(0) brightness(200%);
        }
        
        100% {
            filter: none;
        }
    }
`;

export default function Title(props) {
    return (
        <Container>
            <TitleImage 
                src='/title.png'/>
        </Container>
    )
}
