import React from 'react';
import styled from 'styled-components';

const AlbumArt = styled.img`
    width: 100%;
`;

export default function Album3D({ className, title, art }) {
    return (
        <div className={className}>
            <h3>{title}</h3>
            <AlbumArt src={`/albumart/${art}`}alt='Album Art' />
        </div>
    )
}