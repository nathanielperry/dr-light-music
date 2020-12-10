import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

import devices from '../styles/devices';

const icons = {
    'Soundcloud': "streaming1.png",
    'Spotify': "streaming2.png",
    'Apple Music': "streaming3.png",
    'Youtube Music': "streaming4.png",
    'Pandora': "streaming5.png",
    'Amazon Music': "streaming6.png",
}

const StreamingLinkList = styled(motion.ul)`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
`;

const StreamingListItem = styled(motion.li)`
    height: 26px;
    margin-top: 10px;
    
    &:nth-child(1) {
        margin-top: 0;
    }

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

export default function StreamingLinks({ className, isVisible, streams }) {
    const initial = {
        opacity: 0,
        y: -40,
    };
    const popUp = {
        opacity: 1,
        y: 0,
    };

    return (
        <StreamingLinkList
            className={className}
            initial={initial}
            transition={{
                duration: 0.2,
                delay: 0.2,
                damping: 4,
                delayChildren: 0.2,
            }}
            animate={isVisible ? popUp : initial}>
            {
                streams.map(stream => ( 
                    streamingListItem(stream.url, icons[stream.service], stream.service)
                ))
            }
        </StreamingLinkList>
    )
}