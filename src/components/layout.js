import React from 'react';
import styled from 'styled-components';
import devices from '../styles/devices';


const OuterContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: url("sides.png");
    background-position: center -${props => props.bgOffset}px;
    
    @media ${devices.mobileL} {
        background-position: center -${props => props.bgOffset -100}px;
        background-size: 80%;
    }
    `;
    
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0;
    background: url("bg.png") no-repeat;
    background-position: center -${props => props.bgOffset}px;
    background-attachment: fixed;
`;

export default function Layout(props) {
    return (
        <OuterContainer
            bgOffset={props.bgOffset}>
            <Container
                bgOffset={props.bgOffset}>
                {props.children}
            </Container>
        </OuterContainer>
    )
}