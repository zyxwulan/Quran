import React from 'react'
import Image from 'next/image'
import SearchBar from '../molecules/searchBar'

export default function Search() {
    return (
        <div className="container search">
            <div className="text-center mt-4">
                <Image src="/images/quran-logo.png" width={300} height={180} />
            </div>
            <h2 className="text-center mt-2 mb-3 quran-title">The Noble Quran</h2>
            <SearchBar />
        </div>
    )
}
