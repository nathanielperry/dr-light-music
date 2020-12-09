import React from 'react';
import styled from 'styled-components';
import devices from '../styles/devices';

const icons = {
    'Soundcloud': "streaming1.png",
    'Spotify': "streaming2.png",
    'Apple Music': "streaming3.png",
    'Youtube Music': "streaming4.png",
    'Pandora': "streaming5.png",
    'Amazon Music': "streaming6.png",
}

const StreamingLinkList = styled.ul`
    padding: 10px;
    display: grid;
    grid-template: repeat(3, 1fr) / 1fr;
    row-gap: 10px;
`;

const StreamingListItem = styled.li`
    height: 26px;

    p {
        margin: 0;
        vertical-align: middle;
        line-height: 26px;
        display: inline-block;
    }
`;

const StreamIcon = styled.img`
    vertical-align: top;
    margin: 0 10px;
`;

function streamingListItem(url, icon, text) {
    return (
        <StreamingListItem
            key={text}>
            <a 
                href={url}>
                <StreamIcon src={icon} alt={text} />
                <p>{text}</p>
            </a>
        </StreamingListItem>
    )
}

export default function StreamingLinks({ className, streams }) {
    return (
        <StreamingLinkList
            className={className}>
            {
                streams.map(stream => ( 
                    streamingListItem(stream.url, icons[stream.service], stream.service)
                ))
            }
        </StreamingLinkList>
    )
}