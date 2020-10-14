import React from 'react';
import styled from 'styled-components';

import devices from '../styles/devices';

const AlbumContainer = styled.li`
    margin-left: 1rem;
    padding: 0.7rem;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    flex: 0 0 40%;

    img {
        width: 100%;
        box-shadow: 4px 4px 6px black;
    }

    @media ${devices.mobileL} {
        scroll-snap-align: start;
        width: 100%;
        margin-left: 0;
        flex: 0 0 90%;

        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 0;

        h3 {
            margin: 5px 0;
            // margin-left: 10px;
        }
    }
`;

const AlbumText = styled.p`
    display: none;
    margin: 10px 0 30px;

    @media ${devices.mobileL} {
        display: block;
    }
`;

const QuickStreamLinks = styled.button`
    display: none;
    margin: 20px 0 10px;

    @media ${devices.mobileL} {
        display: block;
    }
`;

export default class Album extends React.Component {
    render() {
        return (
            <AlbumContainer
                name={this.props.albumAnchor}>
                <AlbumText>
                    {this.props.albumDescription}
                </AlbumText>
                <QuickStreamLinks onClick={this.props.openModal}>
                    Listen Now
                </QuickStreamLinks>
                <button onClick={this.props.openModal}>
                    <img 
                        src={`/albumart/${this.props.albumArt}`}
                        alt='Album Art' />
                </button>
                <h3>{this.props.albumTitle}</h3>
            </AlbumContainer>
        )
    }
}