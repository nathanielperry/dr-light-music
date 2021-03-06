import React from 'react';
import styled from 'styled-components';
import devices from '../styles/devices';

import OSWindow from './OSWindow';
import StreamingLinks from './StreamingLinks';
import OSTextBlitter from './OSTextBlitter';
import Album3D from './Album3D';

const AlbumContainer = styled.div`
    width: 100%;
    height: 325px;
    padding: 50px 20px 0 0;
    box-sizing: border-box;

    display: grid;
    grid-template-rows: 1fr minmax(0, 1fr);
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
    grid-template-areas: 
        "str art"
        "ost art";

    @media ${devices.mobileL} {
        height: 500px;
        min-height: 500px;
        max-height:500px;
        padding: 10px 10px 10px 0;
        
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
        grid-template-areas: 
        "art"
        "str";
    }
`;

const TextBlitterWindow = styled(OSWindow)`
    grid-area: ost;

    @media ${devices.mobileL} {
        display: none;
    }
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

export default function Album({ album, className }) {
    const { title, anchor, tracks, streams } = album;

    const tracklist = ['Sequencing...', ...tracks.map((trackname, i) => `${i + 1}. ${trackname}`)];

    return (
        <AlbumContainer 
            id={anchor} 
            name={anchor}>
            <StreamingLinksWindow
                className={className}
                canMinimize={true}
                overflow={true}>
                <StyledStreamingLinks 
                    className={className}
                    streams={streams}/>
            </StreamingLinksWindow>
            <TextBlitterWindow
                className={className}
                canMinimize={true}
                canMaximize={true}>
                <OSTextBlitter 
                    className={className}
                    lines={tracklist}/>
            </TextBlitterWindow>
            <StyledAlbum3D
                title={title}
                albumImg={album.albumImg}
                className={className}/>
        </AlbumContainer>
    )
}
