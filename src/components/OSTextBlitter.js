import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-height: 100%;
    max-width: 100%;
    padding: 0;
    /* color: #c6eef6; */
    color: white;
    text-shadow: 2px 0 0 black;
    overflow: hidden;

    pre {
        max-height: 100%;
        font-size: 15px;
        line-height: 15px;
        margin: 0;
    }
`;

export default function OSTextBlitter({ className, lines, isVisible }) {
    const [ blitterCount, setBlitterCount ] = useState(0);
    const divRef = useRef(null);
    const linesString = lines.join('\n');

    React.useEffect(() => {
        const tick = setInterval(() => {
            divRef.current.scrollTop = divRef.current.scrollHeight;
            setBlitterCount(Math.min(blitterCount + 1, linesString.length));
        }, 25);

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