import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Album from '../components/album';
import AlbumModal from '../components/AlbumModal';

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
`;

const AlbumsContainer = styled.div`
    position: relative;
    height: 448px;
    width: 608px;
    margin: auto;
    box-sizing: border-box;
    background: url("tv.png") 50% -480px no-repeat;
    padding: 24px;
`;

const AlbumList = styled.ul`
    margin: auto;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`;
    
const TvScanlines = styled.div`
    position: absolute;
    top: 24px;
    left: 24px;
    width: 560px;
    height: 400px;
    background: url("scanlines.png");
    opacity: 0.3;
`;

const AlbumLi = styled.li`
    margin-left: 2rem;
    height: 60%;
`;

export default class Discography extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: null,
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
                        {/* <TvScanlines /> */}
                        <AlbumList>
                            { 
                                albums.map(album => {
                                    return (
                                        <AlbumLi>
                                            <Album 
                                                albumArt={album.albumArt} 
                                                albumTitle={album.albumTitle} 
                                                handleClick={() => this.openModal(album)}>
                                            </Album>
                                        </AlbumLi>
                                    );
                                })
                            }
                        </AlbumList>
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