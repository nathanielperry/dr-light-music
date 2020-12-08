import React from 'react';
import styled from 'styled-components';
import devices from '../styles/devices';

import StreamingLinks from './streamingLinks';

const AlbumContainer = styled.div`
    height: 425px;
    padding: 10px;
    box-sizing: border-box;
    scroll-snap-align: start;

    display: grid;
    grid-template-columns: 50% 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
        "stream album3d"
        "stream album3d";
    grid-gap: 10px;

    * {
        transition: all 0.2s ease-in-out 0.3s;
    }

    &.hide > * {
        opacity: 0;
    }
`;

const Album3D = styled.div`
    grid-area: album3d;
`;

const AlbumTitle = styled.h3`
    margin: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    text-align: center;
`;

const TextContainer = styled.div`
    overflow-y: scroll;
    grid-area: description;

    //Hide scrollbar
    --ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const AlbumText = styled.p`
    margin: 0;
`;

const AlbumArt = styled.img`
    grid-area: art;
    width: 100%;
`;

const StyledStreamingLinks = styled(StreamingLinks)`
    grid-area: stream;
`;

const ListenButton = styled.button`
    grid-area: button;
`;

export default function Album(props) {
    const { openModal, isVisible, album } = props;
    const { title, anchor, art, tracks, streams } = album;

    return (
        <AlbumContainer 
            id={anchor} 
            name={anchor}
            className={`${isVisible ? '' : 'hide'}`}>
            <Album3D>
                <AlbumTitle>{title}</AlbumTitle>
                <AlbumArt src={`/albumart/${art}`}alt='Album Art' />
            </Album3D>
            <StreamingLinks streams={streams} />
        </AlbumContainer>
    )
}