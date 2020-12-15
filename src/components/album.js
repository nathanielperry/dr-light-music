import React from 'react';
import styled from 'styled-components';
import motion from 'framer-motion';
import devices from '../styles/devices';

import OSWindow from './OSWindow';
import StreamingLinks from './streamingLinks';
import OSTextBlitter from './OSTextBlitter';
import Album3D from './Album3D';

const AlbumContainer = styled.div`
    height: 425px;
    min-height: 425px;
    max-height:425px;
    padding: 50px 20px 0 0;
    box-sizing: border-box;
    scroll-snap-align: start;

    display: grid;
    grid-template-rows: 1fr minmax(0, 1fr) 90px;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
    grid-template-areas: 
        "str art"
        "ost art";
`;

const TextBlitterWindow = styled(OSWindow)`
    grid-area: ost;
`;

const StreamingLinksWindow = styled(OSWindow)`
    grid-area: str;
`;

const StyledAlbum3D = styled(Album3D)`
    grid-area: art;
`;

const StyledStreamingLinks = styled(StreamingLinks)`
    list-style: none;

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

    const tracklist = ['Sequencing...', ...tracks.map((trackname, i) => `${i + 1}. ${trackname}`)];

    return (
        <AlbumContainer 
            id={anchor} 
            name={anchor}
            isVisible={isVisible}>
            <StreamingLinksWindow
                canMinimize={true}>
                <StyledStreamingLinks 
                    streams={streams} 
                    isVisible={isVisible}
                    className={className}/>
            </StreamingLinksWindow>
            <TextBlitterWindow
                canMinimize={true}
                canMaximize={true}>
                <OSTextBlitter 
                    className={className}
                    lines={tracklist}
                    isVisible={isVisible}/>
            </TextBlitterWindow>
            <StyledAlbum3D 
                title={title}
                art={art}
                isVisible={isVisible}
                className={className}/>
        </AlbumContainer>
    )
}