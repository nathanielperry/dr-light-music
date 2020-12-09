import React from 'react';
import styled from 'styled-components';
import motion from 'framer-motion';
import devices from '../styles/devices';

import StreamingLinks from './streamingLinks';
import Album3D from './Album3D';

const AlbumContainer = styled.div`
    min-height: 425px;
    padding: 10px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    scroll-snap-align: start;
`;

const StyledStreamingLinks = styled(StreamingLinks)`
    list-style: none;
    /* align-self: start; */
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;

    a {
        color: white;
        text-decoration: none;
        font-size: 17px;
        &:hover {
            color: cyan;
        }
    }
`;

export default function Album({ isVisible, album }) {
    const { title, anchor, art, tracks, streams } = album;

    return (
        <AlbumContainer 
            id={anchor} 
            name={anchor}
            isVisible={isVisible}>
            <StyledStreamingLinks 
                streams={streams} 
                isVisible={isVisible}/>
            <Album3D 
                title={title}
                art={art}
                isVisible={isVisible}/>
        </AlbumContainer>
    )
}