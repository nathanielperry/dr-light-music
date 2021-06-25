import React from 'react';
import styled from 'styled-components';
import devices from '../styles/devices';
import { motion } from 'framer-motion';

import Scanner from './Scanner';
import Img from 'gatsby-image';

const List = styled.ul`  
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 50px 20px;
    width: 85px;

    @media ${devices.mobileL} {
        width: 75px;
        padding: 50px 10px;
    }
`;

const Item = styled(motion.li)`
    position: relative;
    width: 85px;
    height: 85px;
    margin-top: 10px;
    border-radius: 8px;
    overflow: hidden;

    &:nth-child(1) {
        margin-top: 0;
    }

    background: rgba(0, 0, 0, 0.5);

    @media ${devices.mobileL} {
        width: 75px;
        height: 75px;
    }
`;

const ImageContainer = styled(motion.div)`
    img {
        width: 100%;    
    }
`;

const isCurrent = (hash, album) => {
    return album.anchor === hash.replace(/#/, '');
}

export default function AlbumIcons({ hash, albums }) {
    const initial = {
        scaleY: 1,
    }

    const selectedAnimation = {
        scaleY: 0,
    };

    return (
        <List>
            {
                    albums.map((album, i) => (
                        <Item 
                            className={isCurrent(hash, album) ? 'selected' : ''}
                            key={album.anchor + '_icon'}
                            >
                            { isCurrent(hash, album) &&
                                <Scanner />
                            }
                            <a href={'#' + album.anchor}>
                                <ImageContainer 
                                    src={'/albumart/' + album.art} 
                                    animate={isCurrent(hash, album) ? selectedAnimation : initial}
                                    initial={initial}
                                    transition={{
                                        duration: 0.1,
                                        delay: 0.1,
                                    }}>
                                    <Img
                                        fluid={album.albumImg}/>
                                </ImageContainer>
                            </a>
                        </Item>
                    ))
                }
        </List>
    )
}