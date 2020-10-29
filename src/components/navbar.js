import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import devices from '../styles/devices';

const NavContainer = styled.nav`
    position: fixed;
    width: 100%;
    height: 80px;
    padding-left: 2em;
    
    background: black;
    opacity: 0.8;
    text-shadow: black 2px 2px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    animation: slideDown 2s cubic-bezier(0, 0.9, 0.9, 1.0);

    @keyframes slideDown {
        0% {
            top: -80px;
        }

        100% {
            top: 0;
        }
    }
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
        <NavContainer>
            <StyledLink to="/"><h1>Dr. Light</h1></StyledLink>
            <NavUl>
                <NavLi><StyledLink to="/about">Bio</StyledLink></NavLi>
                <NavLi><StyledLink to="/discography">Albums</StyledLink></NavLi>
            </NavUl>
        </NavContainer>
    )
}