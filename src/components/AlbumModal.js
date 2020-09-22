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
    border: 5px solid white;
    border-radius: 25px;
    background: black;
    padding: 50px 40px;

    display: flex;
    align-items: flex-start;
`;

const InfoPane = styled.div`
    width: 90%;
`;

const AlbumArt = styled.img`
    margin-right: 40px;
`;

const StreamingLinkList = styled.ul`
    list-style: none;
    margin-top: 50px;
    padding: 0;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
    row-gap: 10px;
`;

const StreamingListItem = styled.li`
    
`;

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 20px;
    &:hover {
        color: cyan;
    }
`;

const StreamIcon = styled.img`
    margin: 0 10px;
`;

//TODO: Move StreamingListItem into own component.

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
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming1.png" alt="SoundCloud" />S. Cloud</StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming2.png" alt="Spotify" />S. Spotify</StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming3.png" alt="Apple Music" />M. Apple</StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming4.png" alt="Youtube Music" />M. Youtube</StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming5.png" alt="Pandora" />S. Pandora</StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming6.png" alt="Amazon Music" />M. Amazon</StyledLink></StreamingListItem>
                            </StreamingLinkList>
                        </InfoPane>
                        <StyledLink href="#" onClick={this.props.handleClose}>X</StyledLink>
                    </Modal>
                </FlexContainer>
                <Shroud>
                </Shroud>
            </div>
        )
    }
}