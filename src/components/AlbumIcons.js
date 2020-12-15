import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const List = styled.ul`  
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 50px 20px;
    width: 85px;
`;

const Item = styled(motion.li)`
    width: 85px;
    height: 85px;
    margin-top: 10px;
    border-radius: 8px;
    overflow: hidden;

    &:nth-child(1) {
        margin-top: 0;
    }

    background: rgba(0, 0, 0, 0.5);

    img {
        width: 100%;
    }
`;

const Image = styled(motion.img)`

`;

export default function AlbumIcons({ scroll, albums }) {
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
                            className={i === scroll ? 'selected' : ''}
                            key={album.anchor + '_icon'}
                            >
                            <a href={'#' + album.anchor}>
                                <Image 
                                    src={'/albumart/' + album.art} 
                                    animate={i === scroll ? selectedAnimation : initial}
                                    initial={initial}
                                    transition={{
                                        duration: 0.1,
                                        delay: 0.1,
                                    }}/>
                            </a>
                        </Item>
                    ))
                }
        </List>
    )
}