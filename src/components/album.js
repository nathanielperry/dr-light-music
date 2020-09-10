import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const AlbumContainer = styled.div`
    width: 200px;

    img {
        width: 200px;
    }
`;

export default class Album extends React.Component {
    render() {
        return (
            <AlbumContainer>
                <a href="#" onClick={this.props.handleClick}><img src={`/albumart/${this.props.albumArt}`}></img></a>
                <h3>{this.props.albumTitle}</h3>
            </AlbumContainer>
        )
    }
}