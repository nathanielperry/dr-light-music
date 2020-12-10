import React from 'react';
import styled from 'styled-components';
import motion from 'framer-motion';
import devices from '../styles/devices';

import StreamingLinks from './streamingLinks';
import OSTextBlitter from './OSTextBlitter';
import Album3D from './Album3D';

const AlbumContainer = styled.div`
    min-height: 425px;
    max-height:425px;
    padding: 50px 10px;
    box-sizing: border-box;
    scroll-snap-align: start;

    display: grid;
    grid-template-columns: 50% 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas: 
        "str art"
        "ost art";
`;

const StyledOSTextBlitter = styled(OSTextBlitter)`
    grid-area: ost;
`;

const StyledAlbum3D = styled(Album3D)`
    grid-area: art;
`;

const StyledStreamingLinks = styled(StreamingLinks)`
    grid-area: str;

    list-style: none;
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

export default function Album({ isVisible, album, className }) {
    const { title, anchor, art, tracks, streams } = album;

    return (
        <AlbumContainer 
            id={anchor} 
            name={anchor}
            isVisible={isVisible}>
            <StyledStreamingLinks 
                streams={streams} 
                isVisible={isVisible}
                className={className}/>
            <StyledOSTextBlitter 
                className={className}
                tracks={tracks}
                isVisible={isVisible}/>
            <StyledAlbum3D 
                title={title}
                art={art}
                isVisible={isVisible}
                className={className}/>
        </AlbumContainer>
    )
}