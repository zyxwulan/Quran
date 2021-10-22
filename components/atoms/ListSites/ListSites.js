import React from 'react'

export default function ListSites (
    { link, text }
) {
    return (
        <>
            <li className="sites-items">
                <a href={link}>{text}</a>
            </li>
        </>
    )
}
