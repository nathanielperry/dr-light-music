import React from 'react';
import styled from 'styled-components';
import devices from '../styles/devices';
import { motion } from 'framer-motion';

import Scanner from './Scanner';
import Img from 'gatsby-image';

const List = styled(motion.ul)`  
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 50px 20px 0;
    margin: 0 auto;

    @media ${devices.mobileL} {
        padding: 50px 10px;
    }
`;

const ItemContainer = styled(motion.div)`
    margin-top: 10px;
    &:nth-child(1) {
        margin-top: 0;
    }


    a {
        display: flex;
        color: white;
        font-size: 1.2rem;
        text-shadow: 3px 0 0 black;
        text-decoration: none;

        gap: 10px;
    }
`;

const Item = styled(motion.li)`
    position: relative;
    width: 85px;
    height: 85px;
    min-width: 85px;
    min-height: 85px;
    border-radius: 8px;
    overflow: hidden;

    background: rgba(0, 0, 0, 0.5);

    @media ${devices.mobileL} {
        width: 75px;
        height: 75px;
        min-width: 75px;
        min-height: 75px;
    }
`;

const ItemInfo = styled(motion.div)`
`;

const ImageContainer = styled(motion.div)`
    img {
        width: 100%;    
    }
`;

const isCurrent = (hash, album) => {
    return album.anchor === hash.replace(/#/, '');
}

const isUnselected = (hash) => {
    return hash === '';
}

const initial = {
    scaleY: 1,
}

const selectedAnimation = {
    scaleY: 0,
};

export default function AlbumIcons({ hash, albums }) {
    return (
        <List 
            isUnselected={isUnselected(hash)}
            layout
            transition={{
                stiffness: 700,
                damping: 30,
                duration: 6,
            }}>
            {
                    albums.map((album, i) => (
                        <ItemContainer
                            key={album.anchor + '_icon'}
                            layout>
                            <a href={'#' + album.anchor}>
                                <Item 
                                    className={isCurrent(hash, album) ? 'selected' : ''}
                                    layout
                                    >
                                    { isCurrent(hash, album) &&
                                        <Scanner />
                                    }
                                        <ImageContainer 
                                            $src={'/albumart/' + album.art} 
                                            animate={isCurrent(hash, album) ? selectedAnimation : initial}
                                            initial={initial}
                                            transition={{
                                                duration: 0.1,
                                                delay: 0.1,
                                            }}>
                                            <Img
                                                fluid={album.albumImg}/>
                                        </ImageContainer>
                                </Item>
                                { isUnselected(hash) &&
                                    <ItemInfo>
                                        <h3>{album.title}</h3>
                                    </ItemInfo>
                                }
                            </a>
                        </ItemContainer>
                    ))
                }
        </List>
    )
}