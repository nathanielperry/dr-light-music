import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Window = styled.div`
    position: relative;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    padding: 5px;
`;

const TitleBar = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 17px;
    padding: 5px 0 5px 5px;
    display: flex;
    justify-content: flex-end;
    background: rgba(0, 0, 0, 0.4);
    border-bottom-left-radius: 8px;
`;

const MinButton = styled.div`
    width: 15px;
    height: 15px;
    margin-right: 6px;
    background: url('buttons.png') top left;
`;

const CloseButton = styled(MinButton)`
    background-position-x: -15px;
`;

const MaxButton = styled(MinButton)`
    background-position-x: -30px;
`;

export default function OSWindow({ children }) {
    return (
        <Window>
            <TitleBar>
                <CloseButton />
                <MinButton />
                <MaxButton />
            </TitleBar>
            {children}
        </Window>
    )
}