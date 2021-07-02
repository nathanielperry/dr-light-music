import React from 'react';            
import styled from 'styled-components';
import devices from '../styles/devices';
import technoBabble from '../lib/technobabble/technobabble';

import Album from './Album';
import AlbumIcons from './AlbumIcons';
import OSTextBlitter from './OSTextBlitter';

const Container = styled.div`
    position: relative;
    width: 600px;
    height: 425px;
    margin: auto;

    display: flex;
    overflow: hidden;
    flex-direction: column;
    
    background: url("/scanlines.png") repeat;
    border: 32px double black;
    border-image: url("/border.png") 32 repeat;

    @media ${devices.mobileL} {
        width: 320px;
        height: 500px;
    }
`;

const Row = styled.div`
    display: flex;
`;

const TvScanlines = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    background: url("/scanlines.png");
    opacity: 0.2;
    z-index: 1;
`;

const OSVersion = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 20px;

    color: #c6eef6;
    text-shadow: 2px 0 0 black;
`;

const OSCommandLine = styled(OSTextBlitter)`
    overflow: hidden;
    margin-top: auto;
    height: 75px;
    background: rgba(0, 0, 0, 0.2);

    @media ${devices.mobileL} {
        display: none;
    }
`;

export default function AlbumsContainer({ albums, hash }) {
    const [ commandLines, setCommandLines ] = React.useState([]);

    //Add new technobabble word every X seconds
    React.useEffect(() => {
        async function addNewTechWord() {
            const newVerb = await technoBabble.getVerb();
            const newWord = await technoBabble.getWord();

            setCommandLines(oldLines => [...oldLines, `${newVerb} ${newWord}...`]);
            setTimeout(() => addNewTechWord(), 1000 * (Math.floor(Math.random() * 4)));
        }
        addNewTechWord();
    }, []);

    const renderAlbum = (hash)  => {
        const albumAnchor = hash.replace(/#/, "");
        const album = albums.find(a => a.anchor === albumAnchor);

        return album ? <Album key={album.anchor} album={album} /> : '';
    };

    return (
        <Container
            id='albums-container'>
            <TvScanlines />
            <Row>
                <OSVersion>
                    <p>Light OS v. 2.24.18</p>
                </OSVersion>
                <AlbumIcons
                    hash={hash} 
                    albums={albums}/>
                {   
                    renderAlbum(hash)
                }
            </Row>
            <OSCommandLine
                lines={commandLines} />
        </Container>
    )
}