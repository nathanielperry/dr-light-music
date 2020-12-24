import React from 'react';            
import styled from 'styled-components';
import devices from '../styles/devices';
import technoBabble from '../lib/technobabble/technobabble';
import _ from 'lodash';

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
    
    background: url(scanlines.png) repeat;
    border: 32px double black;
    border-image: url(border.png) 32 repeat;

    @media ${devices.mobileL} {
        width: 320px;
        height: 500px;
    }
`;

const AlbumList = styled.ul`
    margin: auto;
    padding: 0;
    width: 100%;
    height: 425px;
    list-style: none;
    
    display: flex;
    flex-direction: column;

    scroll-snap-type: y mandatory;
    scroll-snap-stop: always;
    scroll-behavior: smooth;
    overflow-y: scroll;

    //Hide Scroll Bar
    --ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }

    @media ${devices.mobileL} {
        height: 500px;
    }
`;

const TvScanlines = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    background: url("scanlines.png");
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
    position: absolute;
    height: 75px;
    bottom: 15px;
    left: 125px;                  
    width: 475px;        
    
    @media ${devices.mobileL} {
        display: none;
    }
`;

function getScrollPosition(e) {
    return Math.round(e.target.scrollTop / 425);
}

export default function AlbumsContainer({ albums }) {
    const [ scroll, setScroll ] = React.useState(0);
    const [ commandLines, setCommandLines ] = React.useState([]);

    //Build array of technobabble strings
    React.useEffect(() => {
        async function fetchWordsArray() {
            const asyncArray = [...Array(100)].map((item, i) => {
                return technoBabble.getLineWithWord({
                    usePrefix: Math.random() > 0.5 ? true : false,
                    useSuffix: Math.random() > 0.5 ? true : false,
                    position: ['center', 'start', 'end'][_.random(2)],
                    length: 46,
                })
            });
            setCommandLines(await Promise.all(asyncArray));
        }
        fetchWordsArray();
    }, []);

    const handleScroll = (e) => {
        const classAttr = e.target.className;
        if (typeof classAttr === 'string' && classAttr.includes('AlbumsContainer__AlbumList')) {
            setScroll(getScrollPosition(e));
        }
    };

    return (
        <Container
            id='albums-container'>
            <TvScanlines />
            <OSVersion>
                <p>Light OS v. 2.24.18</p>
            </OSVersion>
            <AlbumIcons
                scroll={scroll} 
                albums={albums}/>
            <AlbumList
                onScroll={handleScroll}>
                { 
                    albums.map((album, i) => (
                        <Album
                            isVisible={i === scroll}
                            album={album}
                            key={album.anchor}>
                        </Album>
                    ))
                }
            </AlbumList>
            <OSCommandLine
                lines={commandLines} />
        </Container>
    )
}