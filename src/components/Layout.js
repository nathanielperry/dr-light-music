import React from 'react';
import styled from 'styled-components';
import devices from '../styles/devices';
import { AnimatePresence } from 'framer-motion';

import Navbar from '../components/Navbar';
import FadeWrapper from '../components/FadeWrapper';

const SCROLL_TIME = 1.6;

const OuterContainer = styled.div`
    width: 100%;
    background: url("/sides.png");
    background-position: center -${props => props.scroll}px;
    background-attachment: fixed;
    
    @media ${devices.mobileL} {
        background-position: center -${props => props.scroll -100}px;
        background-size: 80%;
    }

    transition: background-position ${SCROLL_TIME}s ease-in-out;
`;
    
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0;
    box-sizing: border-box;
    background: url("/images/bg.png") no-repeat;
    background-position: center -${props => props.scroll}px;
    background-attachment: fixed;

    @media ${devices.mobileL} {
        background-position: center -${props => props.scroll -100}px;
        padding-bottom: 0;
    }

    transition: background-position ${SCROLL_TIME}s ease-in-out;
`;

export default function Layout({ children, path }) {
    const [isScrolling, setIsScrolling] = React.useState(false);
    const [initialScroll, setInitialScroll] = React.useState(true);
    
    const pathScrollMap = {
        '/about/': 1,
        '/': 960,
        '/discography/': 2880,
    }

    const getScroll = (path) => {
        return pathScrollMap[path] ? pathScrollMap[path] : pathScrollMap['/'];
    }

    //When path changes, toggle isScrolling flag until animation is complete
    React.useEffect(() => {
        if(initialScroll) {
            setIsScrolling(true);
            setTimeout(() => {setIsScrolling(false)}, SCROLL_TIME * 1000);
        }
        setInitialScroll(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);
    
    return (
        <AnimatePresence>
            <OuterContainer
                scroll={getScroll(path)}>
                    <Container
                        scroll={getScroll(path)}>
                            {
                                path !== '/' &&
                                <Navbar
                                    key="Navbar"
                                />
                            }

                            { !isScrolling &&
                                <FadeWrapper
                                    key={path}>
                                    {children}
                                </FadeWrapper>
                            }
                    </Container>
            </OuterContainer>
        </AnimatePresence>
    )
}
