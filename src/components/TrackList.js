import React from 'react';

export default function TrackList({ className, tracks }) {

    return (
        <ul className={className}>
            {
                tracks.map(track => (
                    <li>{track}</li>
                ))
            }
        </ul>
    )
}