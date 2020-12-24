import React from 'react';
import styled from 'styled-components';
import devices from '../styles/devices';


const OuterContainer = styled.div`
    width: 100%;
    background: url("/sides.png");
    background-position: center -${props => props.bgOffset}px;
    background-attachment: fixed;
    
    @media ${devices.mobileL} {
        background-position: center -${props => props.bgOffset -100}px;
        background-size: 80%;
    }
`;
    
    const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding-bottom: 50px;
    box-sizing: border-box;
    background: url("/images/bg.png") no-repeat;
    background-position: center -${props => props.bgOffset}px;
    background-attachment: fixed;

    @media ${devices.mobileL} {
        padding-bottom: 0;
    }
`;

export default function Layout({ bgOffset, children }) {
    return (
        <OuterContainer
            bgOffset={bgOffset}>
            <Container
                bgOffset={bgOffset}>
                {children}
            </Container>
        </OuterContainer>
    )
}
