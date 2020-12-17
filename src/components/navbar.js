import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import devices from '../styles/devices';

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 80px;
    background: rgba(0, 0, 0, 0.8);

    animation: slideDown 1s cubic-bezier(0, 0.7, 0.7, 1.0);

    @keyframes slideDown {
        0% {
            top: -80px;
        }

        100% {
            top: 0;
        }
    }
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

const NavLi = styled.li`
    margin-left: 1rem;
`;

const StyledLink = styled(Link)`
    color: #efefef;
    text-decoration: none;

    h1 {
        @media ${devices.mobileL} {
            font-size: 1.4rem;
        }
    }
`;

export default function Navbar() {
    return (
        <Container>
            <NavContainer>
                <StyledLink to="/"><h1>Dr. Light</h1></StyledLink>
                <NavUl>
                    <NavLi><StyledLink to="/about">Bio</StyledLink></NavLi>
                    <NavLi><StyledLink to="/discography">Albums</StyledLink></NavLi>
                </NavUl>
            </NavContainer>
        </Container>
    )
}