import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 120px;
    padding: 0;
    color: #c6eef6;
    text-shadow: 2px 0 0 black;

    overflow: hidden;

    pre {
        font-size: 15px;
        line-height: 15px;
    }
`;

export default function OSTextBlitter({ className, tracks, isVisible }) {
    const [ blitterCount, setBlitterCount ] = useState(0);
    const divRef = useRef(null);
    const tracklistString = 'Sequencing...\n' + tracks.map((track, i) => `${i + 1}. ${track}`)
        .join('\n');

    React.useEffect(() => {
        const tick = setInterval(() => {
            divRef.current.scrollTop = divRef.current.scrollHeight;
            setBlitterCount(Math.min(blitterCount + 1, tracklistString.length));
        }, 25);

        return () => clearInterval(tick);
    });

    React.useEffect(() => {
        console.log('effect');
        if (isVisible) {
            setBlitterCount(0);
        }
    }, [ isVisible ]);

    return (
        <Container
            className={className}
            ref={divRef}>
            <pre>
                { tracklistString.slice(0, blitterCount) }
            </pre>
        </Container>
    )

}