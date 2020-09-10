import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 600px;
`;

const AlbumList = styled.ul`
    margin: auto;
    list-style: none;
    display: flex;
`;

const AlbumLi = styled.li`
    margin-left: 2rem;
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
                <Container>
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
                </Container>
            </div>
        )
    }
}