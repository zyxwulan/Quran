import React from 'react'

export default function Languages(
    {lang, value}
) {
    return (
        <>
        <option value={value}>{lang}</option>
        </>
    )
}
