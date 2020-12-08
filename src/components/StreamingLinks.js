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
    list-style: none;
    padding: 10px;
    align-self: start;

    display: grid;
    grid-template: repeat(3, 1fr) / 1fr;
    row-gap: 10px;

    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
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

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 17px;
    &:hover {
        color: cyan;
    }

    @media ${devices.mobileS} {
        font-size: 15px;
    }
`;

function streamingListItem(url, icon, text) {
    return (
        <StreamingListItem
            key={text}>
            <StyledLink 
                href={url}>
                <StreamIcon src={icon} alt={text} />
                <p>{text}</p>
            </StyledLink>
        </StreamingListItem>
    )
}

export default function StreamingLinks(props) {
    const { streams } = props;

    return (
        <StreamingLinkList>
            {
                streams.map(stream => ( 
                    streamingListItem(stream.url, icons[stream.service], stream.service)
                ))
            }
        </StreamingLinkList>
    )
}