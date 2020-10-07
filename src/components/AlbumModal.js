import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import devices from '../styles/devices';

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

    @media ${devices.mobileL} {
        display: block;
    }
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
    z-index: 26;
    width: 60vw;
    max-width: 800px;
    border: 5px solid white;
    border-radius: 25px;
    background: black;
<<<<<<< HEAD
    padding: 20px 40px;
=======
    padding: 50px 40px;
>>>>>>> 43c1e6ffbc0c318e323710f7c15c058313169f1a

    @media ${devices.mobileL} {
        width: auto;
        border: none;
        border-radius: 0px;
    }
`;
    
const InfoPane = styled.div`
<<<<<<< HEAD
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr
    align-content: start;
    column-gap: 20px;

    @media ${devices.tablet} {
        grid-template: none / 1fr 1fr;
    }

    @media ${devices.mobileL} {
        grid-template: repeat(3, 1fr) / 1fr;
    }
=======
    width: 90%;
>>>>>>> 43c1e6ffbc0c318e323710f7c15c058313169f1a
`;

const AlbumArt = styled.img`
    width: 100%;

    @media ${devices.tablet} {
        align-self: center;
    }
`;

const AlbumText = styled.div`
    h3 {
        margin: 0;
    }

    @media ${devices.tablet} {
        grid-column-end: span 2;
    }

    @media ${devices.mobileL} {
        grid-column-end: span 1;
    }
`;

const StreamingLinkList = styled.ul`
    list-style: none;
    padding: 0;
    grid-column-end: span 2;
    align-self: start;

    display: grid;
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
    row-gap: 10px;
<<<<<<< HEAD

    @media ${devices.tablet} {
        grid-row-start: 1;
        grid-column-start: 2;
        grid-column-end: span 1;
        grid-template: none / 1fr;
    }

    @media ${devices.mobileL} {
        grid-row-start: 2;
        grid-column-start: 1;
    }
=======
>>>>>>> 43c1e6ffbc0c318e323710f7c15c058313169f1a
`;

const StreamingListItem = styled.li`
    
`;

<<<<<<< HEAD
const CloseLink = styled.button`
    float: right;
`;

=======
>>>>>>> 43c1e6ffbc0c318e323710f7c15c058313169f1a
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
                        <CloseLink href="#" onClick={this.props.handleClose}>X</CloseLink>
                        <InfoPane>
                            <AlbumArt src={`/albumart/${this.props.album.albumArt}`} />
                            <AlbumText>
                                <h3>{this.props.album.albumTitle}</h3>
                                <p>{this.props.album.albumDescription}</p>
                            </AlbumText>
                            <StreamingLinkList>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming1.png" alt="SoundCloud" />S. Cloud</StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming2.png" alt="Spotify" />S. Spotify</StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming3.png" alt="Apple Music" />M. Apple</StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming4.png" alt="Youtube Music" />M. Youtube</StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming5.png" alt="Pandora" />S. Pandora</StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming6.png" alt="Amazon Music" />M. Amazon</StyledLink></StreamingListItem>
                            </StreamingLinkList>
                        </InfoPane>
<<<<<<< HEAD
=======
                        <StyledLink href="#" onClick={this.props.handleClose}>X</StyledLink>
>>>>>>> 43c1e6ffbc0c318e323710f7c15c058313169f1a
                    </Modal>
                </FlexContainer>
                <Shroud>
                </Shroud>
            </div>
        )
    }
}