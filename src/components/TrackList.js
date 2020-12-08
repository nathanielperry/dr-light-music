import React from 'react';

export default function TrackList(props) {
    const { tracks } = props;

    return (
        <ul>
            {
                tracks.map(track => (
                    <li>{track}</li>
                ))
            }
        </ul>
    )
}