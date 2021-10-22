import React from 'react'

export default function AudioControl(
    { src }
) {
    return (
        <div className="container text-center audio-control">
            <audio controls className="audio">
                <source src={src} type="audio/mpeg" />
            </audio>
        </div>
    )
}
