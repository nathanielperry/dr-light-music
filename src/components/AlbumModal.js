import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FlexContainer = styled.div`
    position: fixed;
    z-index: 25;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Shroud = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 24;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.8;
`;

const Modal = styled.div`
    position: fixed;
    width: 60vw;
    max-width: 800px;
    border: 1px solid white;
    border-radius: 25px;
    background: black;
    padding-top: 50px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 50px;

    display: flex;
    align-items: flex-start;
`;

const InfoPane = styled.div`
    width: 70%;
`;

const AlbumArt = styled.img`
    margin-right: 40px;
`;

const StreamingLinkList = styled.ul`
    list-style: none;
    margin-top: 50px;
    padding: 0;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

const StreamingListItem = styled.li`
    
`;

export default class AlbumModal extends React.Component {
    render() {
        return (
            <div>
                <FlexContainer>
                    <Modal>
                        <AlbumArt src={`/albumart/${this.props.album.albumArt}`} />
                        <InfoPane>
                            <h3>{this.props.album.albumTitle}</h3>
                            <p>{this.props.album.albumDescription}</p>
                            <StreamingLinkList>
                                <StreamingListItem><a href="#"><img src="" alt="Spotify" /></a></StreamingListItem>
                                <StreamingListItem><a href="#"><img src="" alt="Google Music" /></a></StreamingListItem>
                                <StreamingListItem><a href="#"><img src="" alt="Apple Music" /></a></StreamingListItem>
                                <StreamingListItem><a href="#"><img src="" alt="Sound Cloud" /></a></StreamingListItem>
                                <StreamingListItem><a href="#"><img src="" alt="Pandora" /></a></StreamingListItem>
                                <StreamingListItem><a href="#"><img src="" alt="Amazon" /></a></StreamingListItem>
                            </StreamingLinkList>
                        </InfoPane>
                        <a href="#" onClick={this.props.handleClose}>Close</a>
                    </Modal>
                </FlexContainer>
                <Shroud>
                </Shroud>
            </div>
        )
    }
}