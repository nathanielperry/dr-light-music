import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const TICK_RATE = 35;

const Container = styled.div`
    max-height: 100%;
    max-width: 100%;
    padding: 0;
    color: white;
    text-shadow: 2px 0 0 black;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    pre {
        max-height: 100%;
        font-size: 15px;
        line-height: 15px;
        margin: 0;
    }
`;

export default function OSTextBlitter({ className, lines, isVisible, restartDelay = -1 }) {
    const [ blitterCount, setBlitterCount ] = useState(0);
    const divRef = useRef(null);
    const linesString = lines.join('\n');

    React.useEffect(() => {
        const tick = setInterval(() => {
            //Scroll text field to bottom
            divRef.current.scrollTop = divRef.current.scrollHeight;
            //Add 1 to character count, but not more than current length.
            setBlitterCount(Math.min(blitterCount + 1, linesString.length));
        }, TICK_RATE);

        return () => clearInterval(tick);
    });

    React.useEffect(() => {
        setBlitterCount(0);
    }, [ isVisible ]);

    return (
        <Container
            className={className}
            ref={divRef}>
            <pre>
                { linesString.slice(0, blitterCount) }
            </pre>
        </Container>
    )

}