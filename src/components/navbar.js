import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavContainer = styled.nav`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: black;
    padding: 0 1rem;
`;

const NavUl = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
`;

const NavLi = styled.li`
    margin-left: 1rem;
`;

const StyledLink = styled(Link)`
    color: #efefef;
    text-decoration: none;
`;

export default function Navbar() {
    return (
        <NavContainer>
            <h1><StyledLink to="/">Dr. Light</StyledLink></h1>
            <NavUl>
                <NavLi><StyledLink to="/about">Bio</StyledLink></NavLi>
                <NavLi><StyledLink to="/discography">Albums</StyledLink></NavLi>
            </NavUl>
        </NavContainer>
    )
}