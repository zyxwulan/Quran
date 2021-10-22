import React from 'react'

export default function Buttons(
    { text, link }
) {
    return (
        <>
        <a className="btn btn-light" href={link} >
            {text}
        </a>
        </>
    )
}
