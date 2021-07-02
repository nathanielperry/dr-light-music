import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import devices from '../styles/devices';

const Container = styled(motion.div)`
    position: absolute;
    box-sizing: border-box;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    
    top: 0;
    left: 0;
    height: 85px;
    padding: 5px;

    p {
        font-size: 12px;
        margin: 0;
    }

    @media ${devices.mobileL} {
        height: 75px;
        width: 75px;

        p {
            font-size: 10px;
        }
    }
`;

const Graph = styled.div`
    height: 50px;
    width: 60px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
`;

const Bar = styled(motion.div)`
    width: 9px;
    background: #c6eef6;

    transition: height 0.1s ease-in-out;
`;

const barVariants = {
    scan: (x) => ({
        height: Math.floor((50 * (x/100))) + 'px',
    }),
}

function getRandomPercent() {
    return Math.floor(Math.random() * 100);
}

export default function Scanner() {
    const [ bars, setBars ] = React.useState([25, 50, 50, 25]);
    const barsRef = React.useRef(bars);

    React.useEffect(() => {
        let isMounted = true; //Flag to prevent state update after unmounting.
        setTimeout(() => {
            if (isMounted) { //Only setBars is still mounted.
                setBars(barsRef.current.map(bar => getRandomPercent()));
            }
        }, Math.floor((500 * (getRandomPercent()/100))));

        return () => isMounted = false; //Set flag to false on unmount
    }, [bars]);

    return (
        <Container
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                delay: 0.2,
            }}>
            <p>Scanning...</p>
            <Graph>
                {bars.map((x, i) => (
                    <Bar
                        style={barVariants.scan(x)}
                        key={'bar'+i}/>
                ))}
            </Graph>
        </Container>
    )
}