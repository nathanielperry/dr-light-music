import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Album from '../components/album';
import AlbumModal from '../components/AlbumModal';

import devices from '../styles/devices';

const albums = [
    {
        albumTitle: 'Triangle of Stars',
        albumArt: 'test.jpg',
        albumDescription: 'A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (literally without tail in Ancient Greek). The oldest fossil "proto-frog" appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.',
    },
    {
        albumTitle: 'Phobia',
        albumArt: 'phobia.jpg',
        albumDescription: 'A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (literally without tail in Ancient Greek). The oldest fossil "proto-frog" appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.',
    },
]

const TvSupports = styled.div`
    height: 288px;
    background: url("tv.png") 50% -192px no-repeat;

    @media ${devices.mobileL} {
        height: 100px;
        background: none;
    }
`;

const AlbumsContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 600px;
    margin: auto;
    padding: 20px;
    
    background: url(scanlines.png) repeat;
    border: 32px double black;
    border-image: url(border.png) 32 repeat;
    
    @media ${devices.mobileL} {
        overflow-x: hidden;
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
    
    const PreviousAlbumArrow = styled.button`
    background: none;
    border: none;
    font-size: 2rem;
    line-height: 2rem;
    color: white;
    text-shadow: black 3px 3px 3px;
    // background: rgba(75, 105, 97, 1);
    background: #549670;
    border-radius: 10px;
`;

const NextAlbumArrow = styled(PreviousAlbumArrow)`

`;

const TvScanlines = styled.div`
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    background: url("scanlines.png");
    opacity: 0.3;
`;

export default class Discography extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: null,
            currentAlbum: 0,
        }
    }

    openModal(album) {
        this.setState({
            currentModal: album,
        });
    }
    
    closeModal() {
        this.setState({
            currentModal: null,
        });
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Layout bgOffset={2880}>
                    <TvSupports />
                    <AlbumsContainer>
                        {/* <TvScanlines  />     */}
                        <AlbumList>
                            { 
                                albums.map(album => {
                                    return (
                                        <Album 
                                        albumArt={album.albumArt} 
                                        albumTitle={album.albumTitle}
                                        albumDescription={album.albumDescription} 
                                        handleClick={() => this.openModal(album)}>
                                        </Album>
                                    );
                                })
                            }
                        </AlbumList>
                        <FixWrapper>
                            <Fix>
                                <PreviousAlbumArrow>{'<'}</PreviousAlbumArrow>
                                <NextAlbumArrow>{'>'}</NextAlbumArrow>
                            </Fix>
                        </FixWrapper>
                        { this.state.currentModal &&
                            <AlbumModal
                                album={this.state.currentModal}
                                handleClose={this.closeModal.bind(this)}    
                            />
                        }
                    </AlbumsContainer>
                </Layout>
            </div>
        )
    }
}