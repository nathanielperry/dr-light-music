import React from 'react';
import styled from 'styled-components';
import devices from '../styles/devices';

import StreamingLinks from './streamingLinks';
import Album3D from './Album3D';

const AlbumContainer = styled.div`
    height: 425px;
    padding: 10px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    scroll-snap-align: start;

    * {
        transition: opacity 0.2s ease-in-out 0.3s;
    }

    &.hide > * {
        opacity: 0;
    }
`;

const StyledAlbum3D = styled(Album3D)`
    width: 50%;

    h3 {
        margin: 0 0 10px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        text-align: center;
    }
`;

const StyledStreamingLinks = styled(StreamingLinks)`
    list-style: none;
    align-self: start;
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
            className={`${isVisible ? '' : 'hide'}`}>
            <StyledStreamingLinks streams={streams} />
            <StyledAlbum3D 
                title={title}
                art={art}/>
        </AlbumContainer>
    )
}