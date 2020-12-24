import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import Img from 'gatsby-image';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:after {
        content: ' ';
        display: block;
        z-index: 20;
        height: 10px;
        width: 80px;
        margin: auto;
        margin-top: 5px;
        background: black;
        opacity: 0.5;
        border-radius: 100%;
    }
`;

const Rotator = styled(motion.div)`
    z-index: 21;
`;

const Title = styled(motion.h3)`
    margin: 0 0 10px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    text-align: center;
`;

const AlbumArtContainer = styled(motion.div)`
    img {
        box-shadow: 5px 0 0 black;
        width: 100%;
    }
`;

export default function Album3D({ className, title, albumImg, isVisible }) {
    const initialRotate = -45;
    const endRotate = -25;
    const variants = {
        hidden: {
            opacity: 0,
            scale: 0,
            perspective: 600,
            rotateY: initialRotate,
        },
        reveal: {
            opacity: 1,
            scale: 1,
            rotateY: 360 * 6 + initialRotate,
            transition: {
                duration: 2,
                ease: "easeOut",
            }
        },
        idle: {
            rotateY: [initialRotate, endRotate, initialRotate],
            transition: {
                duration: 6,
                loop: Infinity,
            }
        }
    }

    const sequence = useAnimation();

    React.useEffect(() => {
        if (isVisible) {
            sequence.start("reveal")
            .then(() => {
                sequence.start("idle");
            });
        } else {
            sequence.start("hidden");
        }
    }, [isVisible]);

    return (
        <Container
            className={className}>
            <Rotator>
                <Title>
                    {title}
                </Title>
                <AlbumArtContainer
                    initial="hidden"
                    animate={sequence}
                    variants={variants}>
                    <Img
                        alt='Album Art'
                        fluid={albumImg}/>
                </AlbumArtContainer>
            </Rotator>
        </Container>
    )
}