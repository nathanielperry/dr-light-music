import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import devices from '../styles/devices';

const Container = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 80px;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
`;

const NavContainer = styled.nav`
    max-width: 800px;
    height: 80px;
    margin: auto;
    opacity: 0.8;
    text-shadow: black 2px 2px;

    display: flex;
    justify-content: space-between;
    align-items: center;


`;

const NavUl = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    padding-right: 4em;
`;

const NavLi = styled(motion.li)`
    margin-left: 1rem;
`;

const StyledLink = styled(Link)`
    color: #efefef;
    text-decoration: none;

    h1 {
        @media ${devices.mobileL} {
            font-size: 1.4rem;
            padding-left: 1rem;
        }
    }
`;

const whileHover = {
    y: '-10%',
}

export default function Navbar() {
    return (
        <Container
            initial={{opacity: 0, y: -80}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -80}}
        >
            <NavContainer>
                <StyledLink to="/"><motion.h1 whileHover={whileHover}>Dr. Light</motion.h1></StyledLink>
                <NavUl>
                    <NavLi
                        whileHover={whileHover}>
                        <StyledLink 
                            to="/about">
                            Bio
                        </StyledLink>
                    </NavLi>
                    <NavLi
                        whileHover={whileHover}>
                        <StyledLink 
                            to="/discography">
                            Albums
                        </StyledLink>
                    </NavLi>
                </NavUl>
            </NavContainer>
        </Container>
    )
}
