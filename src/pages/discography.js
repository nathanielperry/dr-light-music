import React from 'react';                   
import styled from 'styled-components';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import AlbumModal from '../components/AlbumModal';

import devices from '../styles/devices';
import AlbumsContainer from '../components/AlbumsContainer';

const TvSupports = styled.div`
    height: 288px;
    background: url("tv.png") 50% -192px no-repeat;

    @media ${devices.mobileL} {
        width: 90%;
        height: 100px;
        background: none;
    }
`;

export default class Discography extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: null,
            albumsHoverPercent: 0,
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
                    <AlbumsContainer 
                        openModal={this.openModal.bind(this)}/>
                    { this.state.currentModal &&
                        <AlbumModal
                            album={this.state.currentModal}
                            handleClose={this.closeModal.bind(this)}    
                        />
                    }
                </Layout>
            </div>
        )
    }
}