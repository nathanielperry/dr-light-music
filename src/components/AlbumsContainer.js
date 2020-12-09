import React from 'react';                   
import styled from 'styled-components';
import Album from './Album';
import devices from '../styles/devices';
import motion from 'framer-motion';

import { albums } from '../../content/albums.json';

const Container = styled.div`
    position: relative;
    width: 600px;
    height: 425px;
    margin: auto;

    display: flex;
    
    background: url(scanlines.png) repeat;
    border: 32px double black;
    border-image: url(border.png) 32 repeat;
`;

const AlbumList = styled.ul`
    margin: auto;
    padding: 0;
    width: 100%;
    height: 425px;
    list-style: none;
    
    display: flex;
    flex-direction: column;

    scroll-snap-type: y mandatory;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
    overflow-y: scroll;

    //Hide Scroll Bar
    --ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;


const AlbumIcons = styled.ul`  
    list-style: none;
    margin: 0;
    padding: 20px;
    padding-top: 10px;
    width: 85px;

    li {
        width: 85px;
        height: 85px;
        margin-top: 10px;
        border-radius: 8px;
        overflow: hidden;

        &:nth-child(1) {
            margin-top: 0;
        }

        transition: all 0.2s ease-in-out;
        background: darkslategrey;
    }

    .selected {
        transform: rotateY(180deg);
        img {
            animation: flipside 0.4s linear forwards; 
        }
    }

    img {
        width: 100%;
    }

    @keyframes flipside {
        49% {
            opacity: 1;
        }
        50%, 100% {
            opacity: 0;
        }
    }
`;

const TvScanlines = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    background: url("scanlines.png");
    opacity: 0.2;
    z-index: 1;
`;

function getScrollPosition(e) {
    return Math.round(e.target.scrollTop / 425);
}

function albumAnchor(current, setCurrent) {
    const nextAlbum = current < 0 ? albums.length - 1 : current % albums.length;
    console.log('CURRENT: ', current);

    return (
        <a 
            href={'#' + albums[nextAlbum].albumAnchor}
            onClick={() => {
                setCurrent(nextAlbum);
            }}>
            #
        </a>
    );
}

export default function AlbumsContainer() {
    const [ currentAlbum, setCurrentAlbum ] = React.useState(0);
    const [ scroll, setScroll ] = React.useState(0);

    const handleScroll = (e) => setScroll(getScrollPosition(e));

    return (
        <Container
            id='albums-container'>
            <TvScanlines />
            <AlbumIcons>
                {
                    albums.map((album, i) => (
                        <li className={i === scroll ? 'selected' : ''}>
                            <a href={'#' + album.anchor}>
                                <img 
                                    src={'/albumart/' + album.art} 
                                />
                            </a>
                        </li>
                    ))
                }
            </AlbumIcons>
            <AlbumList
                onScroll={handleScroll}>
                { 
                    albums.map((album, i) => (
                        <Album
                            isVisible={i === scroll}
                            album={album}
                            key={album.albumAnchor}>
                        </Album>
                    ))
                }
            </AlbumList>
        </Container>
    )
}