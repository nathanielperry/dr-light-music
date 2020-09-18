import React from 'react';
import styled from 'styled-components';
import { TransitionPortal } from "gatsby-plugin-transition-link";

export default function Layout(props) {
    const OuterContainer = styled.div`
        width: 100%;
        height: 100vh;
        max-height: 960px;
        background: url("sides.png") center -${props.bgOffset}px;
    `;
    
    const Container = styled.div`
        margin: 0;
        background: url("bg.png") center -${props.bgOffset}px no-repeat;
        width: 100%;
        height 100vh;
        max-height: 960px;
        overflow: hidden;
    `;

    return (
        <OuterContainer>
            <Container> 
                {props.children}
            </Container>
        </OuterContainer>
    )
}