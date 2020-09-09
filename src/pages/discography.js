import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Album from '../components/album';
import AlbumModal from '../components/AlbumModal';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 600px;
`;

const AlbumList = styled.ul`
    margin: auto;
    list-style: none;
    display: flex;
`;

const AlbumLi = styled.li`
    margin-left: 2rem;
`;

export default function Discography() {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <AlbumList>
                    <AlbumLi><Album albumArt="test.jpg" albumTitle="Triangle of Stars"></Album></AlbumLi>
                    <AlbumLi><Album albumArt="phobia.jpg" albumTitle="Phobia"></Album></AlbumLi>
                </AlbumList>
                <AlbumModal />
            </Container>
        </div>
    )
}