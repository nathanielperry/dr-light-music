import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const Container = styled.div`
    width: 50%;

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

    h3 {
        margin: 0 0 10px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        text-align: center;
    }
`;

const AlbumArt = styled(motion.img)`
    width: 100%;
    box-shadow: 5px 0 0 black;
`;

export default function Album3D({ className, title, art, isVisible }) {
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
        <Container>
            <Rotator 
                className={className}>
                <h3>{title}</h3>
                <AlbumArt 
                    src={`/albumart/${art}`}
                    alt='Album Art'
                    initial="hidden"
                    animate={sequence}
                    variants={variants}/>
            </Rotator>
        </Container>
    )
}