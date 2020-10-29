import React from 'react';
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
`;

const Shroud = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 24;
    width: 100%;
    height: 100%;
    background: black;
    
    animation: popIn 0.2s ease-out forwards;

    @keyframes popIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 0.8;
        }
    }
`;

const Modal = styled.div`
    z-index: 26;
    width: 60vw;
    max-width: 800px;
    border: 5px solid white;
    border-radius: 25px;
    background: black;
    padding: 20px 40px;

    animation: popInAndUp 0.6s cubic-bezier(0.1, 0.9, 0.9, 1.0) forwards;

    @media ${devices.mobileL} {
        padding: 10px;
    }

    @keyframes popInAndUp {
        0% {
            opacity: 0;
            transform: translate(0, 100px);
        }

        80% {
            opacity: 1;
        }
    
        100% {
            transform: translate(0, 0);
        }
    }
`;
    
const InfoPane = styled.div`
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr
    align-content: start;
    column-gap: 20px;

    @media ${devices.tablet} {
        grid-template: none / 1fr 1fr;
    }

    @media ${devices.mobileL} {
        grid-template: 1fr / 1fr;

    }
`;

const AlbumArt = styled.img`
    width: 100%;

    @media ${devices.tablet} {
        align-self: center;
    }

    @media ${devices.mobileL} {
        border-radius: 10px;
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
        display: none;
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
`;

const StreamingListItem = styled.li`
    height: 26px;
    p {
        margin: 0;
        vertical-align: middle;
        line-height: 26px;
        display: inline-block;
    }
`;

const CloseLink = styled.button`
    float: right;

    @media ${devices.mobileL} {
        display: none;
    }
`;

const CloseLinkMobile = styled.button`
    display: none;
    margin: auto;

    @media ${devices.mobileL} {
        display: block;    
    }
`;

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 17px;
    &:hover {
        color: cyan;
    }

    @media ${devices.mobileS} {
        font-size: 15px;
    }
`;

const StreamIcon = styled.img`
    vertical-align: top;
    margin: 0 10px;
`;

//TODO: Move StreamingListItem into own component.

export default class AlbumModal extends React.Component {
    render() {
        return (
            <div>
                <FlexContainer>
                    <Modal>
                        <CloseLink onClick={this.props.handleClose}>X</CloseLink>
                        <InfoPane>
                            <AlbumArt src={`/albumart/${this.props.album.albumArt}`} />
                            <AlbumText>
                                <h3>{this.props.album.albumTitle}</h3>
                                <p>{this.props.album.albumDescription}</p>
                            </AlbumText>
                            <StreamingLinkList>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming1.png" alt="SoundCloud" /><p>Soundcloud</p></StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming2.png" alt="Spotify" /><p>Spotify</p></StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming3.png" alt="Apple Music" /><p>Apple Music</p></StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming4.png" alt="Youtube Music" /><p>Youtube Music</p></StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming5.png" alt="Pandora" /><p>Pandora</p></StyledLink></StreamingListItem>
                                <StreamingListItem><StyledLink href="#"><StreamIcon src="streaming6.png" alt="Amazon Music" /><p>Amazon Music</p></StyledLink></StreamingListItem>
                            </StreamingLinkList>
                        </InfoPane>
                        <CloseLinkMobile onClick={this.props.handleClose}>Close</CloseLinkMobile>
                    </Modal>
                    <Shroud onClick={this.props.handleClose}>
                    </Shroud>
                </FlexContainer>
            </div>
        )
    }
}