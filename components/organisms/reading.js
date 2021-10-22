import React from 'react'

export default function Reading(
    { surah, page }
) {
    return (
        <>
            <h6 className="reading-surah">{surah}</h6>
            <p className="reading-page">{page}</p>
        </>
    )
}
