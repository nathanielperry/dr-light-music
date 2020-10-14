import React from 'react';                   
import styled from 'styled-components';
import Album from '../components/album';
import devices from '../styles/devices';

const albums = [
    {
        albumTitle: 'The Light Hits',
        albumAnchor: 'the_light_hits',
        albumArt: 'test.jpg',
        albumDescription: 'A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (literally without tail in Ancient Greek). The oldest fossil "proto-frog" appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.',
    },
    {
        albumTitle: 'Phobia',
        albumAnchor: 'phobia',
        albumArt: 'phobia.jpg',
        albumDescription: 'A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (literally without tail in Ancient Greek). The oldest fossil "proto-frog" appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.',
    },
    {
        albumTitle: 'Triangle of Stars',
        albumAnchor: 'triangle_of_stars',
        albumArt: 'test.jpg',
        albumDescription: 'A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (literally without tail in Ancient Greek). The oldest fossil "proto-frog" appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.',
    },
    {
        albumTitle: 'CTI',
        albumAnchor: 'cti',
        albumArt: 'test.jpg',
        albumDescription: 'A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (literally without tail in Ancient Greek). The oldest fossil "proto-frog" appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.',
    },
]

const Container = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 600px;
    margin: auto;
    padding: 20px;
    overflow: hidden;
    
    background: url(scanlines.png) repeat;
    border: 32px double black;
    border-image: url(border.png) 32 repeat;
    
    @media ${devices.mobileL} {
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        overflow-x: scroll;
        overflow-y: scroll;
        width: 90%;
        height: 80vh;
        padding: 0;
    }
`;

const AlbumList = styled.ul`
    margin: auto;
    padding: 0;
    list-style: none;
    
    display: flex;
    flex-direction: row;
    align-items: stretch;
`;

const FixWrapper = styled.div`
    display: none;
    position: absolute;
    height: 10px;
    margin: auto;
    bottom: 0;
    margin: auto;
    width: 100%;

    @media ${devices.mobileL} {
        display: block;
    }
`;
    
const Fix = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 50%;
    transform: translate(20%, -25px);
    `;

// const TvScanlines = styled.div`
//     position: absolute;
//     pointer-events: none;
//     width: 100%;
//     height: 100%;
//     background: url("scanlines.png");
//     opacity: 0.3;
// `;

export default class AlbumsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAlbum: 0,
        };
    }

    setCurrentAlbum(newAlbum) {
        this.setState({
            currentAlbum: newAlbum,
        });
    }

    nextAlbumAnchor(text) {
        const currentAlbum = this.state.currentAlbum;
        const nextAlbum = (currentAlbum + 1) % albums.length;
        return (
            <a 
                href={'#' + albums[nextAlbum].albumAnchor}
                onClick={() => console.log('boo')}>
                {text}
            </a>
        );
    }
    
    previousAlbumAnchor(text) {
        const currentAlbum = this.state.currentAlbum;
        let prevAlbum = currentAlbum - 1;
        prevAlbum = prevAlbum < 0 ? albums.length - 1 : prevAlbum;
        return (
            <a 
                href={'#' + albums[prevAlbum].albumAnchor}
                onClick={() => this.setCurrentAlbum(prevAlbum)}>
                {text}
            </a>
        );
    }

    render() {
        return (
            <Container
                id='albums-container'
                onMouseOver={this.props.updateMousePos}>
                {/* <TvScanlines  /> */}
                <AlbumList>
                    { 
                        albums.map(album => {
                            return (
                                <Album
                                    albumArt={album.albumArt} 
                                    albumAnchor={album.albumAnchor}
                                    albumTitle={album.albumTitle}
                                    albumDescription={album.albumDescription} 
                                    openModal={() => this.props.openModal(album)}
                                    key={album.albumAnchor}>
                                </Album>
                            );
                        })
                    }
                </AlbumList>
                <FixWrapper>
                    <Fix>
                        {this.previousAlbumAnchor('<')}
                        {this.nextAlbumAnchor('>')}
                    </Fix>
                </FixWrapper>
            </Container>
        )
    }
}