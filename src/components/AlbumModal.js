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
    display: flex;
    justify-content: space-between;
`;

export default class AlbumModal extends React.Component {
    render() {
        return (
            <div>
                <FlexContainer>
                    <Modal>
                        <AlbumArt src="/albumart/test.jpg" />
                        <InfoPane>
                            <h3>Album Name</h3>
                            <p>A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura (literally without tail in Ancient Greek). The oldest fossil "proto-frog" appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.</p>
                            <StreamingLinkList>
                                <li>Spotify</li>
                                <li>Google Music</li>
                                <li>Apple Music</li>
                            </StreamingLinkList>
                        </InfoPane>
                    </Modal>
                </FlexContainer>
                <Shroud>
                </Shroud>
            </div>
        )
    }
}