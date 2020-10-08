import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import devices from '../styles/devices';

const AlbumContainer = styled.li`
    // height: 300px;
    width: 200px;
    margin-left: 1rem;
    padding: 0.7rem;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;

    img {
        width: 100%;
        box-shadow: 4px 4px 6px black;
    }

    @media ${devices.mobileL} {
        width: 100%;
        margin-left: 0;

        flex: 0 0 90%;

        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 0;

        h3 {
            margin-left: 10px;
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
            <AlbumContainer>
                <AlbumText>
                    {this.props.albumDescription}
                </AlbumText>
                <QuickStreamLinks onClick={this.props.handleClick}>
                    Listen Now
                </QuickStreamLinks>
                <a href="#" onClick={this.props.handleClick}><img src={`/albumart/${this.props.albumArt}`}></img></a>
                <h3>{this.props.albumTitle}</h3>
            </AlbumContainer>
        )
    }
}