import React from 'react'

export default function SearchItems(
    {surah}
) {
    return (
        <div className="px-0 py-2 text-center search-items">
            <a href className="mx-3 search-items">{surah}</a>
        </div>
    )
}
